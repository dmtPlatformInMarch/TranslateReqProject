<template>
    <div ref="videobox" class="video__box">
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
                <v-btn color="#013183" depressed tile dark :disabled="!this.readToVideo" @click="getTrack">자막 가져오기</v-btn>
            </div>
            <div v-for="(tr, index) in videoTrack" :key="index" class="video__translator__content">
                <track-component :start="tr.start" :end="tr.end" :text="tr.text" />
            </div>
        </div>
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
    min-height: 625px;
    border: 1px solid red;
}
.video__player__grid {
    height: 100%;
    min-height: 625px;
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
    display: flex;
    flex-direction: column;
    margin: 0 15px 15px 15px;
    border: 1px solid red;
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
import TrackComponent from '../../components/TrackComponent.vue';

export default {
    layout: 'VideoLayout',
    components: {
        VideoComponent,
        TrackComponent
    },
    data() {
        return {
            readToVideo: false,
            videoTrack: [],
        }
    },
    created() {
        this.$nuxt.$on('onVideoEvent', (filename) => {
            this.readToVideo = true;
            this.videoTrack = [];
            this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
        });
        this.$nuxt.$on('onScrollTop', () => {
            this.$refs.videobox.scrollBy({
                top: -(this.$refs.videobox.scrollTop),
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
                    fileFormData.append('fileKey', e);
                    const preSignedUrl = await this.$store.dispatch('videoes/signedURL', fileFormData);
                    this.$nuxt.$loading.start();
                    const response = await fetch(
                        new Request(preSignedUrl, {
                            method: "PUT",
                            headers: {
                                'Content-Type': this.extToContentType(ext),
                        },
                            body: e,
                        }),
                    );
                    this.$nuxt.$loading.finish();
                    if (response.status === 200) {
                        this.$store.dispatch('videoes/setURL').then(
                            () => { 
                                this.readToVideo = true;
                                this.$store.dispatch('videoes/getFiles');
                            }
                        );
                        console.log("Upload Success");
                    } else {
                        // onError!!
                        console.log("Upload Error");
                        return;
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                console.log("e is null");
            }
        },
        async getTrack() {
            try {
                const loadStore = await this.$store.dispatch('videoes/loadTrack');
                this.videoTrack = loadStore.segment;
            } catch (err) {

            }
        },
        onEmptyFile() {
            this.readToVideo = !this.readToVideo;
            this.videoTrack = [];
        },
        onClearFile() {
            this.$store.dispatch('videoes/deleteFile');
            this.$store.commit('videoes/setFileURL', '');
            this.$refs.fileupload.internalValue = null;
            this.readToVideo = false;
        }
    }
}
</script>