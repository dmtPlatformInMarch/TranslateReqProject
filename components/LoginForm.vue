<template>
  <v-card>
    <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
      <v-list class="text-center">
        <v-list-item-group>
          <v-list-item-content
            style="
               {
                margin: 20px;
                padding: 10px;
              }
            "
          >
            <v-text-field
              v-if="language === '한국어'"
              v-model="email"
              :rules="emailRules"
              label="이메일"
              type="email"
              clearable
              dense
            />
            <v-text-field
              v-else-if="language === '영어'"
              v-model="email"
              :rules="e_emailRules"
              label="Email"
              type="email"
              clearable
              dense
            />
          </v-list-item-content>
          <v-list-item-content
            style="
               {
                margin: 20px;
                padding: 10px;
              }
            "
          >
            <v-text-field
              v-if="language === '한국어'"
              v-model="password"
              :rules="passwordRules"
              label="비밀번호"
              type="password"
              clearable
              dense
            />
            <v-text-field
              v-else-if="language === '영어'"
              v-model="password"
              :rules="e_passwordRules"
              label="Password"
              type="password"
              clearable
              dense
            />
          </v-list-item-content>
        </v-list-item-group>
        <v-list-item-action>
          <v-btn
            v-if="language === '한국어'"
            style="width: 100%"
            depressed
            :disabled="!valid"
            type="submit"
            @click="onEmit"
            >로그인</v-btn
          >
          <v-btn
            v-else-if="language === '영어'"
            style="width: 100%"
            depressed
            :disabled="!valid"
            type="submit"
            @click="onEmit"
            >Login</v-btn
          >
        </v-list-item-action>
        <v-list-item-action>
          <v-btn
            v-if="language === '한국어'"
            plain
            to="/signup"
            @click="onEmit"
            style="width: 90%"
            >회원가입</v-btn
          >
          <v-btn
            v-if="language === '영어'"
            plain
            to="/signup"
            @click="onEmit"
            style="width: 90%"
            >Sign Up</v-btn
          >
        </v-list-item-action>
      </v-list>
    </v-form>
  </v-card>
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      // valid는 하위 rules가 모두 true인 경우에만 true
      // 하나라도 false라면 false (rules가 없다면 true)
      valid: false,
      email: "dmt@dmtlabs.com",
      password: "dmt123",
      emailRules: [
        (v) => !!v || "이메일을 입력해주세요.",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "이메일이 유효하지 않습니다.",
      ],
      e_emailRules: [
        (v) => !!v || "Please enter your e-mail.",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Email is invalid.",
      ],
      passwordRules: [(v) => !!v || "비밀번호를 입력해주세요."],
      e_passwordRules: [(v) => !!v || "Please enter your password."],
    };
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
  },
  methods: {
    async onSubmitForm() {
      if (this.$refs.form.validate()) {
        try {
          await this.$store.dispatch("users/login", {
            email: this.email,
            password: this.password,
          });
          if (this.$store.state.users.loginState.permission === "admin") {
            this.$router.push("/admin");
          } else {
            this.$router.go();
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        // false
      }
      //console.log(this.valid);
    },
    onEmit() {
      this.$emit("update", false);
    },
  },
};
</script>