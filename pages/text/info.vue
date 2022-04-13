<template>
  <v-container class="full-height">
    <v-card class="full-height" elevation="0">
      <v-card>
        <v-card-title class="text-h2 header"> 디엠티랩스 텍스트 번역 </v-card-title>
      </v-card>
      <v-container class="body">
        <v-card-title class="font-weight-bold"> 디엠티랩스의 텍스트 번역 시스템 </v-card-title>
        <v-card-text>
          DMTLABS에서는 언어와 데이터를 수집하여 구축한 다국어 번역 시스템을 통해 <br />
          문서에 대한 번역 및 번역 의뢰 서비스를 운영하고 있습니다. <br /><br />

          특히 한중 번역에 대해서는 전문분야 DB 구축을 기반으로 한 번역시스템으로<br />
          높은 정확도의 번역을 기대할 수 있겠습니다.<br /><br />
        </v-card-text>

        <v-divider />

        <v-card-title class="font-weight-bold"> 디엠티랩스의 의뢰 플랫폼 </v-card-title>
        <v-card-text>
          현재, DMTTRAN 플랫폼을 통해 타 플랫폼과 다른 저렴하고 정확한 번역 의뢰를<br />
          서비스하려고 노력하고 있으며, 차별점으로 저렴한 가격과 AI 번역 시스템을 내세우고 있습니다.<br /><br />

          해당 플랫폼을 통해 보다 대중적으로 번역에 대한 서비스를 제공하는 할 것이며,<br />
          특히 번역 서비스를 누리지 못한 젊은층의 대중들에게 서비스를 제공할 수 있도록 할 예정입니다.<br /><br />

          또한, 텍스트 번역에만 그치지 않고 이미지 속 텍스트를 번역하는 단계까지 개발 중에 있습니다.<br />
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
