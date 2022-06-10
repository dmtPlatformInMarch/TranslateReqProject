<template>
  <v-container v-if="language === '한국어'">
    <v-toolbar elevation="0">
      <v-spacer />
      <v-btn rounded color="success" @click="update">조회하기</v-btn>
    </v-toolbar>

    <v-card elevation="0">
      <v-container v-if="!loginState">
        <v-card-title class="titleStyle"> 번역 요청 현황 </v-card-title>
        <v-card outlined style="height: 45vh; text-align: center" elevation="10">
          <div>로그인이 필요합니다.</div>
        </v-card>
      </v-container>

      <v-container v-else>
        <v-card-title class="titleStyle"> {{ loginState.nickname }} 님의 번역 현황 </v-card-title>
        <v-card class="overflow-y-auto" style="height: 45vh; text-align: center" elevation="10">
          <v-list-item v-if="mainRequest.length == 0">
            <v-list-item-title> 번역을 요청하신 의뢰가 없습니다. </v-list-item-title>
          </v-list-item>

          <v-expansion-panels v-else flat accordion focusable>
            <client-only>
              <trans-dash-board v-for="item in mainRequest" :id="item.id" :key="item.id" :p="item" />
            </client-only>
          </v-expansion-panels>
        </v-card>
      </v-container>
    </v-card>

    <v-card elevation="0">
      <v-container v-if="!loginState">
        <v-card-title class="titleStyle">번역 요청 이력</v-card-title>
        <v-card class="overflow-y-auto" style="height: 45vh; text-align: center" elevation="10">
          <v-list>
            <v-list-item>
              <v-list-item-title>로그인이 필요합니다.</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>

      <v-container v-else>
        <v-card-title class="titleStyle"> {{ loginState.nickname }} 님의 번역 요청 이력 </v-card-title>
        <v-card style="height: 45vh; text-align: center" elevation="10">
          <v-list style="height: 45vh; overflow-y: scroll">
            <v-list-item v-if="mainRequest.length === 0">
              <v-list-item-title>번역한 의뢰가 없습니다.</v-list-item-title>
            </v-list-item>
            <v-list-item-group v-else>
              <client-only>
                <trans-history-board v-for="p in mainRequest" :id="p.id" :key="p.id" :p="p" />
              </client-only>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-container>
    </v-card>
  </v-container>

  <v-container v-else-if="language === '영어'">
    <v-toolbar elevation="0">
      <v-spacer />
      <v-btn rounded color="success" @click="update">Renewal</v-btn>
    </v-toolbar>

    <v-card>
      <v-container v-if="!loginState">
        <v-card-title class="titleStyle"> Translation Request Status </v-card-title>
        <v-card outlined style="height: 45vh; text-align: center" elevation="10">
          <div>You need to Login.</div>
        </v-card>
      </v-container>

      <v-container v-else>
        <v-card-title class="titleStyle"> {{ loginState.nickname }}'s Translation Status </v-card-title>
        <v-card class="overflow-y-auto" style="height: 45vh; text-align: center" elevation="10">
          <v-list-item v-if="mainRequest.length == 0">
            <v-list-item-title> There is no request for translation. </v-list-item-title>
          </v-list-item>
          <v-expansion-panels v-else flat accordion focusable>
            <client-only>
              <trans-dash-board v-for="item in mainRequest" :id="item.id" :key="item.id" :p="item" />
            </client-only>
          </v-expansion-panels>
        </v-card>
      </v-container>
    </v-card>

    <v-card>
      <v-container v-if="!loginState">
        <v-card-title class="titleStyle"> Translation Request History </v-card-title>
        <v-card class="overflow-y-auto" style="height: 45vh; text-align: center" elevation="10">
          <v-list>
            <v-list-item>
              <v-list-item-title>You need to Login.</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>

      <v-container v-else>
        <v-card-title class="titleStyle"> {{ loginState.nickname }}'s Translation History </v-card-title>
        <v-card style="height: 45vh; text-align: center" elevation="10">
          <v-list style="height: 45vh; overflow-y: scroll">
            <v-list-item v-if="mainRequest.length === 0">
              <v-list-item-title> There is no translation request. </v-list-item-title>
            </v-list-item>
            <v-list-item-group v-else>
              <client-only>
                <trans-history-board v-for="p in mainRequest" :id="p.id" :key="p.id" :p="p" />
              </client-only>
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
import transHistoryBoard from '~/components/TransHistoryBoard';

export default {
  layout: 'TextLayout',
  components: {
      transDashBoard,
      transHistoryBoard,
  },
  data() {
      return {
          
      }
  },
  async fetch({ store }) {
    if(store.state.users.loginState)
      return await store.dispatch('requests/loadRequests', store.state.users.loginState);
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
      },
      language() {
        return this.$store.state.manager.language;
      }
  },
  methods: {
      async update() {
        if(!this.loginState) this.$manage.showMessage({ message: '로그인이 필요합니다.' , color: 'red lighten-1' });
        else {
          await this.$store.dispatch('requests/loadRequests', this.loginState);
        }
      },
  },
};
</script>