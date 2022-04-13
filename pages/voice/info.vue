<template>
  <v-container class="full-height">
    <v-card class="full-height" elevation="0">
      <v-card>
        <v-card-title class="text-h2 header"> 디엠티랩스 음성 번역 </v-card-title>
      </v-card>
      <v-container class="body">
        <v-card-title class="font-weight-bold"> 디엠티랩스의 음성 번역 시스템 </v-card-title>
        <v-card-text>
          DMTLABS의 음성 번역 시스템은 영상에서 추출한 음성을 텍스트로 변환하여<br />
          자체 번역 시스템 (AI 활용 번역 엔진), 번역 프리랜서를 이용한 번역 서비스를 제공합니다.<br /><br />

          현재 한국어 음성 데이터 기반의 번역 엔진을 개발 중에 있으며,<br />
          이를 통해 양방향 번역 체계를 구축 및 서비스 예정에 있습니다.
        </v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<style scoped>
@font-face {
    font-family: 'CBNUJIKJI';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/CBNUJIKJI.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'MinSans-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
.full-height {
  height: 100%;
}
.header {
  font-family: 'CBNUJIKJI', sans-serif !important;
  color: white;
  background: #013183;
}
.body {
  font-family: 'MinSans-Medium', sans-serif !important;
}
</style>

<script>
export default {
  data() {
    return {};
  },
};
</script>
