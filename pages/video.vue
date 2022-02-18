<template>
  <v-container v-if="language === '한국어'">
    <h1>영상 번역 페이지로 바꿀 예정</h1>
  </v-container>

  <v-container v-else-if="language === '영어'">
    <h1>Video Translate Page</h1>
  </v-container>
</template>

<style scoped>
</style>

<script lang="js">
export default {
  data() {
    return {

    }
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    }
  }
}
</script>