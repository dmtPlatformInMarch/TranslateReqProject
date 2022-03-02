<template>
  <div>
    <v-container v-if="language === '한국어'">
      <v-card>
        <v-container>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field
              v-model="nickname"
              label="이름"
              type="text"
              :rules="nicknameRules"
            />
            <v-text-field
              v-model="email"
              label="이메일"
              type="email"
              :rules="emailRules"
            />
            <v-text-field
              v-model="password"
              label="사용할 비밀번호"
              type="password"
              :rules="passwordRules"
            />
            <v-text-field
              v-model="passwordCheck"
              label="비밀번호 확인"
              type="password"
              :rules="passwordCheckRules"
            />
            <v-checkbox
              v-model="terms"
              required
              label="가입 약관"
              :rules="[(v) => !!v || '약관 동의는 필수입니다.']"
            />
            <v-btn type="submit">가입하기</v-btn>
            <v-dialog v-model="dialog" persistent max-width="300">
              <v-card>
                <v-card-title class="text-h5">회원가입 오류</v-card-title>
                <v-card-text>{{ errorMessage }}</v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn text @click="dialog = false">닫기</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-form>
        </v-container>
      </v-card>
    </v-container>

    <v-container v-else-if="language === '영어'">
      <v-card>
        <v-container>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field
              v-model="nickname"
              label="Name"
              type="text"
              :rules="nicknameRules"
            />
            <v-text-field
              v-model="email"
              label="E-mail"
              type="email"
              :rules="emailRules"
            />
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              :rules="passwordRules"
            />
            <v-text-field
              v-model="passwordCheck"
              label="Password Check"
              type="password"
              :rules="passwordCheckRules"
            />
            <v-checkbox
              v-model="terms"
              required
              label="Subscription Terms "
              :rules="[
                (v) =>
                  !!v ||
                  'It is essential to agree to the terms and conditions.',
              ]"
            />
            <v-btn type="submit">SignUp</v-btn>
            <v-dialog v-model="dialog" persistent max-width="300">
              <v-card>
                <v-card-title class="text-h5">SignUp Error</v-card-title>
                <v-card-text>{{ errorMessage }}</v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn text @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  layout: "signup_layout",
  head() {
    return {
      title: "회원가입",
    };
  },
  data() {
    return {
      dialog: false,
      errorMessage: false,
      valid: false,
      nickname: "",
      email: "",
      password: "",
      passwordCheck: "",
      terms: false,
      emailRules: [
        (v) =>
          !!v || this.language === "한국어"
            ? "이메일을 입력해주세요."
            : "You have to enter an email.",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          this.language === "한국어"
            ? "이메일이 유효하지 않습니다."
            : "Email is not invalid.",
      ],
      nicknameRules: [
        (v) =>
          !!v || this.language === "한국어"
            ? "이름을 입력해주세요."
            : "You have to enter your name",
      ],
      passwordRules: [
        (v) =>
          !!v || this.language === "한국어"
            ? "비밀번호를 입력해주세요."
            : "Please enter your password.",
      ],
      passwordCheckRules: [
        (v) =>
          !!v || this.language === "한국어"
            ? "비밀번호가 일치하지 않습니다."
            : "The password does not match.",
        (v) =>
          v === this.password || this.language === "한국어"
            ? "비밀번호가 일치하지 않습니다."
            : "The password does not match.",
      ],
    };
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
  },
  methods: {
    async onSubmitForm() {
      try {
        if (this.$refs.form.validate()) {
          // dispatch는 구조상 promise
          const onResponse = await this.$store.dispatch("users/signUp", {
            email: this.email,
            password: this.password,
            nickname: this.nickname,
          });
          if (onResponse.status === 201) {
            this.$router.push({ path: "/user/textmain" });
          } else if (onResponse.status === 202) {
            this.dialog = true;
            this.errorMessage = onResponse.data.message;
          }
        }
      } catch (err) {
        console.log("에러" + err);
      }
    },
  },
};
</script>