<template>
  <v-app>
    <v-toolbar elevation="0" style="flex: initial; width: 100%">
      <v-toolbar-title>
        <nuxt-link to="/admin">
          <v-avatar height="80px" width="200px" tile>
            <img src="https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo3.png" />
          </v-avatar>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <!--v-toolbar-items>
        <v-btn text @click="goSite">의뢰사이트로 이동</v-btn>
      </v-toolbar-items-->
    </v-toolbar>

    <div style="display: flex; flex-direction: row; height: 100%">
      <v-navigation-drawer permanent expand-on-hover color="#013183" dark>
        <v-list rounded dense>
          <v-list-item style="padding: 0px 8px">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-if="loginState != null" class="text-h6">{{ loginState.nickname }} 님</v-list-item-title>
              <v-list-item-subtitle>[관리자 계정] 접속중</v-list-item-subtitle>
              <v-btn depressed color="#06d183" @click="onLogout">로그아웃</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list nav dense style="padding: 0px 8px">
          <v-list-item link to="/admin/mgUser">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>유저관리</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/admin/mgRequest">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title>의뢰 목록 확인</v-list-item-title>
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
  name: 'adminLayout',
  components: {
      LoginForm,
      SnackBar,
  },
  data: () => ({
    loginMenu: false,
  }),
  beforeCreate() {
    const check = this.$store.state.users.loginState;
    if(check === null) {
      this.$router.push('/');
    } else {
      if(check.permission != 'admin') {
        this.$router.push('/');
      }
    }
  },
  computed: {
    loginState() {
        return this.$store.state.users.loginState;
    },
  },
  methods: {
      onLogout() {
          this.loginMenu = false;
          this.$store.dispatch('users/logout');
          this.$router.replace('/user/textmain');
      },
      update(data) {
        this.loginMenu = data;
      },
      goSite() {
        this.$router.push('/user/textmain');
      }
  }
};
</script>