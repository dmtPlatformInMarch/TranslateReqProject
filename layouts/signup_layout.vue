<template>
  <v-app>
    <h1 class="text-center">
      {{ language === "한국어" ? "회원 가입" : "SignUp" }}
    </h1>
    <div class="text-center">
      <nuxt />
    </div>
    <div class="text-center">
      <v-btn to="/">{{ language === "한국어" ? "돌아가기" : "Back" }}</v-btn>
    </div>
    <snack-bar />
  </v-app>
</template>

<style scoped>
</style>

<script lang="js">
import SnackBar from '~/components/SnackBar'

export default {
    layout: 'signup_layout',
    components: {
        SnackBar,
    },
    computed: {
      language: {
        get() {
          return this.$store.state.manager.language;
        },
        set(value) {
          return this.$store.commit('manager/setLanguage', value);
        }
      }
    }
}
</script>
