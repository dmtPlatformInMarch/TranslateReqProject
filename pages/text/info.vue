<template>
  <v-container class="full-height">
    <!--메인 헤드라인-->
    <div>
      <v-parallax :src="mainimg" height="300">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="main__title text-h1 font-weight-thin mb-4"> DMTLABS </h1>
            <h4 v-if="language === '한국어'" class="subheading">
              DMTLABS의 텍스트 번역 시스템
            </h4>
            <h4 v-else-if="language === '영어'" class="subheading">
              DMTLABS Text Translation System
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>

    <v-container v-if="language === '한국어'" class="body">
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

    <v-container v-else-if="language === '영어'" class="body">
      <v-card-title class="font-weight-bold"> DMTLABS's Text Translation System </v-card-title>
      <v-card-text>
        DMTLABS operates a translation and translation request service for documents <br />
        through a multilingual translation system built by collecting language and data. <br /><br />

        Especially for Korean-Chinese translation, we can expect high-accuracy translation<br />
        with a translation system based on DB construction in specialized fields.<br /><br />
      </v-card-text>

      <v-divider />

      <v-card-title class="font-weight-bold"> DMTLABS's Request Platform </v-card-title>
      <v-card-text>
        Currently, we are trying to provide inexpensive and accurate translation requests that are different from other platforms through the DMTTRAN platform,<br />
        and we are offering a low price and AI translation system as a difference.<br /><br />

        We will provide more public translation services through the platform, <br />
        especially for young people who do not enjoy translation services.<br /><br />

        In addition, we are developing not only the text translation<br />
        but also the process of translating text in image.<br /><br />
      </v-card-text>
    </v-container>
  </v-container>
</template>

<style scoped>
.full-height {
  height: 100%;
}
.body {
  font-family: 'MinSans-Medium', sans-serif !important;
}

@media screen and (max-width: 500px) {
  .main__title {
    font-size: 3.5rem !important;
  }
}

</style>

<script>
export default {
  layout: 'TextLayout',
  data() {
    return {
      mainimg: 'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg',// || require("~/static/mainImg1.jpg"),
    };
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
  },
};
</script>
