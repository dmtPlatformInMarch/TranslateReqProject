<template>
  <v-app>
    <h1 class="text-center">회원 가입</h1>
    <div class="text-center">
      <nuxt />
    </div>
    <div class="text-center">
      <v-btn to="/">돌아가기</v-btn>
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
    }
}
</script>
