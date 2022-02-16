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
              v-model="email"
              :rules="emailRules"
              label="이메일"
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
              v-model="password"
              :rules="passwordRules"
              label="비밀번호"
              type="password"
              clearable
              dense
            />
          </v-list-item-content>
        </v-list-item-group>
        <v-list-item-action>
          <v-btn
            style="width: 100%"
            depressed
            :disabled="!valid"
            type="submit"
            @click="onEmit"
            >로그인</v-btn
          >
        </v-list-item-action>
        <v-list-item-action>
          <v-btn plain to="/signup" @click="onEmit" style="width: 90%"
            >회원가입</v-btn
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
      email: "123@123.com",
      password: "123",
      emailRules: [
        (v) => !!v || "이메일을 입력해주세요.",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "이메일이 유효하지 않습니다.",
      ],
      passwordRules: [(v) => !!v || "비밀번호를 입력해주세요."],
    };
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("users/login", {
          email: this.email,
          password: this.password,
        });
        this.$manage.showMessage({ message: "로그인", color: "green" });
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