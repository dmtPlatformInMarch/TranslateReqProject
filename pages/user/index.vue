<template>
  <v-container>
    <v-container v-if="language === '한국어'">
      <v-toolbar elevation="0">
        <v-toolbar-title class="text-h4 font-weight-bold"> 유저 정보 </v-toolbar-title>
      </v-toolbar>

      <v-card v-if="loginState">
        <v-container>
          <v-form>
            <v-text-field rounded readonly outlined label="이름" :value="loginState.nickname" />
            <v-text-field rounded readonly outlined label="E-mail" :value="loginState.email" />
            <v-text-field rounded readonly outlined label="소속" value="소속 없음" />
          </v-form>
        </v-container>
      </v-card>

      <v-card v-else>
        <v-card-text>로그인이 필요합니다.</v-card-text>
      </v-card>
    </v-container>

    <v-container v-else-if="language === '영어'">
      <v-toolbar elevation="0">
        <v-toolbar-title class="text-h4 font-weight-bold"> User Info </v-toolbar-title>
      </v-toolbar>
    </v-container>

    <v-container v-else>
      <v-toolbar elevation="0">
        <v-toolbar-title v-if="language === '한국어'" class="text-h4 font-weight-bold"> 언어 설정 오류 </v-toolbar-title>
        <v-toolbar-title v-else-if="language === '영어'" class="text-h4 font-weight-bold"> Language setting error </v-toolbar-title>
      </v-toolbar>
      <v-card>
        <v-card-title v-if="language === '한국어'">
          The page could not be loaded because an error occurred during the language setting process!
        </v-card-title>
        <v-card-title v-else-if="language === '영어'"> </v-card-title>
      </v-card>
    </v-container>
    <snack-bar />
  </v-container>
</template>

<style scoped>
</style>

<script>
import SnackBar from "~/components/SnackBar";

export default {
  layout: "TextLayout",
  components: {
    SnackBar,
  },
  data() {
    return {};
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
    loginState() {
      return this.$store.state.users.loginState;
    },
  },
};
</script>
