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
                <client-only>
                    <v-select class="lang__select" v-model="req_lang" :items="languages" :disabled="!this.readyToTrack" />
                    <v-select class="lang__select" v-model="grant_lang" :items="languages" :disabled="!this.readyToTrack" />
                </client-only>
                <v-spacer />
                <div class="video__translator__btngroup">
                    <v-btn 
                        ref="download"
                        v-show="false"
                        :href="
                            (isDev ? 'http://localhost:3085' : 'https://api.dmtlabs.kr') +
                            '/video/download/' +
                            this.fileName + '.srt'"
                    />
                    <v-btn class="video__translator__btn" color="#2172FF" depressed tile dark :disabled="!this.readToVideo" @click="createTrackSRT">자막 다운로드 (.srt)</v-btn>
                    <v-btn class="video__translator__btn" color="#2172FF" depressed tile dark :disabled="!this.readToVideo" @click="createTrackVTT">자막 내보내기 (.vtt)</v-btn>
                    <v-btn class="video__translator__btn" color="#013183" depressed tile dark :disabled="!this.readToVideo" @click="bringTrack">자막 가져오기</v-btn>
                    <v-btn class="video__translator__btn" color="#013183" depressed tile dark :disabled="!this.readyToTrack" @click="bringTransTrack">자막 번역하기</v-btn>
                </div>
            </div>
            <div v-for="(tr, index) in videoTrack" :key="index" class="video__translator__content">
                <track-component :start="tr.start" :end="tr.end" :text="tr.text" :trans="transTrack[index]" :idx="index" />
            </div>
        </div>

        <v-dialog v-model="dialog" width="250">
            <v-card>
                <v-card-title>
                    <h5>정말 가져오시겠습니까?</h5>
                </v-card-title>

                <v-card-text>
                    <span style="font-weight: bold">수정하는 중</span>에 가져오는 경우, <br />
                    수정한 내용이 <span style="color:red">모두 사라집니다.</span>
                </v-card-text>

                <v-card-actions>
                    <v-spacer />
                    <v-btn text @click="getTrack">예</v-btn>
                    <v-btn text @click="dialogFalse">아니오</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
.video__translator__btngroup {
    display: flex;
}
.video__translator__btn {
    margin: 5px;
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
.lang__select {
    width: 50px;
}
</style>

<script>
import VideoComponent from '../../components/VideoComponent.vue';
import TrackComponent from '../../components/TrackComponent.vue';
import SnackBar from '../../components/SnackBar.vue';
import LoadingLinear from '../../components/loadingLinear.vue'
import axios from 'axios';

export default {
    layout: 'VideoLayout',
    components: {
        VideoComponent,
        TrackComponent,
        SnackBar,
        LoadingLinear
    },
    data() {
        return {
            isDev: process.env.NODE_ENV.includes('dev'),
            readToVideo: false,
            readyToTrack: false,
            videoTrack: [],
            transTrack: [],
            dialog: false,
            req_lang: "한국어",
            grant_lang: "중국어(간체)",
            req_code: "ko",
            grant_code: "zh-CN"
        }
    },
    created() {
        this.$nuxt.$on('onVideoEvent', (filename) => {
            this.readToVideo = true;
            this.readyToTrack = false;
            this.videoTrack = [];
            this.transTrack = [];
            this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
        });
        this.$nuxt.$on('onScrollTop', () => {
            this.$refs.videobox.scrollBy({
                top: -(this.$refs.videobox.scrollTop),
                behavior: 'smooth'
            });
        });
        this.$nuxt.$on('timeChange', (time, index) => {
            if (time != undefined) {
                this.videoTrack[index].start = time.substring(0, time.indexOf(' ')).trim();
                this.videoTrack[index].end = time.substring(time.lastIndexOf(' ') + 1).trim();
            }
        });
        this.$nuxt.$on('transChange', (transText, index) => {
            if (transText != undefined) {
                console.log(transText);
                //this.videoTrack[index].end = transText;
            }
        });
        this.$nuxt.$on('textChange', (text, index) => {
            if (text != undefined) {
                this.videoTrack[index].text = text;
            }
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
        },
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
        timeTransSRT(time) {
            const srtTime = time.replace('.', ',');
            return srtTime;
        },
        async onChange(e) {
            const fileFormData = new FormData();
            if (e != null) {
                try {
                    const ext = e.name.substring(e.name.lastIndexOf('.') + 1);
                    const name = e.name.substring(0, e.name.lastIndexOf('.'));
                    this.$store.commit('videoes/setFileName', name);
                    fileFormData.append('fileKey', e);
                    this.$nuxt.$loading.start();
                    const preSignedUrl = await this.$store.dispatch('videoes/signedURL', fileFormData);
                    this.$nuxt.$loading.finish();

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
            if (this.videoTrack != []) this.videoTrack = [];
            this.dialog = !this.dialog;
            this.readyToTrack = true;
            try {
                this.$nuxt.$loading.start();
                const loadStore = await this.$store.dispatch('videoes/loadTrack');
                this.$nuxt.$loading.finish();
                this.videoTrack = loadStore.segment;
            } catch (err) {
                this.$nuxt.$loading.finish();
                console.log("자막 가져오기 에러");
            }
        },
        async createTrackVTT() {
            if (this.videoTrack.length === 0) {
                this.$manage.showMessage({
                    message: "해당 비디오의 자막이 없습니다.",
                    color: "warning",
                });
            } else {
                let tracks = "WEBVTT\n\n";
                try {
                    for (let track of this.videoTrack) {
                        tracks += `${track.start} --> ${track.end}\n${track.text}\n\n`;
                    }
                    this.$nuxt.$loading.start();
                    const textTrack = await this.$store.dispatch('videoes/textToTrack', {
                        track: tracks,
                        ext: "vtt"
                    });
                    this.$nuxt.$loading.finish();
                    this.$nuxt.$emit('newTracks');
                    this.$manage.showMessage({ message: "자막 업데이트", color: "success" });
                } catch (err) {
                    this.$nuxt.$loading.finish();
                    console.log(err);
                }
            }
        },
        async createTrackSRT() {
            if (this.videoTrack.length === 0) {
                this.$manage.showMessage({
                    message: "해당 비디오의 자막이 없습니다.",
                    color: "warning",
                });
            } else {
                let tracks = "";
                let count = 1;
                try {
                    for (let track of this.videoTrack) {
                        tracks += `${count}\n${this.timeTransSRT(track.start)} --> ${this.timeTransSRT(track.end)}\n${track.text}\n\n`;
                        count++;
                    }
                    this.$nuxt.$loading.start();
                    const textTrack = await this.$store.dispatch('videoes/textToTrack', {
                        track: tracks,
                        ext: "srt"
                    });
                    this.$nuxt.$loading.finish();
                    this.$refs.download.$el.click();
                    this.$manage.showMessage({ message: "자막 다운로드", color: "success" });
                } catch (err) {
                    console.log(err);
                }
            }
        },
        goTransTrack() {

        },
        goTrack() {
            this.$nuxt.$emit('trackRefresh');
        },
        bringTrack() {
            this.dialog = !this.dialog;
        },
        async bringTransTrack() {
            // 트랙 배열을 넘김
            this.$nuxt.$loading.start();
            const transTrackArray = await this.$store.dispatch('videoes/transTrack', {
                "from": this.req_code,
                "to": this.grant_code,
                "track": this.videoTrack
            });
            this.$nuxt.$loading.finish();
            for (let i = 0; i < this.videoTrack.length; i++) {
                this.transTrack[i] = transTrackArray[i];
            }
            this.transTrack = this.transTrack.slice();
        },
        onEmptyFile() {
            this.readToVideo = false;
            this.readyToTrack = false;
            this.videoTrack = [];
            this.transTrack = [];
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
            this.videoTrack = [];
            this.transTrack = [];
        },
        dialogFalse() {
            this.dialog = !this.dialog;
            this.readyToTrack = false;
        }
    }
}
</script>