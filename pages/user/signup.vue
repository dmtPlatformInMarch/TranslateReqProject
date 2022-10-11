<template>
  <div>
    <v-container v-if="language === '한국어'">
      <v-card>
        <v-container>
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-text-field v-model="nickname" label="이름*" type="text" :rules="nicknameRules" />
            <v-text-field v-model="email" label="이메일(아이디)*" type="email" :rules="emailRules" />
            <v-text-field v-model="password" label="비밀번호*" type="password" :rules="passwordRules" />
            <v-text-field v-model="passwordCheck" label="비밀번호 확인*" type="password" :rules="passwordCheckRules" />
            <v-text-field v-model="organization" label="소속(기업)" type="text" />
            <v-checkbox 
              v-model="terms" 
              required
              readonly
              label="가입 약관" 
              @click="onPolicy" 
              :rules="[(v) => !!v || '약관 동의는 필수입니다.']" 
            />
            <v-dialog v-model="policy" max-width="80%">
              <v-card class="card d-flex flex-column">
                <div class="card__title">
                  가입 약관
                </div>
                <div class="text__box overflow-auto">
                  <div class="card__subtitle">이용약관</div>
                  <div class="text__policy overflow-y-auto">
                    <Term />
                  </div>
                  <div class="card__subtitle">개인정보처리방침</div>
                  <div class="text__policy overflow-y-auto">
                    <Policy />
                  </div>
                </div>
                <v-btn color="success" @click="agree">동의합니다</v-btn>
              </v-card>
            </v-dialog>

            <v-btn type="submit" color="success" :disabled="!valid">가입하기</v-btn>
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
            <v-text-field v-model="nickname" label="Name" type="text" :rules="e_nicknameRules" />
            <v-text-field v-model="email" label="E-mail" type="email" :rules="e_emailRules" />
            <v-text-field v-model="password" label="Password" type="password" :rules="e_passwordRules" />
            <v-text-field v-model="passwordCheck" label="Password Check" type="password" :rules="e_passwordCheckRules" />
            <v-text-field v-model="organization" label="organization(Company)" type="text" />
            <v-checkbox
              v-model="terms"
              required
              readonly
              label="Signup Terms"
              @click="onPolicy" 
              :rules="[(v) => !!v || 'It is essential to agree to the terms and conditions.']"
            />
            <v-dialog v-model="policy" max-width="80%">
              <v-card class="card d-flex flex-column">
                <div class="card__title">
                  Signup Terms
                </div>
                <div class="text__box overflow-auto">
                  <div class="card__subtitle">Terms</div>
                  <div class="text__policy overflow-y-auto">
                    <Term />
                  </div>
                  <div class="card__subtitle">Privacy Policy</div>
                  <div class="text__policy overflow-y-auto">
                    <Policy />
                  </div>
                </div>
                <v-btn color="success" @click="agree">Agree</v-btn>
              </v-card>
            </v-dialog>

            <v-btn type="submit" color="success">SignUp</v-btn>
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
.card {
  width: 100%;
  height: 80vh;
}
.card__title {
  background: #013183;
  padding: 25px;
  font-size: 1.25rem;
  color: white;
}
.card__subtitle {
  padding: 10px;
  border-top: 1px solid #013183;
  border-bottom: 1px solid #013183;
}
.text__box {
  width: 100%;
  height: 100%;
}
.text__policy {
  width: 100%;
  max-height: calc(50% - 44px);
  padding: 20px;
}
</style>

<script>
import Term from "../../components/Term.vue";
import Policy from "../../components/Policy.vue";

export default {
  layout: "SignupLayout",
  components: {
    Term,
    Policy,
  },
  head() {
    return {
      title: "회원가입",
    };
  },
  data() {
    return {
      dialog: false,
      policy: false,
      errorMessage: false,
      valid: false,
      nickname: "",
      email: "",
      password: "",
      passwordCheck: "",
      organization: "",
      terms: false,
      emailRules: [
        (v) => !!v || "이메일을 입력해주세요.",
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "이메일이 유효하지 않습니다.",
      ],
      nicknameRules: [(v) => !!v || "이름을 입력해주세요."],
      passwordRules: [(v) => !!v || "비밀번호를 입력해주세요."],
      passwordCheckRules: [(v) => !!v || "비밀번호가 일치하지 않습니다.", (v) => v === this.password || "비밀번호가 일치하지 않습니다."],
      e_emailRules: [(v) => !!v || "Please input your e-mail.", (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail is invalid."],
      e_nicknameRules: [(v) => !!v || "Please input your name."],
      e_passwordRules: [(v) => !!v || "Please input your password."],
      e_passwordCheckRules: [(v) => !!v || "Password is not matched.", (v) => v === this.password || "Password is not matched."],
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
            organization: this.organization
          });
          if (onResponse.status === 201) {
            this.$router.push({ path: "/text/textmain" });
          } else if (onResponse.status === 202) {
            this.dialog = true;
            this.errorMessage = onResponse.data.message;
          }
        }
      } catch (err) {
        console.log("에러" + err);
      }
    },
    onPolicy() {
      if(!this.terms) this.policy = true;
      else this.terms = false;
    },
    agree() {
      this.terms = true;
      this.policy = false;
    }
  },
};
</script>