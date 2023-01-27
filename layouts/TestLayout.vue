<!--실무: 상단 툴바?-->
<template>
    <v-app>
        <v-toolbar class="main__toolbar" color="#FFFFFF" height="70px" flat>
            <v-toolbar-title>
                <div class="main__toolbar__logo">
                    <img :src="logo" width="100%" height="100%" object-fit="contain" />
                </div>

            </v-toolbar-title>
            <div>
                <v-btn class="main__toolbar__items" to="/text/info" color="#FFFFFF" depressed tile>
                    소개
                </v-btn>
            </div>
            <div>
                <v-btn class="main__toolbar__items" to="/text/request" color="#FFFFFF" depressed tile>
                    번역 의뢰
                </v-btn>
            </div>
            <div>
                <v-btn class="main__toolbar__items" to="/text/reqstate" color="#FFFFFF" depressed tile>
                    번역 현황
                </v-btn>
            </div>
            <v-spacer></v-spacer>
            <div class="icons__box">
                <v-btn icon class="main__toolbar__icons" to="/" color="#4A4A4A" depressed tile>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </div>
            <div class="icons__box">
                <v-btn icon class="main__toolbar__icons" to="/text/info" color="#4A4A4A" depressed tile>
                    <v-icon>mdi-translate</v-icon>
                </v-btn>
            </div>
            <div>
                <v-btn class="main__toolbar__right" to="/text/info" color="#FFFFFF" depressed>
                    로그인
                </v-btn>
            </div>
            <div>
                <v-btn class="main__toolbar__right" to="/user/signup" @click="onEmit" color="#FFFFFF" depressed>
                    회원가입
                </v-btn>
            </div>
        </v-toolbar>
        <div class="page__box" style="background-color: #F9F9F9;">
            <nuxt />
        </div>
        <!--모바일 네비게이션-->
        <v-navigation-drawer v-model="slideNav" fixed temporary color="#F6F8FC">
            <v-list class="nav__info" rounded dense dark>
                <v-list-item v-if="!loginState">
                    <v-list-item-icon>
                        <v-icon style="color: #383981">mdi-account-alert</v-icon>
                    </v-list-item-icon>
                    <div class="nav__title" v-if="language === '한국어'" style="color: #383981">로그인이 <br />필요합니다.</div>
                    <div class="nav__subtitle" v-else-if="language === '영어'" style="color: #383981">You need to <br />login.</div>
                </v-list-item>
                <v-list-item v-else>
                    <v-list-item-icon>
                        <v-icon style="color: #383981">mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <div class="nav__title" v-if="language === '한국어'" style="color: #383981"><nuxt-link to="/user">{{
                            loginState.nickname
                        }}</nuxt-link> 님</div>
                        <div class="nav__title" v-else-if="language === '영어'" style="color: #383981">Hello, <nuxt-link to="/user">{{
                            loginState.nickname
                        }}</nuxt-link></div>
                        <div class="nav__subtitle" v-if="language === '한국어'" >번역 의뢰 : N건</div>
                        <div class="nav__subtitle" v-else-if="language === '영어'">Your Request : N cases</div>
                        <v-btn class="nav__btn full-width" v-if="language === '한국어'" depressed color="#06d183"
                            @click="onLogout">로그아웃</v-btn>
                        <v-btn class="nav__btn full-width" v-else-if="language === '영어'" depressed color="#06d183"
                            @click="onLogout">Logout</v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider />
            <v-list nav dense dark>
                <v-list-item link to="/text/info">
                    <v-list-item-icon>
                        <v-icon style="color: #383981">mdi-clipboard-alert</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-if="language === '한국어'" style="color: #383981"> 소개 </v-list-item-title>
                    <v-list-item-title v-else-if="language === '영어'" style="color: #383981"> Introduce </v-list-item-title>
                </v-list-item>
                <v-list-item link to="/text/request">
                    <v-list-item-icon>
                        <v-icon style="color: #383981">mdi-clipboard-edit</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-if="language === '한국어'" style="color: #383981"> 번역 의뢰 </v-list-item-title>
                    <v-list-item-title v-else-if="language === '영어'" style="color: #383981"> Translation request </v-list-item-title>
                </v-list-item>
                <v-list-item link to="/text/reqstate">
                    <v-list-item-icon>
                        <v-icon style="color: #383981">mdi-clipboard-search</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-if="language === '한국어'" style="color: #383981"> 번역 현황 </v-list-item-title>
                    <v-list-item-title v-else-if="language === '영어'" style="color: #383981"> Translation status </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <test-bottom-component />
    </v-app>
</template>

<style scoped>
.main__toolbar {
    justify-content: space-between;
}
.main__toolbar__logo {
    padding-top: 10px !important;
    width: 130px !important;
}
.main__toolbar__items {
    color: #4A4A4A;
    margin: 15px 0 0;
    padding: 0 10px 0 !important;
    font-size: medium;
}
.main__toolbar__icons {
    color: #4A4A4A;
    margin: 15px 0 0;
    padding: 0 !important;
}
.main__toolbar__right {
    color: #4A4A4A;
    margin: 15px 3px 0;
    padding: 0 6px 0 !important;
    font-size: medium;
}
.page__box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 600px) {
    .main__toolbar__items{
        display: none;
    }
}
@media screen and (max-width: 400px) {
    .main__toolbar__items{
        display: none;
    }
    .main__toolbar__right{
        font-size: small !important;
        
    }
    .main__toolbar__icons{
        v-icon: small !important;
    }
}


</style>

<script>
import TestBottomComponent from '~/components/TestBottomComponent'
import LoginForm from '~/components/LoginForm'
import SnackBar from '~/components/SnackBar'

export default {
    name: 'TestLayout',

    components: {
        TestBottomComponent,
        LoginForm,
        SnackBar,
    },
    data: () => ({
        logo: 'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo3.png',
        loginMenu: false,
        fab: false,
        swdir: '',
        sX: 0,
        dX: 0,
        sY: 0,
        dY: 0,
        stT: 0,
        elT: 0,
        alT: 500,
        threshold: 100,
        slack: 50,
        slideNav: false,
    }),
    // mounted() {
    //     //this.$store.dispatch('users/loadUser');
    //     const box = this.$refs.navs;
    //     box.addEventListener('touchstart', this.swipeStart, false);
    //     box.addEventListener('touchend', this.swipeEnd, false);
    // },
    // beforeDestroy() {
    //     const box = this.$refs.navs;
    //     box.removeEventListener('touchstart', this.swipeStart, false);
    //     box.removeEventListener('touchend', this.swipeEnd, false);
    // },
    computed: {
        loginState() {
            return this.$store.state.users.loginState;
        },
        language: {
            get() {
                return this.$store.state.manager.language;
            },
            set(value) {
                return this.$store.commit('manager/setLanguage', value);
            }
        }
    },
    methods: {
        async onLogout() {
            this.loginMenu = false;
            await this.$store.dispatch('users/logout');
        },
        update(data) {
            this.loginMenu = data;
        },
        swipeStart(e) {
            if (window.innerWidth < 600) {
                var tchs = e.changedTouches[0];
                this.swdir = 'none';
                this.sX = tchs.pageX;
                this.sY = tchs.pageY;
                this.stT = new Date().getTime();
            }
        },
        swipeEnd(e) {
            if (window.innerWidth < 600) {
                var tchs = e.changedTouches[0];
                this.dX = tchs.pageX - this.sX;
                this.dY = tchs.pageY - this.sY;
                this.elT = new Date().getTime() - this.stT;
                if (this.elT <= this.alT) {
                    if (Math.abs(this.dX) >= this.threshold && Math.abs(this.dY) <= this.slack) {
                        this.swdir = (this.dX < 0) ? 'left' : 'right';
                    }
                }

                if (this.swdir === 'right') {
                    this.slideNav = true;
                } else if (this.swdir === 'left') {
                    if (this.slideNav) this.slideNav = false;
                }
            }
        },
        onEmit() {
            this.$emit("update", false);
        }
    }
}
</script>
