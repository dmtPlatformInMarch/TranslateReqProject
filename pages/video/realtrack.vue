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
                        작업 파일에서 선택하세요
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
              
                <!-- <v-spacer /> -->
                <!-- <v-select class = "button__select__mode" v-model="mode" :items="modes" filled dense hide-details hide-spin-buttons :disabled="readToVideo" /> -->
                <!-- <v-spacer /> -->
                
                <client-only>
                    <v-select class="lang__select" v-model="req_lang" :items="languages"/>
                </client-only>
                <v-spacer />
                <h3> mode : </h3>
                <v-select class = "button__select__mode" v-model="mode" :items="modes" filled dense hide-details hide-spin-buttons :disabled="readToVideo" />
                <v-spacer />
                <client-only>
                    <v-select class="lang__select" v-model="grant_lang" :items="languages"/>
                </client-only>
                <v-spacer />
                <div class="video__translator__btngroup">
                    <v-btn 
                        ref="download" 
                        v-show="false" 
                        :href="
                            (isDev ? 'http://localhost:3085' : 'https://api.dmtlabs.kr') +
                                '/video/download/' +
                                this.fileName + '.' + this.mode"
                    />
                    <!-- <v-btn class="video__translator__btn" color="#013183" depressed tile dark :disabled="!this.readToVideo" @click="downloadSRT">다운로드</v-btn>
                    <v-btn class="video__translator__btn" color="#013183" depressed tile dark :disabled="!this.readToVideo" @click="translation">번역하기</v-btn> -->
                </div>
            </div>
            <div>
                <v-btn class="video__translator__btn" color="#013183" depressed tile dark :disabled="(!this.readToVideo || this.mode ==='srt')" @click="applyTrack">자막보기</v-btn>
                <v-btn class="video__translator__btn" color="#013183" depressed tile dark :disabled="!this.readToVideo" @click="downloadSRT">다운로드</v-btn>
                <v-btn class="video__translator__btn" color="#013183" depressed tile dark :disabled="!this.readToVideo" @click="translation">번역하기</v-btn>
            </div>
            <div class="video__translator__wrapper">
                <div class="video__translator__content__before" v-html="this.track" />
                <div class="video__translator__content__after" v-html="this.transTrack" />
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
    /* background: #2172FF; */
    background: lightgrey;
}
.video__player {
    width: auto;
    height: 50%;
    min-height: 625px;
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
    font-size : 1.5rem;
    /* border  : 1px solid red; */
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
    border-top: 1px solid grey;
}
.video__translator__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-left:5%;
    /* padding: 0 15px; */
}

.video__translator__wrapper {
    display: flex;
    justify-content: space-around;
}
.video__translator__content__before {
    min-height: 30vh;
    width: 35vw;
    display: flex;
    flex-direction: column;
    margin: 0 15px 15px 15px;
    padding: 15px;
    border: 1px solid grey;
    white-space: pre-wrap;
}

.video__translator__content__after {
    min-height: 30vh;
    width: 35vw;
    display: flex;
    flex-direction: column;
    margin: 0 15px 15px 15px;
    padding: 15px;
    border: 1px solid #2172FF;
    white-space: pre-wrap;
}


.video__translator__btngroup {
    display: flex;
}
.video__translator__btn {
    margin: 5px;
}
.video__uploadFile {
    width: 100%;
    padding: 0 50px;
}
.video {
    padding: 25px;
}

.button__select__mode{
    width : 5%;
}

</style>

<script>
import VideoComponent from '../../components/VideoComponent.vue';
import SnackBar from '../../components/SnackBar.vue';
import LoadingLinear from '../../components/loadingLinear.vue'
import axios from 'axios';


export default {
    layout: 'RTtrackLayout',
    // layout: 'default',
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
            readyToTrack: false,
            track: "",
            transTrack: "",
            trackArray: [],
            timeLine: [],
            req_lang: "한국어",
            grant_lang: "중국어(간체)",
            req_code: "ko",
            grant_code: "zh-CN"
        }
    },
    created() {
        this.$nuxt.$on('onTrackVideoEvent', async (filename) => {
            this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
            console.time("Recognition Time");
            this.$nuxt.$loading.start();
            const trackResponse = await this.$store.dispatch('videoes/postVideo', this.mode);
            this.$nuxt.$loading.finish();
            console.timeEnd("Recognition Time");
            this.track = trackResponse.track;
            this.trackArray = trackResponse.segment;
            this.timeLine = trackResponse.timeline;
            this.readToVideo = true;
            this.readyToTrack = true;
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
        languages() {
            return this.$LANGUAGES_KO;
        },
        fileURL() {
            return this.$store.state.videoes.fileURL;
        },
        fileName() {
            return this.$store.state.videoes.fileName;
        }
    },
    watch: {
        req_lang(value) {
            this.req_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(value)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(value)];
        },
        grant_lang(value) {
            this.grant_code = this.language === '한국어' ? this.$LANG_CODE[this.$LANGUAGES_KO.indexOf(value)] : this.$LANG_CODE[this.$LANGUAGES_EN.indexOf(value)];
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
            this.transTrack = "";
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
                                const trackResponse = await this.$store.dispatch('videoes/postVideo', this.mode);
                                this.$nuxt.$loading.finish();
                                console.timeEnd("Recognition Time");
                                this.track = trackResponse.track;
                                this.trackArray = trackResponse.segment;
                                this.timeLine = trackResponse.timeline;
                                this.readToVideo = true;
                                this.readyToTrack = true;
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
                console.log(err);
            }
        },
        async translation() {
            try {
                this.$nuxt.$loading.start();
                const transResponse = await this.$store.dispatch('videoes/textToTrans', {
                    from: this.req_code,
                    to: this.grant_code,
                    track: this.trackArray,
                    timeline: this.timeLine,
                    mode: this.mode
                });
                this.transTrack = transResponse;
                const textTrack = await this.$store.dispatch('videoes/textToTrack', {
                    track: this.transTrack,
                    ext: "vtt"
                });
                this.$nuxt.$loading.finish();
                if (this.mode === 'vtt') this.$nuxt.$emit('transTracks', this.grant_lang);
            } catch (err) {
                console.log(err);
            }
        },
        async applyTrack() {
            try {
                this.$nuxt.$loading.start();
                await this.$store.dispatch('videoes/textToTrack', {
                    track: this.track,
                    ext: "vtt"
                });
                this.$nuxt.$loading.finish();
                this.$nuxt.$emit('newTracks', this.req_lang);
            } catch (err) {
                console.log(err);
            }
        },
        onEmptyFile() {
            this.readToVideo = false;
            this.readyToTrack = false;
            this.track = "";
            this.transTrack = "";
            this.trackArray = [];
            this.timeLine = [];
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
            this.readyToTrack = false;
            this.track = "";
            this.transTrack = "";
            this.trackArray = [];
            this.timeLine = [];
        }
    }
}
</script>