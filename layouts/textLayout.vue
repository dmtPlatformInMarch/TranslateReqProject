<template class="main">
  <v-app>
    <v-app-bar class="main__toolbar" elevation="0" color="transparent" width="100vw">
      <nuxt-link to="/text/textmain" class="main__toolbar__logo">
        <v-avatar width="100%" height="100%" tile>
          <img :src="logo" />
        </v-avatar>
      </nuxt-link>

      <div class="main__toolbar__items">
        <v-btn class="text-center main__toolbar__btn" color="transparent" to="/text/info" depressed tile > 
          {{ language === "한국어" ? "소개" : "Introduce" }}
        </v-btn>
      </div>

      <div class="main__toolbar__settings">
        <v-btn class="main__toolbar__btn" tile icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn class="main__toolbar__btn" tile icon v-bind="attrs" v-on="on">
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
        
        <v-menu v-if="!loginState" v-model="loginMenu" offset-x offset-y :close-on-content-click="false" :nudge-width="200">
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
    
    <div ref="navs" class="page__wrapper">
      <v-navigation-drawer class="nav__main" permanent expand-on-hover color="#013183" dark stateless>
        <v-list class="nav__info" rounded dense>
          <v-list-item v-if="!loginState">
            <v-list-item-icon>
              <v-icon>mdi-account-alert</v-icon>
            </v-list-item-icon>
            <div class="nav__title" v-if="language === '한국어'">로그인이 <br />필요합니다.</div>
            <div class="nav__subtitle" v-else-if="language === '영어'">You need to <br />login.</div>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <div class="nav__title" v-if="language === '한국어'">{{ loginState.nickname }} 님</div>
              <div class="nav__title" v-else-if="language === '영어'">Hello, {{ loginState.nickname }}</div>
              <div class="nav__subtitle" v-if="language === '한국어'">번역 의뢰 : N건</div>
              <div class="nav__subtitle" v-else-if="language === '영어'">Your Request : N cases</div>
              <v-btn class="nav__btn full-width" v-if="language === '한국어'" depressed color="#06d183" @click="onLogout">로그아웃</v-btn>
              <v-btn class="nav__btn full-width" v-else-if="language === '영어'" depressed color="#06d183" @click="onLogout">Logout</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list nav dense>
          <v-list-item class="mobile__visible" link to="/text/info">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"> 소개 </v-list-item-title>
            <v-list-item-title v-else-if="language === '영어'"> Introduce </v-list-item-title>
          </v-list-item>
          <v-list-item link to="/text/request">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"> 번역 의뢰 </v-list-item-title>
            <v-list-item-title v-else-if="language === '영어'"> Translation request </v-list-item-title>
          </v-list-item>
          <v-list-item link to="/text/reqstate">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-search</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"> 번역 현황 </v-list-item-title>
            <v-list-item-title v-else-if="language === '영어'"> Translation status </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer v-model="slideNav" fixed temporary color="#013183">
        <v-list class="nav__info" rounded dense dark>
          <v-list-item v-if="!loginState">
            <v-list-item-icon>
              <v-icon>mdi-account-alert</v-icon>
            </v-list-item-icon>
            <div class="nav__title" v-if="language === '한국어'">로그인이 <br />필요합니다.</div>
            <div class="nav__subtitle" v-else-if="language === '영어'">You need to <br />login.</div>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <div class="nav__title" v-if="language === '한국어'">{{ loginState.nickname }} 님</div>
              <div class="nav__title" v-else-if="language === '영어'">Hello, {{ loginState.nickname }}</div>
              <div class="nav__subtitle" v-if="language === '한국어'">번역 의뢰 : N건</div>
              <div class="nav__subtitle" v-else-if="language === '영어'">Your Request : N cases</div>
              <v-btn class="nav__btn full-width" v-if="language === '한국어'" depressed color="#06d183" @click="onLogout">로그아웃</v-btn>
              <v-btn class="nav__btn full-width" v-else-if="language === '영어'" depressed color="#06d183" @click="onLogout">Logout</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list nav dense dark>
          <v-list-item link to="/text/info">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"> 소개 </v-list-item-title>
            <v-list-item-title v-else-if="language === '영어'"> Introduce </v-list-item-title>
          </v-list-item>
          <v-list-item link to="/text/request">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="language === '한국어'"> 번역 의뢰 </v-list-item-title>
            <v-list-item-title v-else-if="language === '영어'"> Translation request </v-list-item-title>
          </v-list-item>
          <v-list-item link to="/text/reqstate">
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
    <bottom-component />
  </v-app>
</template>

<style scoped>
.main__toolbar {
  display: flex;
  align-items: center;
  height: 5% !important;
}
.main__toolbar >>> .v-toolbar__content {
  width: 100% !important;
  height: 100% !important;
  padding: 0 20px !important;
  justify-content: space-between;
}
.main__toolbar__logo {
  width: 200px;
  height: 100%;
}
.main__toolbar__items {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 100%;
  font-family: 'MinSans-Medium', sans-serif !important;
  font-size: 1.5rem;
}
.main__toolbar__btn {
  height: 100% !important;
  font-size: 1.5rem;
}
.main__toolbar__settings {
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
}
.nav__info {
  display: block;
}
.nav__title {
  font-size: 1rem;
}
.nav__subtitle {
  font-size: 0.5rem;
}
.nav__main ::v-deep .v-list-item {
  padding: 0 8px;
}
.page__wrapper {
  display: flex;
  height: 100%;
}
.mobile__visible {
  display: none;
}

@media screen and (max-width: 900px) {
  .v-list ::v-deep .v-list-item__icon {
    margin-right: 10px !important;
  }
  .nav__title {
    font-size: 0.75rem;
  }
  .nav__subtitle {
    font-size: 0.25rem;
  }
  .nav__btn {
  font-size: 0.75rem;
}
  .main__toolbar__items {
    font-size: 1.25rem;
  }
  .main ::v-deep .v-icon {
    font-size: 1.25rem !important;
  }
  .main__toolbar__btn {
    font-size: 1.25rem;
  }
}

@media screen and (max-width: 600px) {
  .main__toolbar__items {
    display: none;
  }
  .main ::v-deep .v-icon {
    font-size: 1rem !important;
  }
  .main__toolbar__btn {
    font-size: 1rem;
  }
  .nav__btn {
    height: 24px !important;
  }
  .nav__main {
    display: none;
  }
  .mobile__visible {
    display: flex;
  }
}

@media screen and (max-width: 400px) {
  .main__toolbar ::v-deep .v-icon {
    font-size: 1rem;
  }
  .main__toolbar__logo {
    width: 150px;
  }
  .nav__main {
    display: none;
  }
  .main__toolbar__settings {
    font-size: 1rem;
  }
  .main__toolbar__btn {
    font-size: 1rem;
  }
}
</style>

<script lang="js">
import LoginForm from '~/components/LoginForm'
import SnackBar from '~/components/SnackBar'
import BottomComponent from '~/components/BottomComponent'

export default {
  name: 'TextLayout',
  components: {
      LoginForm,
      SnackBar,
      BottomComponent,
  },
  data: () => ({
    logo:     'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo3.png',
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
  mounted() {
    const box = this.$refs.navs;
    box.addEventListener('touchstart', this.swipeStart, false);
    box.addEventListener('touchend', this.swipeEnd, false);
  },
  beforeDestroy() {
    const box = this.$refs.navs;
    box.removeEventListener('touchstart', this.swipeStart, false);
    box.removeEventListener('touchend', this.swipeEnd, false);
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
    }
  }
};
</script>