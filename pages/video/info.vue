<template>
  <v-container class="full-height">
    <v-card class="full-height" elevation="0">
      <v-card>
        <v-card-title class="text-h2 header"> 디엠티랩스 영상 번역 </v-card-title>
      </v-card>
      <v-container class="body">
        <v-card-title class="font-weight-bold"> 디엠티랩스의 영상 번역 시스템 </v-card-title>
        <v-card-text>
          현재 DMTLABS에서는 영상 번역에 대한 연구가 진행 중이며, <br />
          그 전 단계로 음성 단계의 번역에 집중하고 있습니다.<br /><br />

          음성 단계의 번역 과정을 거쳐 최종적으로는 <br />
          영상 자막 및 영상 내 이미지 번역까지 수행하는 시스템 구축을 목표로 하고 있습니다.<br /><br />
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
