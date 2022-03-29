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
        <v-btn depressed class="text-center" to="/"> {{ language === "한국어" ? "메인 페이지" : "Main page" }}</v-btn>
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
                <v-list-item-title class="text-center" value="한국어"> 한국어 </v-list-item-title>
              </v-list-item>
              <v-list-item value="영어">
                <v-list-item-title class="text-center" value="영어"> English </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <client-only>
        <v-menu v-model="loginMenu" offset-x offset-y :close-on-content-click="false" :nudge-width="200" v-if="!loginState">
          <template #activator="{ on, attrs }">
            <v-btn v-if="language === '한국어'" text class="text-center" v-bind="attrs" v-on="on">로그인</v-btn>
            <v-btn v-else-if="language === '영어'" text class="text-center" v-bind="attrs" v-on="on">Login</v-btn>
          </template>
          <login-form @update="update" />
        </v-menu>
        </client-only>
      </v-toolbar-items>
    </v-toolbar>
    <client-only>
    <div style="display: flex; flex-direction: row; height: 100%">
      <v-navigation-drawer permanent expand-on-hover color="#013183" dark>
        <v-list rounded dense>
          <v-list-item v-if="!loginState" style="padding: 0px 8px">
            <v-list-item-icon>
              <v-icon>mdi-account-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'">로그인이 <br />필요합니다.</v-list-item-title>
            <v-list-item-title v-else-if="language === '영어'">You need to <br />login.</v-list-item-title>
          </v-list-item>
          <v-list-item v-else style="padding: 0px 8px">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-if="language === '한국어'" class="text-h6">{{ loginState.nickname }} 님</v-list-item-title>
              <v-list-item-title v-else-if="language === '영어'" class="text-h6">Hello, <br />{{ loginState.nickname }}</v-list-item-title>
              <v-list-item-subtitle v-if="language === '한국어'">번역 의뢰 : N건</v-list-item-subtitle>
              <v-list-item-subtitle v-else-if="language === '영어'">Your Request : N cases</v-list-item-subtitle>
              <v-btn depressed color="#06d183" @click="onLogout" v-if="language === '한국어'">로그아웃</v-btn>
              <v-btn depressed color="#06d183" @click="onLogout" v-else-if="language === '영어'">Logout</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list nav dense style="padding: 0px 8px">
          <v-list-item link to="/user/request">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"> 번역 의뢰 </v-list-item-title>
            <v-list-item-title v-else-if="language === '영어'"> Translation request </v-list-item-title>
          </v-list-item>
          <v-list-item link to="/user/reqstate">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"> 번역 현황 </v-list-item-title>
            <v-list-item-title v-else-if="language === '영어'"> Translation status </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <nuxt />
      <snack-bar />
    </div>
    </client-only>
    <bottom-component />
  </v-app>
</template>

<style scoped>
</style>

<script lang="js">
import LoginForm from '~/components/LoginForm'
import SnackBar from '~/components/SnackBar'
import BottomComponent from '~/components/BottomComponent'

export default {
  name: 'textLayout',
  components: {
      LoginForm,
      SnackBar,
      BottomComponent,
  },
  data: () => ({
    loginMenu: false,
    fab: false,
  }),
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
      onLogout() {
          this.loginMenu = false;
          this.$store.dispatch('users/logout');
      },
      update(data) {
        this.loginMenu = data;
      },
  }
};
</script>