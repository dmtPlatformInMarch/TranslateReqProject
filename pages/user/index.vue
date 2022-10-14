<template>
  <v-container>
    <v-container v-if="language === '한국어'">
      <v-card v-if="loginState">
        <v-container>
          <v-card-title>
            내 정보
          </v-card-title>
          <v-text-field rounded readonly outlined label="이름" :value="loginState.nickname" />
          <v-text-field rounded readonly outlined label="E-mail" :value="loginState.email" />
          <v-text-field rounded readonly outlined label="소속(기업)" :value="loginState.organization" />
        </v-container>

        <v-container v-if="loginState.organization">
          <v-card-title>
            발급 토큰 확인
          </v-card-title>
          <v-form ref="tokenForm" v-model="valid" @submit.prevent="checkToken">
            <v-text-field v-model="inputToken" :rules="tokenRule" rounded outlined label="토큰" placeholder="발급받은 토큰을 입력하세요.">
              <template class="append__btn" v-slot:append>
                <v-btn rounded depressed type="submit" @click.stop>
                  <v-icon>
                    mdi-check
                  </v-icon>
                  확인
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </v-container>
      </v-card>

      <v-card v-else>
        <v-card-text>로그인이 필요합니다.</v-card-text>
      </v-card>
    </v-container>

    <v-container v-else-if="language === '영어'">
      <v-card v-if="loginState">
        <v-container>
          <v-card-title>
            My Page
          </v-card-title>
          <v-text-field rounded readonly outlined label="Name" :value="loginState.nickname" />
          <v-text-field rounded readonly outlined label="E-mail" :value="loginState.email" />
          <v-text-field rounded readonly outlined label="Organization(Company)" :value="loginState.organization" />
        </v-container>
      </v-card>

      <v-card v-else>
        <v-card-text>Please, Need to Login</v-card-text>
      </v-card>
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
div >>> .v-input__append-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto !important;
  width: auto;
  height: 100%;
}
</style>

<script>
import SnackBar from "~/components/SnackBar";

export default {
  layout: "TextLayout",
  components: {
    SnackBar,
  },
  data() {
    return {
      valid: false,
      inputToken: "",
      tokenRule: [
        (v) => !!v || "토큰을 입력해주세요.", 
        (v) => !(v && v.length < 32) || "토큰이 유효하지 않습니다."
      ],
    }
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
    loginState() {
      return this.$store.state.users.loginState;
    },
  },
  methods: {
    checkToken() {
      if (this.loginState.organization === "") {
        this.$manage.showMessage({ message: "소속(기업) 등록 후 이용하실 수 있습니다.", color: "orange" }); 
        return;
      }
      if (this.$refs.tokenForm.validate()) {
        this.$store.dispatch('manager/tokenCheck', {
          organization: this.loginState?.organization,
          token: this.inputToken
        });
      }
    }
  }
};
</script>
