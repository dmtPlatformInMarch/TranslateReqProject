<template class="overflow-y-auto">
  <div>
    <!--메인 헤드라인-->
    <div>
      <v-parallax :src="mainimg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h1 font-weight-thin mb-4">DMTLABS</h1>
            <h4 class="subheading" v-if="language === '한국어'">
              DMTLABS는 다국적 번역 서비스를 제공합니다.
            </h4>
            <h4 class="subheading" v-else-if="language === '영어'">
              DMTLABS provides multinational translation services.
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>

    <!--서비스 소개-->
    <v-container class="text-center">
      <v-container>
        <div class="text-h2 font-weight-bold" v-if="language === '한국어'">
          서비스
        </div>
        <div class="text-h2 font-weight-bold" v-if="language === '영어'">
          Service
        </div>
      </v-container>
      <v-row>
        <v-col cols="2" />
        <v-col cols="6">
          <v-card color="blue-grey lighten-4">
            <div class="d-flex flex-no-wrap align-center">
              <v-avatar class="ma-3" size="250" tile>
                <v-img :src="textimg" />
              </v-avatar>
              <div
                class="d-flex flex-column text-left"
                v-if="language === '한국어'"
              >
                <v-card-title class="text-h4 font-weight-bold">
                  텍스트 번역
                </v-card-title>
                <v-card-text>
                  DMTLABS에서 제공하는 텍스트 파일 다국어 번역 서비스를
                  경험해보세요.
                </v-card-text>
              </div>
              <div
                class="d-flex flex-column text-left"
                v-else-if="language === '영어'"
              >
                <v-card-title class="text-h4 font-weight-bold">
                  Text Translation
                </v-card-title>
                <v-card-text>
                  Experience the text file multilingual translation service
                  provided by DMTLABS.
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="4" />
        <v-col cols="4" />
        <v-col cols="6">
          <v-card color="blue-grey lighten-4">
            <div class="d-flex flex-no-wrap align-center justify-end">
              <div
                class="d-flex flex-column text-right"
                v-if="language === '한국어'"
              >
                <v-card-title class="text-h4 font-weight-bold">
                  <v-spacer />영상 번역
                </v-card-title>
                <v-card-text>
                  DMTLABS에서 제공하는 영상 자막 다국어 번역 서비스를
                  경험해보세요.
                </v-card-text>
              </div>
              <div
                class="d-flex flex-column text-right"
                v-else-if="language === '영어'"
              >
                <v-card-title class="text-h4 font-weight-bold">
                  <v-spacer />Video Translation
                </v-card-title>
                <v-card-text>
                  Experience the video caption multilingual translation service
                  provided by DMTLABS.
                </v-card-text>
              </div>
              <v-avatar class="ma-3" size="250" tile>
                <v-img :src="videoimg" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="2" />
        <v-col cols="2" />
        <v-col cols="6">
          <v-card color="blue-grey lighten-4">
            <div class="d-flex flex-no-wrap align-center justify-start">
              <v-avatar class="ma-3" size="250" tile>
                <v-img :src="voiceimg" />
              </v-avatar>
              <div
                class="d-flex flex-column text-left"
                v-if="language === '한국어'"
              >
                <v-card-title class="text-h4 font-weight-bold">
                  음성 번역
                </v-card-title>
                <v-card-text>
                  DMTLABS에서 제공하는 다국적 음성 더빙 서비스를 경험해보세요.
                </v-card-text>
              </div>
              <div
                class="d-flex flex-column text-left"
                v-else-if="language === '영어'"
              >
                <v-card-title class="text-h4 font-weight-bold">
                  Speech Translation
                </v-card-title>
                <v-card-text>
                  Experience the multinational voice dubbing service provided by
                  DMTLABS.
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="4" />
      </v-row>
    </v-container>

    <!--기타 설명-->
    <!--div
      class="text-center"
      style="background: purple; width: 100%; height: 50vh"
    >
      기타 컨테이너
    </div-->
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  layout: "default",
  data() {
    return {
      mainimg: require("~/static/mainImg1.jpg"),
      textimg: require("~/static/text.jpg"),
      videoimg: require("~/static/video.jpg"),
      voiceimg: require("~/static/voice.jpg"),
    };
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
  },
};
</script>
