<template>
    <div class="wrapper">
        <div class="video__box">
            <input ref="upload" type="file" v-show="false" @change="onChange" />
            <!--영상 선택 시-->
            <div class="video__player" v-if="readToVideo === true">
                <video class="player" :src="videoURL" controls preload="auto">
                </video>
            </div>
            <!--영상 미선택 시-->
            <div class="video__player" v-else>
                <v-dialog v-model="dialog" width="60vw">
                    <template v-slot:activator="{ attrs }">
                        <v-btn rounded v-bind="attrs" @click="uploadVideo">
                            <v-icon>
                                mdi-plus
                            </v-icon>
                            새로 만들기
                        </v-btn>
                    </template>

                    <v-card>
                        <div class="dialog__box">
                            <div class="dialog__box__setting">
                                <div class="setting__select__box">
                                    <v-img class="img" src="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png" />
                                </div>
                                <div class="setting__select__box" v-if="beforeSelect">
                                    <div class="select__box">
                                        <div >
                                            <v-toolbar class="header__class" elevation="0">
                                                <v-toolbar-title class="font-weight-bold">
                                                    영상의 원본 언어
                                                </v-toolbar-title>
                                            </v-toolbar>
                                            <div class="overflow-y-auto list__wrapper">
                                                <v-list>
                                                    <v-list-item-group v-model="req" mandatory>
                                                        <v-list-item v-for="(item, index) in languages" :key="index" active-class="list__select">
                                                            <v-list-item-title>
                                                                {{ item }}
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                    </v-list-item-group>
                                                </v-list>
                                            </div>
                                        </div>
                                        <v-icon>
                                            mdi-arrow-right
                                        </v-icon>
                                        <div>
                                            <v-toolbar class="header__class" elevation="0">
                                                <v-toolbar-title class="font-weight-bold">
                                                    번역하고 싶은 언어
                                                </v-toolbar-title>
                                            </v-toolbar>
                                            <div class="overflow-y-auto list__wrapper">
                                                <v-list>
                                                    <v-list-item-group v-model="grant" mandatory>
                                                        <v-list-item v-for="(item, index) in languages" :key="index" active-class="list__select">
                                                            <v-list-item-title>
                                                                {{ item }}
                                                            </v-list-item-title>
                                                        </v-list-item>
                                                    </v-list-item-group>
                                                </v-list>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="action__box">
                                        <v-btn block rounded color="#013183" dark @click="onTaskStart">
                                            번역하기
                                        </v-btn>
                                    </div>
                                </div>
                                <div class="dialog__box__process" v-else>
                                    <div class="process__stepper">
                                        <div class="stepper">
                                            <v-btn class="stepper__btn" block rounded color="primary" :disabled="step != 1" @click="step = 2">
                                                영상 업로드
                                            </v-btn>
                                        </div>
                                        <transition v-if="step === 1">
                                            <div class="arrow__wrapper" >
                                                <div class="arrow">▼</div>
                                                <div class="arrow">▼</div>
                                                <div class="arrow">▼</div>
                                            </div>
                                        </transition>
                                        <div v-else class="arrow__wrapper">
                                            <div>▼</div>
                                            <div>▼</div>
                                            <div>▼</div>
                                        </div>
                                        <div div class="stepper">
                                            <v-btn class="stepper__btn" block rounded color="warning" :disabled="step != 2" @click="step = 3">
                                                영상 인식
                                            </v-btn>
                                        </div>
                                        <transition v-if="step === 2">
                                            <div class="arrow__wrapper">
                                                <div class="arrow">▼</div>
                                                <div class="arrow">▼</div>
                                                <div class="arrow">▼</div>
                                            </div>
                                        </transition>
                                        <div v-else class="arrow__wrapper">
                                            <div>▼</div>
                                            <div>▼</div>
                                            <div>▼</div>
                                        </div>
                                        <div div class="stepper">
                                            <v-btn class="stepper__btn" block rounded color="success" :disabled="step != 3" @click="step = 1">
                                                자막 번역
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dialog__box__loading">
                                <v-progress-linear v-model="loading" color="#013183" height="25px">
                                    <template v-slot:default="{ value }">
                                        <strong>{{ Math.ceil(value) }}%</strong>
                                    </template>
                                </v-progress-linear>
                            </div>
                        </div>
                    </v-card>
                </v-dialog>
            </div>
            <div class="video__action">
                <v-btn class="video__action__btn" rounded color="#013183" dark @click="newVideo">
                    새 영상
                </v-btn>
                <v-btn class="video__action__btn" rounded color="#013183" dark @click="readyToTrack = !readyToTrack">
                    다운로드
                </v-btn>
            </div>
            <div class="video__list">
                <v-expansion-panels class="video__list__group" tile dark>
                    <v-expansion-panel>
                        <v-expansion-panel-header color="#013183" >
                            파일 목록
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="video__list__content">
                            <div class="list__content__disabled">
                                로그인 후<br /> 이용가능 합니다.
                            </div>
                        </v-expansion-panel-content>
                        <!--v-expansion-panel-content class="video__list__content overflow-y-auto">
                            <v-list v-for="(item, index) in videoList" :key="index">
                                <v-list-item>
                                    <v-list-item-title class="content__list__title">
                                        <v-btn class="content__list__btn" x-large depressed>
                                            <v-icon>
                                                mdi-file-video
                                            </v-icon>
                                            {{ sliceName(item.Key) }}
                                        </v-btn>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-expansion-panel-content-->
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>

        <div ref="trackBox" class="track__box">
            <v-virtual-scroll v-if="readyToTrack" ref="trackscroll" class="track__box__scroll" bench="15" :items="fullTrack" :height="virtualHeight" item-height="156">
                <template v-slot:default="{ item, index }">
                    <div class="track__box__wrapper">
                        <track-component :start="item.start" :end="item.end" :text="item.text" :trans="transTrack[index]" :idx="index" />
                    </div>
                </template>
            </v-virtual-scroll>
            <div v-else>
                영상을 추가하면 자막을 편집하실 수 있습니다. <br />
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
}
.video__box {
    position: absolute;
    left: 0;
    width: 25%;
    height: 100%;
    border-right: 1px solid #8C867A;
}
.video__player {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35%;
    background: black;
}
.player {
    width: 100%;
    height: 100%;
}
.video__action {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 5%;
}
.video__action__btn {
    width: 45%;
}
.video__list {
    position: absolute;
    width: 100%;
    height: 60%;
    bottom: 0;
}
.video__list__group {
    position: absolute; 
    bottom: 0;
}
.video__list__content {
    height: 50vh;
}
.list__content__disabled {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.content__list__title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.content__list__btn {
    flex: 1 1 0;
    justify-content: flex-start !important;
}
.content__list__btn >>> span {
    width: 100%;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}
.track__box {
    display: flex;
    position: absolute;
    left: 25%;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 100%;
}
.track__box__scroll {
    display: flex;
    flex-direction: column;
}
.track__box__scroll::-webkit-scrollbar {
    display: block;
    width: 10px;
    height: 8px;
}
.track__box__scroll::-webkit-scrollbar-track {
    background-color: transparent;
}
.track__box__scroll::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #2172FF;
}
.track__box__wrapper {
    width: 95%;
    align-items: center;
    justify-content: center;
}
.track__box >>> .v-virtual-scroll__item {
    display: flex;
    align-items: center;
    justify-content: center;
}
.dialog__card {
    width: 75vw;
}
.dialog__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 50vh;
    padding: 25px;
}
.dialog__box__setting {
    display: flex;
    width: 100%;
    height: 90%;
}

.setting__select__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;
}
.dialog__box__process {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
}
.dialog__box__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
}
.select__box {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 90%;
    padding: 25px;
}
.action__box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10%;
    padding: 25px;
}
.list__wrapper {
    width: 100%;
    height: 80%;
}
.header__class {
    border-bottom: 3px solid green;
}
.list__select {
  border: solid #013183 !important;
  color: #013183 !important;
}
.process__stepper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.stepper {
    width: 50%;
    padding: 5%;
}
.stepper__btn {
    border: 3px solid #013183;
}
.arrow__wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.arrow {
    color: #2172FF;
    animation: arrowAnimation 1.5s infinite ease;
    animation-fill-mode: both;
}
.arrow:nth-child(1) {
    animation-delay: 0.75s
}
.arrow:nth-child(2) {
    animation-delay: 1s;
}
.arrow:nth-child(3) {
    animation-delay: 1.25s;
}

@keyframes arrowAnimation {
    0% {
        color: white;
    }
    100% {
        color: #2172FF;
    }
}
</style>

<script lang="js">
import TrackComponent from '../../components/TrackComponent.vue';
import axios from 'axios';

export default {
    layout: 'ServiceLayout',
    components: {
        TrackComponent,
    },
    created() {
        if (this.readyToTrack === true) {
            if (typeof window !== 'undefined') {
                window.addEventListener("resize", () => {
                    this.virtualHeight = this.$refs.trackBox.offsetHeight;
                });
            }
        }
        this.$nuxt.$on("onScrollTop", () => {
            this.$refs.trackscroll.$el.scrollBy({
                top: -(this.$refs.trackscroll.scrollTop),
                behavior: 'smooth'
            });
        })
    },
    data() {
        return {
            url: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/360p_20%EB%B6%8448%EC%B4%88.mp4",
            // 컨트롤 변수
            virtualHeight: 0,
            readToVideo: false,
            readyToTrack: false,
            dialog: false,
            // 데이터 변수
            file: {},
            fullTrack: [],
            timeLine: [],
            originalTrack: [],
            transTrack: [],
            track: "",
            transtrack: "",
            loading: 0,
            dialog: false,
            beforeSelect: true,
            req: 0,
            grant: 2,
            step: 1,
        }
    },
    mounted() {
        this.$store.dispatch('videoes/getFiles');
        this.virtualHeight = this.$refs.trackBox.offsetHeight;
    },
    computed: {
        videoList() {
            return this.$store.state.videoes.files;
        },
        videoURL() {
            return this.$store.state.videoes.fileURL;
        },
        languages() {
            return this.$LANGUAGES_KO;
        },
        req_lang() {
            return this.languages[this.req];
        },
        grant_lang() {
            return this.languages[this.grant]
        }
    },
    watch: {
        // 여기서 로딩바 관측하여 단계를 넘김.
    },
    methods: {
        uploadVideo() {
            this.$refs.upload.click();
        },
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
        loadingLogic(step) {
            switch(step) {
                case 1:
                    // 영상 업로드
                    
                    break;
                case 2:
                    // 영상 인식

                    break;
                case 3:
                    // 자막 번역

                    break;
                default:
                    // 종료 트리거를 받는다면
                    this.loading = this.step * 33;
                    this.step++;
            }
        },
        sliceName(str) {
            return str.substring(str.lastIndexOf('/') + 1);
        },
        trackMerge() {
            let result = [];
            for (let i = 0; i < Math.max(this.timeLine.length, this.originalTrack.length); i++) {
                result[i] = { ...this.timeLine[i], ...{ text : this.originalTrack[i] } };
            }
            this.fullTrack = result;
        },
        async onChange(event) {
            try {
                if (event != null && event.target.files.length != 0) {
                    this.file = event.target.files[0];
                    this.dialog = true;
                } else {
                    console.log("e is null");
                }
            } catch (err) {
                console.log(err);
            }
        },
        async onTaskStart() {
            this.originalTrack = "";
            this.transTrack = "";
            // 파일 전처리
            const filename = this.file.name;
            const fileFormData = new FormData();
            const name = filename.substring(0, filename.lastIndexOf('.'));
            const ext = filename.substring(filename.lastIndexOf('.') + 1);
            this.$store.commit('videoes/setFileName', name);
            this.$store.commit('videoes/setFileExt', ext);
            fileFormData.append('fileKey', this.file);

            try {
                // Signed URL 발급
                const preSignedUrl = await this.$store.dispatch('videoes/signedURL', fileFormData);

                // Signed URL을 통한 업로드
                const response = await axios.put(preSignedUrl, this.file, {
                    headers: {
                        'Content-Type': this.extToContentType(ext),
                    },
                    onUploadProgress: (progressEvent) => {
                        let percentage = (progressEvent.loaded * 100) / progressEvent.total;
                        let percentageCompleted = Math.round(percentage);
                        console.log(progressEvent.loaded + " / " + progressEvent.total, percentage);
                    }
                });

                this.readToVideo = true;

                // 영상 인식
                if (response.status === 200) {
                    this.$store.dispatch('videoes/setURL')
                    .then(
                        async () => {
                            console.time("Recognition Time");
                            this.$nuxt.$loading.start();
                            const trackResponse = await this.$store.dispatch('videoes/postVideo');
                            this.$nuxt.$loading.finish();
                            console.timeEnd("Recognition Time");
                            this.track = trackResponse.track;
                            this.originalTrack = trackResponse.segment;
                            this.timeLine = trackResponse.timeline;
                            console.log("Merge");
                            this.trackMerge();
                            this.$store.dispatch('videoes/getFiles');
                            this.readyToTrack = true;
                        }
                    );
                } else {
                    this.$menage.showMessage({ 
                        message: "영상 업로드에 실패했습니다.\n관리자에게 문의하세요.", 
                        color: "error" 
                    });
                }
            } catch(err) {
                this.$nuxt.$loading.finish();
                console.log(err);
            }
        },
        newVideo() {
            this.readToVideo = false;
            this.readyToTrack = false;
            this.timeLine = [];
            this.originalTrack = [];
            this.transTrack = [];
            this.track = "";
            this.transtrack = "";
            this.$refs.upload.click();
        }
    }
}
</script>
