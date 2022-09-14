<template>
    <div class="wrapper">
        <div class="video__box">
            <input ref="upload" type="file" v-show="false" @change="onChange" accept=".mp4" />
            <!--영상 선택 시-->
            <div v-if="readToVideo === true" class="video__wrapper" >
                <video ref="videoplayer" class="video__player" :src="videoURL" controls preload="auto" crossorigin="anonymous">
                </video>
            </div>
            <!--영상 미선택 시-->
            <div v-else class="video__wrapper">
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
        </div>

        <div class="setting__box">
            <div class="track__box" v-html="track">
            </div>
            <div class="setting__box__bottom">
                <div class="control__box">
                </div>
                <div class="filelist__box">
                </div>
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
    background: black;
    width: 50%;
    height: 100%;
}
.video__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.video__player {
    width: 100%;
}
.setting__box {
    position: absolute;
    background: #8C867A;
    left: 50%;
    width: 50%;
    height: 100%;
}
.track__box {
    overflow-y: auto;
    position: absolute;
    background: white;
    border-radius: 25px;
    margin: 15px;
    padding: 25px;
    width: calc(100% - 30px);
    height: calc(75% - 30px);
    font-family: 'MinSans-Medium', sans-serif !important;
}
.track__box::-webkit-scrollbar {
    display: block;
    width: 10px;
    height: 8px;
}
.track__box::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #2172FF;
}
.track__box::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 15px 0;
}
.setting__box__bottom {
    position: absolute;
    top: 75%;
    width: 100%;
    height: 25%;
}
.control__box {
    position: absolute;
    width: 25%;
    height: 100%;
}
.filelist__box {
    position: absolute;
    left: 25%;
    width: 75%;
    height: 100%;
}
</style>

<script lang="js">


export default {
    layout: 'ServiceLayout',
    data() {
        return {
            dialog: false,
            readToVideo: false,
            loading: 0,
            step: 1,
            selectVideo: false,
            beforeSelect: true,
            videoURL: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/360p_2%EB%B6%8416%EC%B4%88.mp4",
            track: "예시 텍스트<br />이것이 예시 테스트다",
            req: 0,
            grant: 2,
        }
    },
    computed: {
        language() {
            return this.$store.state.manager.language;
        },
        languages() {
            return this.$LANGUAGES_KO;
        },
        videoList() {
            return this.$store.state.videoes.files;
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
    methods: {
        // 메소드 작성 미완
        onChange() {
            
        },
        uploadVideo() {

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
                        },
                        onUploadProgress: (progressEvent) => {
                            let percentage = (progressEvent.loaded * 100) / progressEvent.total;
                            let percentageCompleted = Math.round(percentage);
                            //console.log(progressEvent.loaded + " / " + progressEvent.total, percentage);
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
                        this.trackFormating('vtt', this.transTrack);
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
    }
}
</script>
