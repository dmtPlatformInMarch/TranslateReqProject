<template>
    <v-app-bar app class="main__toolbar" elevation="0" color="transparent" width="100vw">
      <!--로고-->
        <!--v-avatar class="logo" tile-->
        <img class="logo" :src="logo" @click="go('/')" />
        <!--/v-avatar-->

      <!--툴바 목록-->
      <div v-if="language === '한국어'" class="menu__selector">
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn class="font-weight-bold" color="transparent" depressed v-bind="attrs" v-on="on"> 텍스트 </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item @click="go('/text/info')">
                <v-list-item-title> 소개 </v-list-item-title>
              </v-list-item>
              <v-spacer />
              <v-list-item @click="go('/text/doctran')">
                <v-list-item-title> 텍스트 번역 </v-list-item-title>
              </v-list-item>
              <v-spacer />
              <v-list-item @click="go('/text/request')">
                <v-list-item-title> 번역 단가 </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn class="font-weight-bold" color="transparent" depressed v-bind="attrs" v-on="on"> 영상 </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item @click="go('/video/info')">
                <v-list-item-title>소개</v-list-item-title>
              </v-list-item>
              <v-list-item @click="go('/video/realtrack')">
                <v-list-item-title> 실시간 자막 번역 </v-list-item-title>
              </v-list-item>
              <v-list-item @click="go('/video/filetrack')">
                <v-list-item-title> 자막 편집 도구 </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn class="font-weight-bold" color="transparent" depressed v-bind="attrs" v-on="on"> 음성 </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item @click="go('/voice/info')">
                <v-list-item-title> 소개 </v-list-item-title>
              </v-list-item>
              <!--v-list-item>
                <v-list-item-title> 음성 번역 </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> 번역 단가 </v-list-item-title>
              </v-list-item-->
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>

      <div v-else-if="language === '영어'" class="menu__selector">
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn class="font-weight-bold" color="transparent" depressed v-bind="attrs" v-on="on"> Text </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item @click="go('/text/info')">
                <v-list-item-title> Introduce </v-list-item-title>
              </v-list-item>
              <v-spacer />
              <v-list-item @click="go('/text/textmain')">
                <v-list-item-title> Text Translation </v-list-item-title>
              </v-list-item>
              <v-spacer />
              <v-list-item @click="go('/text/request')">
                <v-list-item-title> Unit Price </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn class="font-weight-bold" color="transparent" depressed v-bind="attrs" v-on="on"> Video </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item @click="go('/video/info')">
                <v-list-item-title> Introduce </v-list-item-title>
              </v-list-item>
              <v-list-item @click="go('/video/filetrack')">
                <v-list-item-title> Track Edit Tools </v-list-item-title>
              </v-list-item>
              <v-list-item @click="go('/video/realtrack')">
                <v-list-item-title> Real-time Track Translation </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu open-on-hover offset-y tile>
          <template #activator="{ on, attrs }">
            <v-btn class="font-weight-bold" color="transparent" depressed v-bind="attrs" v-on="on"> Speech </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group>
              <v-list-item @click="go('/voice/info')">
                <v-list-item-title> Introduce </v-list-item-title>
              </v-list-item>
              <!--v-list-item @click="go('/voice/demo')">
                <v-list-item-title> Speech Translation </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> Unit Price </v-list-item-title>
              </v-list-item-->
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>

      <div class="lang__selector">
        <!--DMTCLOUD 사이트 이동-->
        <v-btn rounded dark href="https://dmtcloud.kr" color="transparent" depressed>
          <img src="../static/dmtcloud.png" alt="" />
          <div style = "color : black">DMTCLOUD</div>
        </v-btn>

        <!--페이지 언어 선택-->
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" dark>
              <v-icon style = "color : black">mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="language" mandatory>
              <v-list-item value="한국어">
                <v-list-item-title class="text-center" value="한국어"> 한국어 </v-list-item-title>
              </v-list-item>
              <v-list-item value="영어">
                <v-list-item-title class="text-center" value="영어"> English </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>

        <!--로그인 메뉴-->
        <v-menu v-if="!loginState" v-model="loginMenu" offset-y :close-on-content-click="false" :nudge-width="200">
          <template #activator="{ on, attrs }">
            <v-btn v-if="language === '한국어'" text class="text-center main__toolbar__btn" v-bind="attrs" v-on="on">
              로그인
            </v-btn>
            <v-btn v-else-if="language === '영어'" text class="text-center main__toolbar__btn" v-bind="attrs" v-on="on">
              Login
            </v-btn>
          </template>
          <login-form @update="update" />
        </v-menu>
      </div>
    </v-app-bar>
</template>

<style scoped>
.logo {
  width: 128px;
  object-fit: cover;
}

.main__toolbar {
  display: flex;
  align-items: center;
  height: 5% !important;
  background-color: rgba(0,0,0,0.1) !important;
  color : black;
}

.main__toolbar >>> .v-toolbar__content {
  flex: 1 0 auto;
  justify-content: space-around;
}

.menu__selector {
  display: flex !important;
  width: 30% !important;
  justify-content: space-between;
}
.menu__selector >>> .v-btn.v-size--default {
  font-size: 1.5rem !important;
}
.lang__selector {
  display: flex !important;
  align-items: center;
}
.fab__btn {
  display: none;
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  /* opacity: 0.75; */
  color : #666666;
}
.mobile__menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 80px;
  color : black;
}

@media screen and (min-width: 1919px) {
  .logo {
    width: 5% !important;
  }
}

@media screen and (max-width: 900px){
  .logo {
    width: 128px !important;
  }
  .menu__selector >>> .v-btn.v-size--default {
    font-size: 1rem !important;
  }
}

@media screen and (max-width: 500px){
  .logo {
    width: 96px !important;
  }
  .menu__selector {
    display: none !important;
    justify-content: space-between !important;
  }
  .fab__btn {
    display: block;
  }
}
</style>

<script>
import SnackBar from "~/components/SnackBar";
import LoginForm from '~/components/LoginForm'

export default {
  name: "Default",
  components: { SnackBar, LoginForm },
  data() {
    return {
      loginMenu: false,
      logo: require('@/assets/logo/logo5_Non_padding.png'),
      fab: false,
    };
  },
  mounted() {
    //this.$manage.showMessage({ message: '현재 개발 중인 사이트입니다. 사용에 불편하시더라도 양해부탁드립니다.',color: 'primary' });
  },
  computed: {
    loginState() {
        return this.$store.state.users.loginState;
    },
    language: {
      get() {
        return this.$store.state.manager.language;
      },
      set(value) {
        return this.$store.commit("manager/setLanguage", value);
      },
    },
  },
  methods: {
    go(url) {
      this.$router.push({ path: `${url}` });
    },
    update(data) {
      this.loginMenu = data;
    },
  },
};
</script>
