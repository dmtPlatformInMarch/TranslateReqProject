<template>
  <v-container class="full-height">
    <!--메인 헤드라인-->
    <div>
      <v-parallax :src="mainimg" height="300">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h1 font-weight-thin mb-4"> DMTLABS </h1>
            <h4 v-if="language === '한국어'" class="subheading">
              DMTLABS의 영상 번역 시스템
            </h4>
            <h4 v-else-if="language === '영어'" class="subheading">
              DMTLABS Video Translation System
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>

    <v-container v-if="language === '한국어'" class="body">
      <v-card-title class="font-weight-bold"> 디엠티랩스의 영상 번역 시스템 </v-card-title>
      <v-card-text>
        현재 DMTLABS에서는 영상 번역에 대한 연구가 진행 중이며, <br />
        그 전 단계로 음성 단계의 번역에 집중하고 있습니다.<br /><br />

        음성 단계의 번역 과정을 거쳐 최종적으로는 <br />
        영상 자막 및 영상 내 이미지 번역까지 수행하는 시스템 구축을 목표로 하고 있습니다.<br /><br />
      </v-card-text>
    </v-container>

    <v-container v-else-if="language === '영어'" class="body">
      <v-card-title class="font-weight-bold"> DMTLABS's Video Translation System </v-card-title>
      <v-card-text>
        Currently, DMTLABS is working on video translation, <br />
        and as a preliminary step, it is focusing on translation at the voice stage. <br /><br />

        The goal is to establish a system that performs video subtitles and image translation <br />
        in the video after translation in the voice stage. <br /><br />
      </v-card-text>
    </v-container>

    <v-divider />
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
    return {
      mainimg: 'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg',// || require("~/static/mainImg1.jpg"),
    };
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
  },
};
</script>
