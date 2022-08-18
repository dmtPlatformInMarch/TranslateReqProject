<template>
    <div class="wrapper">
        <div class="video__box">
            <!--영상 선택 시-->
            <div class="video__player" v-if="readToVideo === true">
                <video class="player" :src="url" controls preload="auto">
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
                <input ref="upload" type="file" v-show="false" @change="onChange" />
            </div>
            <div class="video__action">
                <v-btn class="video__action__btn" rounded color="#013183" dark @click="print">
                    다운로드
                </v-btn>
                <v-btn class="video__action__btn" rounded color="#013183" dark>
                    저장하기
                </v-btn>
            </div>
            <div class="video__list">
                <v-expansion-panels class="video__list__group" tile dark>
                    <v-expansion-panel>
                        <v-expansion-panel-header color="#013183" >
                            파일 목록
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="video__list__content overflow-y-auto">
                            <v-list v-for="i in 20" :key="i">
                                <v-list-item>
                                    <v-list-item-title class="content__list__title">
                                        <v-icon>
                                            mdi-file
                                        </v-icon>
                                        목록{{ i }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>

        <div ref="trackBox" class="track__box">
            <v-virtual-scroll class="track__box__scroll" bench="15" :items="templist" :height="virtualHeight" item-height="156">
                <template v-slot:default="{ item, index }">
                    <div class="track__box__wrapper">
                        <track-component :start="'00:00:00.000'" :end="'00:00:00.000'" :text="`임시 자막${item}, ${index}`" :trans="'temp Track'" />
                    </div>
                </template>
            </v-virtual-scroll>
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
.content__list__title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.track__box {
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
    },
    data() {
        return {
            url: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/360p_20%EB%B6%8448%EC%B4%88.mp4",
            virtualHeight: 0,
            readToVideo: false,
        }
    },
    mounted() {
        this.virtualHeight = this.$refs.trackBox.offsetHeight;
    },
    computed: {
        templist() {
            let arr = [];
            for (let i = 0; i < 1000; i++) {
                arr[i] = i + 1;
            }
            return arr;
        }
    },
    methods: {
        print() {
            console.log();
        },
        uploadVideo() {
            this.$refs.upload.click();
        },
        async onChange(event) {
            if (event != null) {
                console.log(event.target.files[0].name);
            }
        }
    }
}
</script>
