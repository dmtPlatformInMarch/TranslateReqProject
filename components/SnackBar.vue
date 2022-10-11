<template class="snackbar__template">
  <v-snackbar v-model="act" :color="color" :timeout="time">
    {{ message }}
    <v-spacer />
    <template #action="{ attrs }">
      <v-btn class="snack__btn" text v-bind="attrs" @click="act = false">닫기</v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>
.snackbar__template {
  z-index: 99;
}
.snack__btn {
  margin: 0 15px;
}
</style>

<script>
export default {
  data() {
    return {
      act: false,
      color: "",
      message: "",
      time: 2000,
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "manager/showMessage") {
        this.message = state.manager.snackBar.message;
        this.color = state.manager.snackBar.color;
        this.act = true;
      }
    });
  },
};
</script>
