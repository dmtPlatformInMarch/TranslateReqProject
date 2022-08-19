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
                <v-btn rounded @click="uploadVideo">
                    <v-icon>
                        mdi-plus
                    </v-icon>
                    새로만들기
                </v-btn>
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
            fullTrack: [],
            timeLine: [],
            originalTrack: [],
            transTrack: [],
            track: "",
            transtrack: "",
        }
    },
    mounted() {
        this.$store.dispatch('videoes/getFiles');
        this.virtualHeight = this.$refs.trackBox.offsetHeight;
    },
    computed: {
        templist() {
            let arr = [];
            for (let i = 0; i < 1000; i++) {
                arr[i] = i + 1;
            }
            return arr;
        },
        videoList() {
            return this.$store.state.videoes.files;
        },
        videoURL() {
            return this.$store.state.videoes.fileURL;
        }
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
            this.originalTrack = "";
            this.transTrack = "";
            if (event != null && event.target.files.length != 0) {    
                // 파일 전처리
                const file = event.target.files[0];
                const filename = file.name;
                const fileFormData = new FormData();
                const name = filename.substring(0, filename.lastIndexOf('.'));
                const ext = filename.substring(filename.lastIndexOf('.') + 1);
                this.$store.commit('videoes/setFileName', name);
                this.$store.commit('videoes/setFileExt', ext);
                fileFormData.append('fileKey', file);

                try {
                    // Signed URL 발급
                    this.$nuxt.$loading.start();
                    const preSignedUrl = await this.$store.dispatch('videoes/signedURL', fileFormData);
                    this.$nuxt.$loading.finish();

                    // Signed URL을 통한 업로드
                    this.$nuxt.$loading.start();
                    const response = await axios.put(preSignedUrl, file, {
                        headers: {
                            'Content-Type': this.extToContentType(ext),
                        },
                        onUploadProgress: (progressEvent) => {
                            let percentage = (progressEvent.loaded * 100) / progressEvent.total;
                            let percentageCompleted = Math.round(percentage);
                            console.log(progressEvent.loaded + " / " + progressEvent.total, percentage);
                        }
                    });
                    this.$nuxt.$loading.finish();

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
            } else {
                console.log("e is null");
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
