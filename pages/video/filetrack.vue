<template>
    <div class="wrapper">
        <div class="video__box">
            <input ref="upload" type="file" v-show="false" @change="onChange" accept=".mp4" />
            <!--영상 선택 시-->
            <div class="video__player" v-if="readToVideo === true">
                <video ref="videoplayer" class="player" :src="videoURL" controls preload="auto">
                </video>
            </div>
            <!--영상 미선택 시-->
            <div class="video__player" v-else>
                <v-dialog v-model="dialog" width="60vw" persistent>
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
                                <div class="setting__select__box" @click="dialog = !dialog">
                                    <v-img class="img" src="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png" />
                                </div>
                                <div class="setting__select__box" v-if="beforeSelect">
                                    <div class="select__box">
                                        <div>
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
                                            <v-btn class="stepper__btn" block rounded color="primary" :disabled="step != 1">
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
                                            <v-btn class="stepper__btn" block rounded color="warning" :disabled="step != 2">
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
                                            <v-btn class="stepper__btn" block rounded color="success" :disabled="step != 3">
                                                자막 번역
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dialog__box__loading">
                                <v-progress-linear v-model="loading" color="#013183" height="25px">
                                    <template v-slot:default="{ value }">
                                        <strong style="color: white">{{ Math.ceil(value) }}%</strong>
                                    </template>
                                </v-progress-linear>
                            </div>
                        </div>
                    </v-card>
                </v-dialog>
            </div>
            <!--영상 컨트롤러-->
            <div class="video__action">
                <v-btn class="video__action__btn" rounded color="#013183" :dark="readToVideo" @click.stop="newVideoDialog = !newVideoDialog" :disabled="!readToVideo">
                    <v-icon>
                        mdi-plus
                    </v-icon>
                    새 영상
                </v-btn>
                <v-btn class="video__action__btn" rounded color="#013183" :dark="readToVideo" @click.stop="downloadDialogOpen" :disabled="!readToVideo">
                    <v-icon>
                        mdi-download
                    </v-icon>
                    다운로드
                </v-btn>
            </div>
            <v-dialog v-model="downloadDialog" width="600" persistent>
                <v-card class="download__card">
                    <v-card-title class="download__card__title" tag="div">
                        다운로드 양식 선택
                    </v-card-title>

                    <div class="download__card__content">
                        <div class="hr-sect">텍스트 정보</div>
                        <div class="card__content__text pa-2">
                            <div ref="textTab_1" class="card__content__btn pa-4" @click="firstTextTap">
                                <div class="d-flex align-center justify-center" style="width: 100%; height: 50%;">
                                    <v-icon class="text-h4" :dark="textTab === 1">
                                        mdi-format-text-variant-outline
                                    </v-icon>
                                </div>
                                원문
                            </div>
                            <div ref="textTab_2" class="card__content__btn pa-4" @click="secondTextTap">
                                <div class="d-flex align-center justify-center" style="width: 100%; height: 50%;">
                                    <v-icon class="text-h4" :dark="textTab === 2">
                                        mdi-translate-variant
                                    </v-icon>
                                </div>
                                번역
                            </div>
                        </div>

                        <div class="hr-sect">파일 포맷</div>
                        <div class="card__content__btngroup">
                            <div ref="tab_1" class="card__content__btn pa-4" @click="firstTap">
                                <div class="d-flex align-center justify-center" style="width: 100%; height: 80%;">
                                    <v-icon class="text-h1" :dark="fileTab === 1">
                                        mdi-file
                                    </v-icon>
                                </div>
                                <v-btn class="non-flex readonly__btn font-weight-bold" :ripple="false" depressed rounded block style="width: 100%; height: 20%; font-size: 18px;">
                                    .srt
                                </v-btn>
                            </div>
                            <div ref="tab_2" class="card__content__btn pa-4" @click="secondTap">
                                <div class="d-flex align-center justify-center" style="width: 100%; height: 80%;">
                                    <v-icon class="text-h1" :dark="fileTab === 2">
                                        mdi-file
                                    </v-icon>
                                </div>
                                <v-btn class="non-flex readonly__btn font-weight-bold" :ripple="false" depressed rounded block style="width: 100%; height: 20%; font-size: 18px;">
                                    .vtt
                                </v-btn>
                            </div>
                        </div>
                    </div>

                    <v-card-actions class="card__action">
                        
                        <v-btn class="auto-flex" depressed color="success" @click.stop="downloadFile" :disabled="fileTab === 0 || textTab === 0">
                            <v-icon>
                                mdi-download
                            </v-icon>
                            다운로드
                        </v-btn>
                        <v-btn class="auto-flex" depressed color="error" @click.stop="downloadDialog = !downloadDialog">
                            <v-icon>
                                mdi-close
                            </v-icon>
                            닫기
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <!--파일 목록-->
            <div class="video__list">
                <v-expansion-panels class="video__list__group" tile dark>
                    <v-expansion-panel>
                        <v-expansion-panel-header color="#013183">
                            파일 목록
                        </v-expansion-panel-header>
                        <v-expansion-panel-content v-if="loginState" class="video__list__content">
                            <div class="list__content__disabled">
                                로그인 후<br /> 이용가능 합니다.
                            </div>
                        </v-expansion-panel-content>
                        <v-expansion-panel-content v-else class="video__list__content">
                            <v-virtual-scroll bench="10" :items="videoList" height="50vh" item-height="64">
                                <template v-slot:default="{ item }">
                                    <v-list-item>
                                        <v-list-item-title class="content__list__title">
                                            <v-btn class="content__list__btn" x-large depressed @click.stop="onSelectFile(sliceName(item.Key, '/'))">
                                                <v-icon>
                                                    mdi-file-video
                                                </v-icon>
                                                <div class="list__btn__label">
                                                    {{ sliceName(item.Key, '/') }}
                                                </div>
                                                <v-spacer />
                                                <v-btn icon right @click.stop="deleteFile(item)">
                                                    <v-icon>
                                                        mdi-close
                                                    </v-icon>
                                                </v-btn>
                                            </v-btn>
                                        </v-list-item-title>
                                    </v-list-item>
                                </template>
                            </v-virtual-scroll>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>

        <v-dialog v-model="deleteFileDialog" width="250">
            <v-card>
                <v-card-title>
                    <h5>정말 <span style="font-weight: bold; color:red;">삭제</span>하시겠습니까?</h5>
                </v-card-title>

                <v-card-text>
                    파일을 <span style="font-weight: bold">삭제</span>하는 경우, <br />
                    삭제한 파일을 복구할 수 <span style="color:red">없습니다.</span>
                </v-card-text>

                <v-card-actions>
                    <v-spacer />
                    <v-btn text @click="deleteFileOK">예</v-btn>
                    <v-btn text @click="deleteFileNO">아니오</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="newVideoDialog" width="250">
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
                    <v-btn text @click="uploadVideo">예</v-btn>
                    <v-btn text @click="newVideoDialog = false">아니오</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <div ref="trackBox" class="track__box">
            <v-virtual-scroll ref="trackscroll" v-if="readyToTrack" class="track__box__scroll" bench="15" :items="fullTrack" :height="virtualHeight" item-height="160">
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

        <v-btn
            ref="download"
            v-show="false"
            :href="
                (isDev ? 'http://localhost:3085' : 'https://api.dmtlabs.kr') +
                '/video/download/' +
                sliceFrontName(selectFilename, '.') + '.' + trackMode"
        />
    </div>
</template>

<style scoped>
.non-flex {
    flex: 0 0 auto;
}
.auto-flex {
    flex: 1 1 auto;
}
.readonly__btn {
    opacity: 1 !important;
}
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
}
.list__btn__label {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
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
.track__wrapper {
    width: 100%;
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
    align-items: center;
    justify-content: center;
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
.img {
    flex: 0 0 auto;
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
.download__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
}
.download__card__title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #013183;
    color: white;
}
.download__card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 90%;
    padding: 25px;
}
.card__content__btngroup {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60%;
}
.card__content__btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px dashed grey;
    border-radius: 10%;
    width: 45%;
    height: 100%;
    opacity: 0.6;
    transition: 0.3s;
}
.card__content__btn:hover {
    border: 15px solid #2172FF !important;
    background-color: #2172FF !important;
    opacity: 1 !important;
    cursor: pointer;
}
.card__content__text {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 30%;
}
.card__action {
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
.hr-sect {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
    font-size: 12px;
    width: 100%;
    height: 5%;
}
.hr-sect::before,
.hr-sect::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
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
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", () => {
                this.virtualHeight = this.$refs.trackBox.offsetHeight;
            });
        }
        this.$nuxt.$on("onScrollTop", () => {
            this.$refs.trackscroll.$el.scrollBy({
                top: -(this.$refs.trackscroll.scrollTop),
                behavior: 'smooth'
            });
        });
        this.$nuxt.$on("addItem", async (index) => {
            const branchTime = await this.fullTrack[index].end
            this.fullTrack.splice(index + 1, 0, {
                start: branchTime,
                end: branchTime,
                text: "새로운 자막"
            });
            this.originalTrack.splice(index + 1, 0, "새로운 자막");
            this.transTrack.splice(index + 1, 0, "new Track");
            this.cueTrack.addCue(new VTTCue(this.timeToSec(branchTime), this.timeToSec(branchTime), "새로운 자막"));
            this.transCueTrack.addCue(new VTTCue(this.timeToSec(branchTime), this.timeToSec(branchTime), "new Track"));
        });
        this.$nuxt.$on("deleteItem", (index) => {
            this.fullTrack.splice(index, 1);
            this.originalTrack.splice(index, 1);
            this.transTrack.splice(index, 1);
            this.cueTrack.removeCue(this.cueTrack.cues[index]);
            this.transCueTrack.removeCue(this.transCueTrack.cues[index]);
        });
    },
    data() {
        return {
            isDev: process.env.NODE_ENV.includes('dev'),
            video: {},
            videoTrack: [],
            selectFilename: "",
            // 컨트롤 변수
            loginState: false,
            virtualHeight: 0,
            readToVideo: false,
            readyToTrack: false,
            loading: 0,
            step: 1,
            preSignedUrlResponse: false,
            uploadResponse: false,
            trackCompleteResponse: false,
            selectVideo: false,
            beforeSelect: true,
            // 다이얼로그 제어 변수
            dialog: false,
            newVideoDialog: false,
            downloadDialog: false,
            deleteFileDialog: false,
            fileTab: 0,
            textTab: 0,
            // 데이터 변수
            file: {},
            deleteItem: "",
            fullTrack: [],
            timeLine: [],
            originalTrack: [],
            transTrack: [],
            cueTrack: [],
            transCueTrack: [],
            track: "",
            trans: "",
            req: 0,
            grant: 2,
        }
    },
    mounted() {
        this.$store.dispatch('videoes/getFiles');
        this.virtualHeight = this.$refs.trackBox.offsetHeight;

        // 이벤트 등록
        this.$nuxt.$on('timeChange', (time, index) => {
            if (time != undefined) {
                this.fullTrack[index].start = time.substring(0, time.indexOf(' ')).trim();
                this.fullTrack[index].end = time.substring(time.lastIndexOf(' ') + 1).trim();
                this.timeLine[index].start = time.substring(0, time.indexOf(' ')).trim();
                this.timeLine[index].end = time.substring(time.lastIndexOf(' ') + 1).trim();
                this.cueTrack.cues[index].startTime = this.timeToSec(time.substring(0, time.indexOf(' ')).trim());
                this.cueTrack.cues[index].endTime = this.timeToSec(time.substring(time.lastIndexOf(' ') + 1).trim());
                this.transCueTrack.cues[index].startTime = this.timeToSec(time.substring(0, time.indexOf(' ')).trim());
                this.transCueTrack.cues[index].endTime = this.timeToSec(time.substring(time.lastIndexOf(' ') + 1).trim());
            }
        });
        this.$nuxt.$on('textChange', (text, index) => {
            if (text != undefined) {
                this.fullTrack[index].text = text;
                this.originalTrack[index] = text;
                this.cueTrack.cues[index].text = text;
            }
        });
        this.$nuxt.$on('transChange', (transText, index) => {
            if (transText != undefined) {
                this.transTrack[index] = transText;
                this.transCueTrack.cues[index].text = transText;
            }
        });
        this.$nuxt.$on('timeSet', (index) => {
            this.video.currentTime = this.cueTrack.cues[index].startTime;
        });
    },
    computed: {
        videoList() {
            return this.$store.state.videoes.files;
        },
        videoURL() {
            return this.$store.state.videoes.fileURL;
        },
        language() {
            return this.$store.state.manager.language;
        },
        languages() {
            return this.$LANGUAGES_KO;
        },
        req_lang() {
            return this.languages[this.req];
        },
        grant_lang() {
            return this.languages[this.grant]
        },
        req_code() {
            return this.$LANG_CODE[this.req];
        },
        grant_code() {
            return this.$LANG_CODE[this.grant];
        },
        trackMode() {
            switch(this.fileTab) {
                case 1:
                    return "srt"
                    break;
                case 2: 
                    return "vtt"
                    break;
                case 0:
                default:
                    return "NotFoundMode";
            }
        },
    },
    watch: {
        fileTab(value) {
            if (value === 1) {
                this.$refs.tab_1.style.border = "0";
                this.$refs.tab_1.style.backgroundColor = "#2172FF";
                this.$refs.tab_1.style.opacity = "1";
                this.$refs.tab_2.style.border = "3px dashed grey";
                this.$refs.tab_2.style.backgroundColor = "#FFFFFF";
                this.$refs.tab_2.style.opacity = "0.6";
            } else if (value === 2) {
                this.$refs.tab_1.style.border = "3px dashed grey";
                this.$refs.tab_1.style.backgroundColor = "#FFFFFF";
                this.$refs.tab_1.style.opacity = "0.6";
                this.$refs.tab_2.style.border = "0";
                this.$refs.tab_2.style.backgroundColor = "#2172FF";
                this.$refs.tab_2.style.opacity = "1";
            } else {
                this.$refs.tab_1.style.border = "3px dashed grey";
                this.$refs.tab_1.style.backgroundColor = "#FFFFFF";
                this.$refs.tab_1.style.opacity = "0.6";
                this.$refs.tab_2.style.border = "3px dashed grey";
                this.$refs.tab_2.style.backgroundColor = "#FFFFFF";
                this.$refs.tab_2.style.opacity = "0.6";
            }
        },
        textTab(value) {
            if (value === 1) {
                this.$refs.textTab_1.style.border = "0";
                this.$refs.textTab_1.style.backgroundColor = "#2172FF";
                this.$refs.textTab_1.style.opacity = "1";
                this.$refs.textTab_2.style.border = "3px dashed grey";
                this.$refs.textTab_2.style.backgroundColor = "#FFFFFF";
                this.$refs.textTab_2.style.opacity = "0.6";
            } else if (value === 2) {
                this.$refs.textTab_1.style.border = "3px dashed grey";
                this.$refs.textTab_1.style.backgroundColor = "#FFFFFF";
                this.$refs.textTab_1.style.opacity = "0.6";
                this.$refs.textTab_2.style.border = "0";
                this.$refs.textTab_2.style.backgroundColor = "#2172FF";
                this.$refs.textTab_2.style.opacity = "1";
            } else {
                this.$refs.textTab_1.style.border = "3px dashed grey";
                this.$refs.textTab_1.style.backgroundColor = "#FFFFFF";
                this.$refs.textTab_1.style.opacity = "0.6";
                this.$refs.textTab_2.style.border = "3px dashed grey";
                this.$refs.textTab_2.style.backgroundColor = "#FFFFFF";
                this.$refs.textTab_2.style.opacity = "0.6";
            }
        }
    },
    methods: {
        isEmpty(obj) {
            if (obj.constructor === Object && Object.keys(obj).length === 0) return true;
            else return false;
        },
        timeToSec(time) {
            let result = 0.0;
            if(/(((\d\d:\d\d)|(\d\d)):\d\d.\d\d\d)/gm.test(time)) {
                const arr = time.split(':').reverse();
                if (arr.length === 3) {
                    result += parseFloat(parseFloat(arr[0]).toFixed(2));
                    result += parseInt(arr[1]) * 60;
                    result += parseInt(arr[2]) * 3600;
                } else if (arr.length === 2) {
                    result += parseFloat(parseFloat(arr[0]).toFixed(2));
                    result += parseInt(arr[1]) * 60;
                }
                return result;
            } else {
                return "time 형식 부정확";
            }
        },
        uploadVideo() {
            if (!this.selectVideo) {
                this.newVideoDialog = false;
                this.$refs.upload.click();
            }
            else {
                this.newVideo();
                const filename = this.selectFilename;
                this.$store.commit('videoes/setFileName', filename.substring(0, filename.lastIndexOf('.')));
                const ext = filename.substring(filename.lastIndexOf('.') + 1);
                this.$store.commit('videoes/setFileExt', ext);
                this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
                this.step = 2;
                this.newVideoDialog = false;
                this.dialog = true;
            }
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
                    // 영상 Presigned URL 발급
                    let firstStep = setInterval(() => {
                        if (!this.preSignedUrlResponse) {
                            if (this.loading < 15) this.loading++;
                        } else {
                            if (this.loading < 16) this.loading = 16;
                            clearInterval(firstStep);
                        }
                    }, 1500);
                    break;
                case 2:
                    // 영상 업로드
                    let secondStep = setInterval(() => {
                        if (!this.uploadResponse) {
                            if (this.loading < 32) this.loading++;
                        } else {
                            if (this.loading < 33) this.loading = 33;
                            this.step = 2;
                            clearInterval(secondStep);
                        }
                    }, 1500);
                    break;
                case 3:
                    // 영상 인식
                    let thirdStep = setInterval(() => {
                        if (!this.trackCompleteResponse) {
                            if (this.loading < 65) this.loading++;
                        } else {
                            if (this.loading < 66) this.loading = 66;
                            this.step = 3;
                            clearInterval(thirdStep);
                        }
                    }, 2500);
                    break;
                case 4:
                    // 자막 번역
                    let fourthStep = setInterval(() => {
                        if (this.transTrack.length === 0) {
                            if (this.loading < 99) this.loading++;
                        } else {
                            if (this.loading < 100) this.loading = 100;
                            this.dialog = false;
                            clearInterval(fourthStep);
                            this.loading = 0;
                        }
                    }, 2000);
                    break;
                default:
                    // 종료 트리거를 받는다면
                    console.log("step 종료");
            }
        },
        async trackOn(lang) {
            await this.$nextTick();
            this.video = this.$refs.videoplayer;
            this.cueTrack = this.video.addTextTrack("subtitles", this.req_lang, this.req_code);
            this.transCueTrack = this.video.addTextTrack("subtitles", this.grant_lang, this.grant_code);
            this.cueTrack.mode = "showing";
            this.transCueTrack.mode = "showing";
            for (let i = 0; i < this.fullTrack.length; i++)
                this.cueTrack.addCue(new VTTCue(this.timeToSec(this.timeLine[i].start), this.timeToSec(this.timeLine[i].end), this.originalTrack[i]));
            for (let i = 0; i < this.fullTrack.length; i++)
                this.transCueTrack.addCue(new VTTCue(this.timeToSec(this.timeLine[i].start), this.timeToSec(this.timeLine[i].end), this.transTrack[i]));
            // console.log(this.cueTrack.cues);
        },
        sliceName(str, sep) {
            return str.substring(str.lastIndexOf(sep) + 1) == "" ? str : str.substring(str.lastIndexOf(sep) + 1);
        },
        sliceFrontName(str, sep) {
            return str.substring(0, str.lastIndexOf(sep)) == "" ? str : str.substring(0, str.lastIndexOf(sep));
        },
        trackMerge() {
            let result = [];
            for (let i = 0; i < Math.max(this.timeLine.length, this.originalTrack.length); i++) {
                result[i] = { ...this.timeLine[i], ...{ text : this.originalTrack[i] } };
            }
            this.fullTrack = result;
        },
        trackFormating(mode, track) {
            if (mode === 'srt') {
                let result = "";

                for (let i = 0; i < Math.min(this.fullTrack.length, track.length); i++) {
                    result += `${i+1}\n${(this.fullTrack[i].start).replace(".", ",")} --> ${(this.fullTrack[i].end).replace(".", ",")}\n${track[i]}\n\n`;
                }

                return result;
            } else {
                let result = "WEBVTT\n\n";

                for (let i = 0; i < Math.min(this.fullTrack.length, track.length); i++) {
                    result += `${this.fullTrack[i].start} --> ${this.fullTrack[i].end}\n${track[i]}\n\n`;
                }

                return result;
            }
        },
        async onSelectFile(filename) {
            this.selectVideo = true;
            this.selectFilename = filename;
            if (!this.readToVideo) {
                await this.$store.commit('videoes/setFileName', filename.substring(0, filename.lastIndexOf('.')));
                const ext = filename.substring(filename.lastIndexOf('.') + 1);
                await this.$store.commit('videoes/setFileExt', ext);
                await this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
                this.step = 2;
                this.dialog = true;
            } else {
                this.newVideoDialog = true;
            }
        },
        async onChange(event) {
            try {
                if (event != null && event.target.files.length != 0) {
                    this.newVideo();
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
            this.beforeSelect = false;
            this.originalTrack = "";
            this.transTrack = "";
            // 파일 전처리
            // 파일 업로드인 경우
            if (!this.selectVideo) {
                const filename = this.file.name;
                const fileFormData = new FormData();
                const name = filename.substring(0, filename.lastIndexOf('.'));
                const ext = filename.substring(filename.lastIndexOf('.') + 1);
                this.$store.commit('videoes/setFileName', name);
                this.$store.commit('videoes/setFileExt', ext);
                fileFormData.append('fileKey', this.file);
                try {
                    // Signed URL 발급 : loading = 16
                    this.loadingLogic(1);
                    //console.time('SignedURL Time');
                    const preSignedUrl = await this.$store.dispatch('videoes/signedURL', fileFormData);
                    this.preSignedUrlResponse = true;
                    //console.timeEnd('SignedURL Time');

                    // Signed URL을 통한 업로드 : loading = 16
                    this.loadingLogic(2);
                    //console.time('Upload Time');
                    const upload = await axios.put(preSignedUrl, this.file, {
                        headers: {
                            'Content-Type': this.extToContentType(ext),
                        }
                    });
                    //console.timeEnd('Upload Time');
                    

                    // 영상 인식 : loading = 33
                    if (upload.status === 200) {
                        this.loadingLogic(3);
                        this.uploadResponse = true;
                        await this.$store.commit('videoes/setFile', undefined);
                        await this.$store.dispatch('videoes/setURL')
                        //console.time("Recognition Time");
                        const trackResponse = await this.$store.dispatch('videoes/postVideo');
                        this.trackCompleteResponse = true;
                        //console.timeEnd("Recognition Time");
                        this.track = trackResponse.track;
                        this.originalTrack = trackResponse.segment;
                        this.timeLine = trackResponse.timeline;
                        //console.log("Merge");
                        this.trackMerge();
                        this.$store.dispatch('videoes/getFiles');

                        // 자막 번역 : loading = 33
                        this.loadingLogic(4);
                        //console.time("Translate Time");
                        this.transTrack = await this.$store.dispatch('videoes/transTrack', {
                            "from": this.req_code,
                            "to": this.grant_code,
                            "track": this.fullTrack
                        });
                        this.trans = this.trackFormating('vtt', this.transTrack);
                        //console.timeEnd("Translate Time");
                        // this.$nuxt.$emit('transTracks', this.grant_lang);
                        // this.$manage.showMessage({ message: "자막 업데이트", color: "success" });

                        this.readToVideo = true;
                        this.readyToTrack = true;

                        // 여기엔 영상에 자막을 ON 시키는 메소드
                        this.trackOn(this.req_lang);
                        this.selectFilename = this.$store.state.videoes.fileName;
                        this.dialog = false;
                    } else {
                        this.$menage.showMessage({ 
                            message: "영상 업로드에 실패했습니다.\n관리자에게 문의하세요.", 
                            color: "error" 
                        });
                    }
                } catch(err) {
                    console.log(err);
                }
            } else {    // 파일 선택의 경우
                try {
                    // 영상 인식 : loading = 33
                    this.loading = 33;
                    this.loadingLogic(3);
                    this.uploadResponse = true;
                    await this.$store.dispatch('videoes/setURL');
                    const trackResponse = await this.$store.dispatch('videoes/postVideo');
                    this.trackCompleteResponse = true;
                    this.track = trackResponse.track;
                    this.originalTrack = trackResponse.segment;
                    this.timeLine = trackResponse.timeline;
                    this.trackMerge();

                    // 자막 번역 : loading = 33
                    this.loadingLogic(4);
                    this.transTrack = await this.$store.dispatch('videoes/transTrack', {
                        "from": this.req_code,
                        "to": this.grant_code,
                        "track": this.fullTrack
                    });

                    this.readToVideo = true;
                    this.readyToTrack = true;

                    this.trackOn(this.req_lang);
                    this.dialog = false;
                    this.selectVideo = false;
                } catch(err) {
                    console.log(err);
                }
            }
        },
        newVideo() {
            this.newVideoDialog = false;
            this.readToVideo = false;
            this.readyToTrack = false;
            this.file = {};
            this.fullTrack = [];
            this.timeLine = [];
            this.originalTrack = [];
            this.transTrack = [];
            this.track = "";
            this.trans = "";
            this.loading = 0;
            this.dialog = false;
            this.beforeSelect = true;
            this.step = 1;
            this.preSignedUrlResponse = false;
            this.uploadResponse = false;
            this.trackCompleteResponse = false;
        },
        downloadDialogOpen() {
            this.fileTab = 0;
            this.textTab = 0;
            this.downloadDialog = !this.downloadDialog
        },
        async downloadFile() {
            const downloadTrack = await this.trackFormating(this.trackMode, (this.textTab === 1) ? this.originalTrack : this.transTrack);
            await this.$store.dispatch('videoes/textToTrack', {
                track: downloadTrack,
                ext: this.trackMode
            });
            this.$refs.download.$el.click();
            this.downloadDialogOpen();
        },
        firstTap() {
            this.fileTab = 1;
        },
        secondTap() {
            this.fileTab = 2;
        },
        firstTextTap() {
            this.textTab = 1;
        },
        secondTextTap() {
            this.textTab = 2;
        },
        deleteFile(item) {
            const name = this.sliceName(item.Key, '/');
            //console.log('Name : ', name.substring(0, name.lastIndexOf('.')));
            //console.log('EXT  : ', name.substring(name.lastIndexOf('.') + 1));
            this.$store.commit('videoes/setFileName', name.substring(0, name.lastIndexOf('.')));
            this.$store.commit('videoes/setFileExt', name.substring(name.lastIndexOf('.') + 1));
            this.deleteFileDialog = true;
        },
        async deleteFileOK() {
            try {
                this.$nuxt.$loading.start();
                await this.$store.dispatch('videoes/deleteFile');
                this.$nuxt.$loading.finish();
                this.$store.commit('videoes/setFileName', '');
                this.$store.commit('videoes/setFileExt', '');
                this.deleteFileDialog = false;
            } catch (err) {
                this.$nuxt.$loading.finish();
                this.deleteFileDialog = false;
                console.log(err);
            }
        },
        deleteFileNO() {
            this.$store.commit('videoes/setFileName', '');
            this.$store.commit('videoes/setFileExt', '');
            this.deleteFileDialog = false;
        }
    }
}
</script>
