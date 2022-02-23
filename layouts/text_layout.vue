<template>
  <v-app>
    <v-toolbar elevation="0" style="flex: initial; width: 100%">
      <v-toolbar-title>
        <nuxt-link to="/user/textmain">
          <v-avatar height="80px" width="200px" tile>
            <img src="../static/logo3.png" />
          </v-avatar>
        </nuxt-link>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn depressed class="text-center" to="/"> 메인 페이지 </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn tile icon v-bind="attrs" v-on="on">
              <v-icon>mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="language" mandatory>
              <v-list-item value="한국어">
                <v-list-item-title class="text-center">
                  한국어
                </v-list-item-title>
              </v-list-item>
              <v-list-item value="영어">
                <v-list-item-title class="text-center">
                  English
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-menu
          v-model="loginMenu"
          offset-x
          offset-y
          :close-on-content-click="false"
          :nudge-width="200"
          v-if="!loginState"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              v-if="language === '한국어'"
              text
              class="text-center"
              v-bind="attrs"
              v-on="on"
              >로그인</v-btn
            >
            <v-btn
              v-else-if="language === '영어'"
              text
              class="text-center"
              v-bind="attrs"
              v-on="on"
              >Login</v-btn
            >
          </template>
          <login-form @update="update" />
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>

    <div style="display: flex; flex-direction: row; height: 100%">
      <v-navigation-drawer permanent expand-on-hover color="#013183" dark>
        <v-list rounded dense>
          <v-list-item v-if="!loginState" style="padding: 0px 8px">
            <v-list-item-icon>
              <v-icon>mdi-account-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"
              >로그인이 <br />필요합니다.</v-list-item-title
            >
            <v-list-item-title v-else-if="language === '영어'"
              >You need to <br />login.</v-list-item-title
            >
          </v-list-item>
          <v-list-item v-else style="padding: 0px 8px">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-if="language === '한국어'" class="text-h6"
                >{{ loginState.nickname }} 님</v-list-item-title
              >
              <v-list-item-title v-else-if="language === '영어'" class="text-h6"
                >Hello, <br />{{ loginState.nickname }}</v-list-item-title
              >
              <v-list-item-subtitle v-if="language === '한국어'"
                >번역 의뢰 : N건</v-list-item-subtitle
              >
              <v-list-item-subtitle v-else-if="language === '영어'"
                >Your Request : N cases</v-list-item-subtitle
              >
              <v-btn
                depressed
                color="#06d183"
                @click="onLogout"
                v-if="language === '한국어'"
                >로그아웃</v-btn
              >
              <v-btn
                depressed
                color="#06d183"
                @click="onLogout"
                v-else-if="language === '영어'"
                >Logout</v-btn
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list nav dense style="padding: 0px 8px">
          <v-list-item link to="/user/request">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"
              >번역 의뢰</v-list-item-title
            >
            <v-list-item-title v-else-if="language === '영어'"
              >Translation request</v-list-item-title
            >
          </v-list-item>
          <v-list-item link to="/user/reqstate">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"
              >번역 현황</v-list-item-title
            >
            <v-list-item-title v-else-if="language === '영어'"
              >Translation status</v-list-item-title
            >
          </v-list-item>
          <v-list-item link to="/user/video">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"
              >영상 및 자막 번역</v-list-item-title
            >
            <v-list-item-title v-else-if="language === '영어'"
              >Video and caption<br />
              translation</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <nuxt />
      <snack-bar />
    </div>
  </v-app>
</template>

<style scoped>
</style>

<script lang="js">
import LoginForm from '~/components/LoginForm'
import SnackBar from '~/components/SnackBar'

export default {
  layout: 'text-layout',
  components: {
      LoginForm,
      SnackBar,
  },
  data: () => ({
    loginMenu: false,
    fab: false,
    language: '한국어',
  }),
  computed: {
    loginState() {
        return this.$store.state.users.loginState;
    },
  },
  watch: {
    language() {
      this.$manage.setLanguage({language: this.language});
    },
  },
  methods: {
      onLogout() {
          this.loginMenu = false;
          this.$store.dispatch('users/logout')
            .then(() => { 
              this.$router.go();
            })
            .catch((err) => {
              console.log('로그아웃 에러', err);
            });
      },
      update(data) {
        this.loginMenu = data;
      },
  }
};
</script>