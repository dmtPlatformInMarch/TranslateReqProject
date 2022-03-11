<template>
  <v-container>
    <v-toolbar elevation="0">
      <v-toolbar-title>
        <h1>의뢰 목록 관리</h1>
      </v-toolbar-title>
      <v-spacer />
      <v-btn rounded color="success" @click="update">조회하기</v-btn>
    </v-toolbar>

    <v-card>
      <v-container>
        <v-card-title class="titleStyle"> 번역 현황 </v-card-title>
        <v-card class="overflow-y-auto" style="height: 90vh" elevation="10">
          <v-expansion-panels flat accordion focusable>
            <trans-dash-board v-for="item in allRequest" :id="item.id" :key="item.id" :p="item" />
          </v-expansion-panels>
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>

<style scoped>
.titleStyle {
  color: aliceblue;
  background: #013183;
  border-radius: 30px 30px 0 0;
}
</style>

<script lang="js">
import transDashBoard from '~/components/TransDashBoard';
import transHistoryBoard from '~/components/TransHistoryBoard';

export default {
    layout: 'adminLayout',
    components: {
      transDashBoard,
      transHistoryBoard,
    },
    data() {
      return {
          
      }
    },
    fetch({ store }) {
      return store.dispatch('admin/loadReq');
    },
    asyncData() {
      // 비동기 데이터, 위의 data와 합쳐짐.
      return {};
    },
    computed: {
      allRequest() {
          return this.$store.state.admin.allRequest;
      },
    },
    methods: {
      update() {
        this.$store.dispatch('admin/loadReq');
      }
    },
};
</script>