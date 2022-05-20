<template>
  <v-toolbar
    class="bottom__bar d-flex align-center justify-center"
    bottom
    extended
    extension-height="150"
    color="#013183"
    dark
  >
    <div v-if="language === '한국어'" class="text-center text-caption">
      © (주)디엠티랩스 <br />
      고객센터 : help@dmtlabs.co.kr | 02-794-5333 <br />
      주소 : (04386) 서울특별시 용산구 한강대로40길 18, 404호 (한강로2가 144-2 다이빌딩) <br />
      Copyright © 2021 DMT Labs All Rights Reserved. <br />
      <v-breadcrumbs class="align-center justify-center">
        <v-breadcrumbs-item @click="term = true">이용약관</v-breadcrumbs-item>
        <v-breadcrumbs-divider>|</v-breadcrumbs-divider>
        <v-breadcrumbs-item @click="policy = true">개인정보방침</v-breadcrumbs-item>
      </v-breadcrumbs>
    </div>

    <div v-else-if="language === '영어'" class="text-center text-caption">
      © DMTLABS Co., Ltd.<br />
      Customer Service : help@dmtlabs.co.kr | 02-794-5333 <br />
      Address : (04386) Room 404, Hangang-daero 40-gil 18, Yongsan-gu, Seoul, Republic of Korea
      (144-2 Dai Building, Hangang-ro 2-ga) <br />
      Copyright © 2021 DMT Labs All Rights Reserved. <br />
      <v-breadcrumbs class="align-center justify-center">
        <v-breadcrumbs-item @click="term = true">Terms</v-breadcrumbs-item>
        <v-breadcrumbs-divider>|</v-breadcrumbs-divider>
        <v-breadcrumbs-item @click="policy = true">Privacy Policy</v-breadcrumbs-item>
      </v-breadcrumbs>
    </div>

    <v-dialog v-model="term">
      <v-card>
        <v-card-title> 이용약관 </v-card-title>
        <v-card-text>
          <term style="white-space: pre-wrap" />
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="policy">
      <v-card>
        <v-card-title> 개인정보방침 </v-card-title>
        <v-card-text>
          <policy style="white-space: pre-wrap" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<style scoped>
.bottom__bar {
  display: absolute;
  bottom: 0;
  max-height: 200px;
}
</style>

<script>
import Term from "../components/Term.vue";
import Policy from "../components/Policy.vue";

export default {
  components: { Term, Policy },
  data() {
    return {
      term: false,
      policy: false,
    };
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
  },
};
</script>
