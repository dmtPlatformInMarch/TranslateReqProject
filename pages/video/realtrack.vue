<template>
    <div ref="rtvideobox" class="video__box">
        <div>
            <v-file-input ref="fileupload" label="업로드 영상" @change="onChange($event)" />
        </div>
        <div class="video__player">
            <v-row class="video__player__grid" no-gutters>
                <v-col cols="8" class="video__player__box">
                    <div v-if="this.readToVideo != false" class="video">
                        <video-component :url="this.fileURL" />
                    </div>
                    <div v-else>
                        비어있음
                    </div>
                </v-col>
                <v-col class="video__player__meta">
                    <v-btn color="warning" elevation="0" block :disabled="!this.readToVideo" @click="onEmptyFile">
                        <v-icon>
                            mdi-trash-can
                        </v-icon>
                        영상 비우기
                    </v-btn>
                    <v-btn color="error" elevation="0" block :disabled="!this.readToVideo" @click="onClearFile">
                        <v-icon>
                            mdi-close
                        </v-icon>
                        영상 삭제
                    </v-btn>
                </v-col>
            </v-row>
        </div>
        <div class="video__translator">
            <div class="video__translator__title">
                <h1>자막</h1>
                <v-spacer />
                <v-select v-model="mode" :items="modes" filled dense hide-details hide-spin-buttons :disabled="readToVideo" />
                <v-spacer />
                <v-btn 
                    ref="download" 
                    v-show="false" 
                    :href="
                        (isDev ? 'http://localhost:3085' : 'https://api.dmtlabs.kr') +
                            '/video/download/' +
                            this.fileName + '.' + this.mode"
                />
                <v-btn color="#013183" depressed tile dark :disabled="!this.readToVideo" @click="downloadSRT">다운로드</v-btn>
            </div>
            <div class="video__translator__content" v-html="this.track">
                <!--track-component :start="0" :end="0" text="빈 자막" /-->
            </div>
        </div>
        <snack-bar />
        <loading-linear />
    </div>
</template>

<style scoped>
.video__box {
    overflow: scroll;
    height: calc(100% - 12px);
}
.video__box::-webkit-scrollbar {
    display: block;
    width: 10px;
    height: 8px;
}
.video__box::-webkit-scrollbar-track {
    background-color: transparent;
}
.video__box::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #2172FF;
}
.video__player {
    width: auto;
    height: 50%;
    min-height: 500px;
    border: 1px solid red;
}
.video__player__grid {
    height: 100%;
    min-height: 500px;
}
.video__player__box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 15px;
}
.video__player__meta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 15px;
}
.video__translator {
    display: flex;
    flex-direction: column;
    min-height: calc(50% - 128px);
    border: 1px solid red;
}
.video__translator__title {
    display: flex;
    align-items: center;
    margin: 15px;
    padding: 0 15px;
}
.video__translator__content {
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    margin: 0 15px 15px 15px;
    border: 1px solid red;
    white-space: pre-wrap;
}
.video__uploadFile {
    width: 100%;
    padding: 0 50px;
}
.video {
    padding: 25px;
}
</style>

<script>
import VideoComponent from '../../components/VideoComponent.vue';
import SnackBar from '../../components/SnackBar.vue';
import LoadingLinear from '../../components/loadingLinear.vue'
import axios from 'axios';

export default {
    layout: 'RTtrackLayout',
    components: {
        VideoComponent,
        SnackBar,
        LoadingLinear
    },
    data() {
        return {
            isDev: process.env.NODE_ENV.includes('dev'),
            modes: ["vtt", "srt"],
            mode: "vtt",
            readToVideo: false,
            track: "",
        }
    },
    created() {
        this.$nuxt.$on('onTrackVideoEvent', async (filename) => {
            this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
            this.$nuxt.$loading.start();
            this.track = await this.$store.dispatch('videoes/postVideo', this.mode);
            this.$nuxt.$loading.finish();
            this.readToVideo = true;
        });
        this.$nuxt.$on('onScrollTop', () => {
            this.$refs.rtvideobox.scrollBy({
                top: -(this.$refs.rtvideobox.scrollTop),
                behavior: 'smooth'
            });
        });
    },
    computed: {
        language() {
            return this.$store.state.manager.language;
        },
        fileURL() {
            return this.$store.state.videoes.fileURL;
        },
        fileName() {
            return this.$store.state.videoes.fileName;
        }
    },
    methods: {
        extToContentType(ext) {
            switch(ext) {
                case 'mp4':
                    return 'video/mp4';
                case 'webm':
                    return 'video/webm';
                case 'ogg':
                case 'ogv':
                case 'ogm':
                    return 'video/ogg';
                default:
                    return 'application/oct-stream';
            }
        },
        async onChange(e) {
            const fileFormData = new FormData();
            if (e != null) {
                try {
                    const ext = e.name.substring(e.name.lastIndexOf('.') + 1);
                    const name = e.name.substring(0, e.name.lastIndexOf('.'));
                    this.$store.commit('videoes/setFileName', name);
                    this.$store.commit('videoes/setFileExt', ext);
                    fileFormData.append('fileKey', e);

                    this.$nuxt.$loading.start();
                    const preSignedUrl = await this.$store.dispatch('videoes/signedURL', fileFormData);
                    this.$nuxt.$loading.finish();

                    // 업로드
                    const response = await axios({
                        method: 'put',
                        url: preSignedUrl,
                        data: e,
                        headers: {
                            'Content-Type': this.extToContentType(ext),
                        },
                        onUploadProgress: (progressEvent) => {
                            let percentage = (progressEvent.loaded * 100) / progressEvent.total;
                            let percentageCompleted = Math.round(percentage);
                            this.$manage.startLoading();
                            this.$store.commit('manager/setUploadLoading', percentageCompleted);
                        }
                    });
                    
                    // 영상 인식
                    if (response.status === 200) {
                        this.$store.dispatch('videoes/setURL').then(
                            async () => {
                                console.time("Recognition Time");
                                this.$nuxt.$loading.start();
                                this.track = await this.$store.dispatch('videoes/postVideo', this.mode);
                                this.$nuxt.$loading.finish();
                                console.timeEnd("Recognition Time");
                                this.readToVideo = true;
                                this.$store.dispatch('videoes/getFiles');
                            }
                        );
                    } else {
                        this.$menage.showMessage
                        // onError!!
                        console.log("Upload Error");
                        return;
                    }
                    

                } catch (err) {
                    this.$nuxt.$loading.finish();
                    console.log(err);
                }
            } else {
                console.log("e is null");
            }
        },
        async downloadSRT() {
            try {
                await this.$store.dispatch('videoes/textToTrack', {
                    track: this.track,
                    ext: this.mode
                });
                this.$refs.download.$el.click();
            } catch (err) {

            }
        },
        onEmptyFile() {
            this.readToVideo = !this.readToVideo;
            this.track = "";
        },
        async onClearFile() {
            const message = await this.$store.dispatch('videoes/deleteFile');
            if (message === "삭제 성공") {
                this.$manage.showMessage({ message: "삭제 성공", color: "success" });
            } else {
                this.$manage.showMessage({ message: "삭제 실패", color: "error" });
            }
            this.$store.commit('videoes/setFileURL', '');
            this.readToVideo = false;
            this.track = "";
        }
    }
}
</script>