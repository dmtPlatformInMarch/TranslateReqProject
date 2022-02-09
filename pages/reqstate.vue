<template>
  <v-container>
    <v-toolbar elevation="0">
      <v-toolbar-title>
        <h1>번역 현황 페이지</h1>
      </v-toolbar-title>
      <v-spacer />
      <v-btn rounded color="success" @click="update">조회하기(새로고침)</v-btn>
    </v-toolbar>

    <v-card>
      <v-container v-if="!loginState">
        <v-subheader> 번역 요청 현황 </v-subheader>
        <v-card
          outlined
          style="height: 45vh; text-align: center"
          elevation="10"
        >
          <div>로그인이 필요합니다.</div>
        </v-card>
      </v-container>

      <v-container v-else>
        <v-subheader> {{ loginState.nickname }} 님의 번역 현황 </v-subheader>
        <v-card style="height: 45vh">
          <v-expansion-panels flat>
            <trans-dash-board
              v-for="p in mainRequest"
              :id="p.id"
              :key="p.id"
              :p="p"
            />
          </v-expansion-panels>
        </v-card>
      </v-container>
    </v-card>

    <v-card>
      <v-container v-if="!loginState">
        <v-subheader> 번역 요청 이력 </v-subheader>

        <v-card style="height: 45vh; text-align: center" elevation="10">
          <v-list>
            <v-list-item>
              <v-list-item-title>로그인이 필요합니다.</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>

      <v-container v-else>
        <v-card style="height: 45vh; text-align: center" elevation="10">
          <v-subheader>
            {{ loginState.nickname }} 님의 번역 요청 이력
          </v-subheader>
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
</style>

<script lang="js">
import transDashBoard from '~/components/TransDashBoard';
import transHistoryBoard from '~/components/transHistoryBoard';

export default {
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
            console.log(this.$store.state.requests.mainRequest);
            return this.$store.state.requests.mainRequest;
        },
        loginState() {
            return this.$store.state.users.loginState;
        }
    },
    methods: {
        update() {
            console.log("새로 조회하기\n");
            this.$store.dispatch('requests/loadRequest');
        }
    },
};
</script>