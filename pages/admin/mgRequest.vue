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
        <v-card class="overflow-y-auto" style="height: 45vh" elevation="10">
          <v-expansion-panels flat accordion focusable>
            <trans-dash-board
              v-for="item in mainRequest"
              :id="item.id"
              :key="item.id"
              :p="item"
            />
          </v-expansion-panels>
        </v-card>
      </v-container>
    </v-card>

    <v-card>
      <v-container>
        <v-card-title class="titleStyle"> 번역 요청 이력 </v-card-title>
        <v-card style="height: 45vh; text-align: center" elevation="10">
          <v-list style="height: 45vh; overflow-y: scroll">
            <v-list-item v-if="mainRequest.length === 0">
              <v-list-item-title>번역한 의뢰가 없습니다.</v-list-item-title>
            </v-list-item>
            <v-list-item-group v-else>
              <trans-history-board
                v-for="p in mainRequest"
                :id="p.id"
                :key="p.id"
                :p="p"
              />
            </v-list-item-group>
          </v-list>
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
import transHistoryBoard from '~/components/transHistoryBoard';

export default {
    layout: 'admin_layout',
    components: {
        transDashBoard,
        transHistoryBoard,
    },
    data() {
        return {
            
        }
    },
    fetch({ store }) {
        return store.dispatch('requests/loadRequest');
    },
    asyncData() {
        // 비동기 데이터, 위의 data와 합쳐짐.
        return {};
    },
    computed: {
        mainRequest() {
            return this.$store.state.requests.mainRequest;
        },
        loginState() {
            return this.$store.state.users.loginState;
        }
    },
    methods: {
        update() {
          if(!this.loginState) this.$manage.showMessage({ message: '로그인이 필요합니다.' , color: 'red lighten-1' });
          else {
            console.log('조회');
            this.$store.dispatch('requests/loadRequest');
          }
        }
    },
};
</script>