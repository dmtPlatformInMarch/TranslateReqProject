<template>
  <v-container>
    <v-toolbar elevation="0">
      <v-toolbar-title>
        <h1>유저 관리</h1>
      </v-toolbar-title>
      <v-spacer />
      <v-btn rounded color="success" @click="update">조회하기</v-btn>
    </v-toolbar>

    <v-card style="height: 90vh" elevation="10">
      <v-list-item class="text-center">
        <v-list-item-title>이름</v-list-item-title>
        <v-list-item-title>이메일</v-list-item-title>
        <v-list-item-title>가입일</v-list-item-title>
      </v-list-item>
      <v-list class="overflow-y-auto text-center">
        <v-list-item v-for="user in users" :key="user.id">
          <v-list-item-title>{{ user.nickname }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          <v-list-item-title>{{ user.createdAt }}</v-list-item-title>
          <v-btn icon text @click="choice(user.email)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="300">
      <v-card>
        <v-card-title class="text-h5">유저 정보 삭제</v-card-title>
        <v-card-text>유저 정보를 정말로 삭제하시겠습니까?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dialog = false">아니오</v-btn>
          <v-btn text @click="deleteUser(delemail)">예</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
</style>

<script lang="js">
export default {
    layout: 'adminLayout',
    data() {
      return {
        dialog: false,
        delemail: '',
      }
    },
    fetch({ store }) {
      return store.dispatch('admin/loadUser');
    },
    computed: {
      users() {
        return this.$store.state.admin.allUser;
      }
    },
    methods: {
      update() {
        this.$store.dispatch('admin/loadUser');
      },
      async deleteUser(email) {
        const deleteResponse = await this.$store.dispatch('admin/deleteUser', email);
        this.dialog = false;
      },
      choice(email) {
        this.delemail = email;
        this.dialog = true;
      }
    }
}
</script>