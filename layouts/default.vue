<template class="main__page">
  <v-app app>
    <default-toolbar />

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
import defaultToolbar from "../components/defaultToolbar.vue";

export default {
  name: "Default",
  components: {
    SnackBar,
    defaultToolbar,
},
  data() {
    return {
      logo:     'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo3.png',
      fab: false,
    };
  },
  mounted() {
    //this.$manage.showMessage({ message: '현재 개발 중인 사이트입니다. 사용에 불편하시더라도 양해부탁드립니다.',color: 'primary' });
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
