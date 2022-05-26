<template>
  <v-container class="full-height">
    <!--메인 헤드라인-->
    <div>
      <v-parallax :src="mainimg" height="300">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h1 font-weight-thin mb-4"> DMTLABS </h1>
            <h4 v-if="language === '한국어'" class="subheading">
              DMTLABS의 음성 번역 시스템
            </h4>
            <h4 v-else-if="language === '영어'" class="subheading">
              DMTLABS Voice Translation System
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>

    <v-container v-if="language === '한국어'" class="body">
      <v-card-title class="font-weight-bold"> 디엠티랩스의 음성 번역 시스템 </v-card-title>
      <v-card-text>
        DMTLABS의 음성 번역 시스템은 영상에서 추출한 음성을 텍스트로 변환하여<br />
        자체 번역 시스템 (AI 활용 번역 엔진), 번역 프리랜서를 이용한 번역 서비스를 제공합니다.<br /><br />

        현재 한국어 음성 데이터 기반의 번역 엔진을 개발 중에 있으며,<br />
        이를 통해 양방향 번역 체계를 구축 및 서비스 예정에 있습니다.
      </v-card-text>
    </v-container>

    <v-container v-else-if="language === '영어'" class="body">
      <v-card-title class="font-weight-bold"> DMTLABS's Voice Translation System </v-card-title>
      <v-card-text>
        DMTLABS' voice translation system converts the voice extracted from the video into text and provides <br />
        translation services using its own translation system (AI-enabled translation engine) and translation freelancer. <br /><br />

        Currently, we are developing a translation engine based on Korean voice data, <br />
        and through this, we are planning to establish a two-way translation system and provide services.<br /><br />
      </v-card-text>
    </v-container>

    <v-divider />
  </v-container>
</template>

<style scoped>
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
  layout: 'TextLayout',
  data() {
    return {
      mainimg: 'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg',// || require("~/static/mainImg1.jpg"),
    };
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
  },
};
</script>
