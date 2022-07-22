<template class="main__page">
  <v-app app>
    <v-app-bar app class="main__toolbar" elevation="0" color="transparent" width="100vw">
      <!--로고-->
      <div>
        <nuxt-link to="/">
          <v-avatar class="logo" height="80px" width="200px" tile>
            <img :src="logo" />
          </v-avatar>
        </nuxt-link>
      </div>

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
              <v-list-item @click="go('/text/textmain')">
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
              <v-list-item @click="go('/video/filetrack')">
                <v-list-item-title> 자막 편집 도구 </v-list-item-title>
              </v-list-item>
              <v-list-item @click="go('/video/realtrack')">
                <v-list-item-title> 실시간 자막 번역 </v-list-item-title>
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

      <!--페이지 언어 선택-->
      <div class="lang__selector">
        <v-btn rounded dark href="https://jobs.dmtlabs.kr" color="transparent" depressed>
          <img src="../static/dmtcloud.png" alt="" />
          <div style = "color : black">DMTCLOUD</div>
        </v-btn>

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
      </div>
    </v-app-bar>

    <!--모바일 메뉴 버튼-->
    <v-speed-dial class="fab__btn" v-model="fab" transition="slide-y-reverse-transition">
      <template v-slot:activator>
        <v-btn class="fab__btn" v-model="fab" fab dark>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
      
      <v-btn class="mobile__menu" dark small outlined @click="go('/voice/info')">
        <v-icon>mdi-account-voice</v-icon>
        <div>{{ language === '한국어' ? "음성" : "Voice" }}</div>
      </v-btn>
      <v-btn class="mobile__menu" dark small outlined @click="go('/video/info')">
        <v-icon>mdi-message-video</v-icon>
        <div>{{ language === '한국어' ? "영상" : "Video" }}</div>
      </v-btn>
      <v-btn class="mobile__menu" dark small outlined @click="go('/text/textmain')">
        <v-icon>mdi-clipboard-text-multiple</v-icon>
        <div>{{ language === '한국어' ? "글자" : "Text" }}</div>
      </v-btn>
    </v-speed-dial>

    <client-only>
      <nuxt class="viewer" />
    </client-only>

    <snack-bar />

  </v-app>
</template>

<style scoped>
.main__toolbar {
  display: flex;
  align-items: center;
  height: 10% !important;
}
.main__toolbar >>> .v-toolbar__content {
  width: 100%;
  justify-content: space-around;
}
.viewer{
  display: absolute;
  margin: 0;
  padding: 0;
  height: 100%;
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
  width: 200px;
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

@media screen and (max-width: 900px){
  .menu__selector >>> .v-btn.v-size--default {
    font-size: 1rem !important;
  }
}

@media screen and (max-width: 500px){
  .logo {
    width: 150px !important;
  }
  .menu__selector >>> .v-btn.v-size--default {
    display: none !important;
  }
  .fab__btn {
    display: block;
  }
}
</style>

<script>
import SnackBar from "~/components/SnackBar";

export default {
  name: "Default",
  components: { SnackBar },
  data() {
    return {
      logo:     'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo3.png',
      fab: false,
    };
  },
  mounted() {
    this.$manage.showMessage({ message: '현재 개발 중인 사이트입니다. 사용에 불편하시더라도 양해부탁드립니다.',color: 'primary' });
  },
  computed: {
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
  },
};
</script>
