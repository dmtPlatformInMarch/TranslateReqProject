<template>
  <v-app>
    <v-app-bar class="main__toolbar" elevation="0" color="transparent" width="100vw">
      <v-toolbar-title>
        <nuxt-link to="/admin/main">
          <v-avatar height="80px" width="200px" tile>
            <img :src="logo" />
          </v-avatar>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <!--v-toolbar-items>
        <v-btn text @click="goSite">의뢰사이트로 이동</v-btn>
      </v-toolbar-items-->
    </v-app-bar>

    <div style="display: flex; flex-direction: row; height: 100%;">
      <v-navigation-drawer permanent expand-on-hover color="#013183" dark>
        <v-list rounded dense>
          <v-list-item style="padding: 0px 8px">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-if="loginState != null" class="nav__title">{{ loginState.nickname }} 님</v-list-item-title>
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
          <v-list-item link to="/admin/mgToken">
            <v-list-item-icon>
              <v-icon>mdi-hand-coin</v-icon>
            </v-list-item-icon>
            <v-list-item-title>기업 토큰 관리</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <nuxt />
    </div>

    <snack-bar />
  </v-app>
</template>

<style scoped>
.main__toolbar {
  display: flex;
  align-items: center;
  height: 5vh !important;
}
.nav__title {
  font-size: 1rem;
}
</style>

<script lang="js">
import SnackBar from '~/components/SnackBar'

export default {
  name: 'AdminLayout',
  components: {
      SnackBar,
  },
  data: () => ({
    logo:     'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo3.png',
    loginMenu: false,
  }),
  computed: {
    loginState() {
        return this.$store.state.users.loginState;
    },
  },
  beforeMount() {
    const check = this.$store.state.users.loginState;
    if(check === null) {
      this.$router.push('/admin');
    } else {
      if(check.permission != 'admin') {
        this.$router.push('/');
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
      goSite() {
        this.$router.push('/text/textmain');
      }
  }
};
</script>