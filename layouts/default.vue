<template>
  <v-app>
    <v-toolbar elevation="0" style="flex: initial; width: 100%">
      <v-toolbar-title>
        <nuxt-link to="/">
          <v-avatar height="80px" width="200px" tile>
            <img src="../static/logo3.png" />
          </v-avatar>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text @click="onSnack"> 스낵바 생성 </v-btn>
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
              text
              style="{display: flex, alignItems: 'center'}"
              v-bind="attrs"
              v-on="on"
              >로그인</v-btn
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
            <v-list-item-title>로그인이 <br />필요합니다.</v-list-item-title>
          </v-list-item>
          <v-list-item v-else style="padding: 0px 8px">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-h6"
                >{{ loginState.nickname }} 님</v-list-item-title
              >
              <v-list-item-subtitle>번역 의뢰 : N건</v-list-item-subtitle>
              <v-btn depressed color="#06d183" @click="onLogout"
                >로그아웃</v-btn
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list nav dense style="padding: 0px 8px">
          <v-list-item link to="/request">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>번역 의뢰</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/reqstate">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title>번역 현황</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/history">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>영상 및 자막 번역</v-list-item-title>
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
    name: "Default",
    components: {
        LoginForm,
        SnackBar,
    },
    data: () => ({
      loginMenu: false,
    }),
    computed: {
      loginState() {
          return this.$store.state.users.loginState;
      },
    },
    methods: {
        onLogout() {
            this.loginMenu = false;
            this.$store.dispatch('users/logout');
            this.$manage.showMessage({ message: '로그아웃', color: 'red' });
        },
        update(data) {
          this.loginMenu = data;
        },
        onSnack() {
          this.$manage.showMessage({ message: '스낵바 생성 테스트', color: 'info' });
          console.log('스낵바 생성 시도');
        }
    }
};
</script>