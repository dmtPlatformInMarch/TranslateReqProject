<template class="main">
    <div class="wrapper">
        <v-dialog v-model="dialog" width="60vw">
            <template v-slot:activator="{ on, attrs }">
                <v-btn rounded v-bind="attrs" v-on="on">
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
                                                <v-list-item v-for="(item, index) in templist" :key="index" active-class="list__select">
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
                                                <v-list-item v-for="(item, index) in templist" :key="index" active-class="list__select">
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
                                <v-btn block rounded color="#013183" dark @click="triggerStart">
                                    번역하기
                                </v-btn>
                            </div>
                        </div>
                        <div class="dialog__box__process" v-else>
                            <div class="process__stepper">
                                <div class="stepper">
                                    <v-btn class="stepper__btn" block rounded color="primary" :disabled="step != 1" @click="step = 2">
                                        파일 전송
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
            beforeSelect: true,
            req: 0,
            grant: 2,
            step: 1,
        }
    },
    computed: {
        templist() {
            return this.$LANGUAGES_KO;
        },
        req_lang() {
            return this.templist[this.req];
        },
        grant_lang() {
            return this.templist[this.grant]
        }
    },
    watch: {
        /*loading(value) {
            if (value >= 100) {
                this.beforeSelect = true;
            }
            if (value >= 30 && value < 60) {
                this.step = 2;
            }
            if (value >= 60 && value < 100) {
                this.step = 3;
            }
        }*/
    },
    methods: {
        loadingLogic(step) {
            switch(step) {
                case 1:
                    // 영상 업로드
                    this.timerOn();
                    break;
                case 2:
                    // 영상 인식
                    this.timerOn();
                    break;
                case 3:
                    // 자막 번역
                    this.timerOn();
                    break;
                default:
                    // 종료 트리거를 받는다면
                    this.loading = this.step * 33;
                    this.step++;
            }
        },
        timerOn() {
            this.beforeSelect = false;
            const interval = setInterval(() => {
                if (this.loading < this.step*33 && this.dialog === true) {
                    this.loading += 1;
                } else {
                    clearInterval(interval);
                }
            }, 100);
        },
        async triggerStart() {
            this.loadingLogic(this.step);
            setTimeout(() => {
                console.log("step 넘어감");
                this.loadingLogic("넘겨");
                this.loadingLogic(this.step);
            }, 1000);
            setTimeout(() => {
                console.log("step 넘어감");
                this.loadingLogic("넘겨");
                this.loadingLogic(this.step);
            }, 2000);
            setTimeout(() => {
                this.loading = 100;
            }, 3000);
        },
        close() {
            this.dialog = false;
            this.loading = 0;
        },
    },
}
</script>