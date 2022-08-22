<template class="main">
    <div class="wrapper">
        <v-dialog v-model="dialog" width="60vw">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" @click="dialog = true">
                    다이어로그 시작
                </v-btn>
            </template>

            <v-card>
                <div class="dialog__box">
                    <div class="dialog__box__setting">
                        <div class="setting__select__box">
                            <v-img class="img" src="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo.png" />
                        </div>
                        <div class="setting__select__box" v-if="beforeTranslate">
                            <div class="select__box">
                                <div>
                                    <v-toolbar class="header__class" elevation="0">
                                        <v-toolbar-title class="font-weight-bold">
                                            영상의 원본 언어
                                        </v-toolbar-title>
                                    </v-toolbar>
                                    <v-list class="overflow-y-auto">
                                        <v-list-item-group v-model="req" mandatory>
                                            <v-list-item v-for="(item, index) in templist" :key="index" active-class="list__select">
                                                <v-list-item-title>
                                                    {{ item }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
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
                                    <v-list class="overflow-y-auto">
                                        <v-list-item-group v-model="grant" mandatory>
                                            <v-list-item v-for="(item, index) in templist" :key="index" active-class="list__select">
                                                <v-list-item-title>
                                                    {{ item }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </div>
                            </div>
                            <div class="action__box">
                                <v-btn block @click="timerOn">
                                    번역하기
                                </v-btn>
                            </div>
                        </div>
                        <div class="dialog__box__process" v-else>
                            <div class="process__stepper">
                                <div class="stepper">
                                    <v-btn block rounded>
                                        파일 전송
                                    </v-btn>
                                </div>
                                <div class="arrow__wrapper">
                                    <div class="arrow">▼</div>
                                    <div class="arrow">▼</div>
                                    <div class="arrow">▼</div>
                                </div>
                                <div div class="stepper">
                                    <v-btn block rounded>
                                        영상 인식
                                    </v-btn>
                                </div>
                                <div class="arrow">
                                    <div class="arrow">▼</div>
                                    <div class="arrow">▼</div>
                                    <div class="arrow">▼</div>
                                </div>
                                <div div class="stepper">
                                    <v-btn block rounded>
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
</template>

<style scoped>
.main {
    display: flex;
}
.img {
    flex: 0 0 auto;
}
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
    height: 100%;
    padding: 25px;
}
.action__box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 25px;
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
.arrow__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.arrow {
    animation: ;
}
.arrow:nth-child(1) {
    color: red;
}
.arrow:nth-child(2) {
    color: blue;
}
.arrow:nth-child(3) {
    color: green;
}
</style>

<script>
import gsap from "gsap";

export default {
    layout: 'TestLayout',
    components: {
        
    },
    data() {
        return{
            loading: 0,
            dialog: false,
            templist: ["한국어", "중국어", "영어", "일본어", "베트남어"],
            beforeTranslate: false,
            req: 0,
            grant: 1,
            step: 1,
        }
    },
    computed: {
        req_lang() {
            return this.templist[this.req];
        },
        grant_lang() {
            return this.templist[this.grant]
        }
    },
    watch: {
        loading(value) {
            if(value >= 100) {
                this.beforeTranslate = true;
            }
        }
    },
    methods: {
        timerOn() {
            const interval = setInterval(() => {
                if (this.loading < 100 && this.dialog === true) {
                    this.loading += 5;
                } else {
                    clearInterval(interval);
                    this.dialog = false;
                    this.loading = 0;
                }
            }, 500);
            this.beforeTranslate = false;
        },
        close() {
            this.dialog = false;
            this.loading = 0;
        },

    },
}
</script>