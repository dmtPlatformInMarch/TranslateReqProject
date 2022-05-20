<template>
  <div class="main__template">
    <!--메인 헤드라인-->
    <div ref="box" class="scroll__box">

      <div class="scroll__item">
        <v-img :src="mainimg" height="100vh">
          <div class="scroll__item__textbox">
            <div class="scroll__item__title">
              DMTLABS
            </div>
            <div class="scroll__item__subtitle">
              <h4 v-if="language === '한국어'">
                DMTLABS는 다국적 번역 서비스를 제공합니다.
              </h4>
              <h4 v-else-if="language === '영어'">
                DMTLABS provides multinational translation services.
              </h4>
            </div>
          </div>
        </v-img>
      </div>

      <div class="scroll__item">
        <v-img :src="textimg" height="100vh">
          <div class="scroll__item__textbox">
            <div v-if="language === '한국어'" class="scroll__item__title">
              텍스트 번역
            </div>
            <div v-else-if="language === '영어'" class="scroll__item__title">
              Text Translation
            </div>
            <div class="scroll__item__subtitle">
              <h4 v-if="language === '한국어'">
                DMTLABS에서 제공하는 텍스트 파일 다국어 번역 서비스를
                경험해보세요.
              </h4>
              <h4 v-else-if="language === '영어'">
                Experience the text file multilingual translation service
                provided by DMTLABS.
              </h4>
            </div>
          </div>
        </v-img>
      </div>

      <div class="scroll__item">
        <v-img :src="videoimg" height="100vh">
          <div class="scroll__item__textbox">
            <div v-if="language === '한국어'" class="scroll__item__title">
              영상 번역
            </div>
            <div v-else-if="language === '영어'" class="scroll__item__title">
              Video Translation
            </div>
            <div class="scroll__item__subtitle">
              <h4 v-if="language === '한국어'">
                DMTLABS에서 제공하는 영상 자막 다국어 번역 서비스를
                  경험해보세요.
              </h4>
              <h4 v-else-if="language === '영어'">
                Experience the video caption multilingual translation service
                  provided by DMTLABS.
              </h4>
            </div>
          </div>
        </v-img>
      </div>

      <div class="scroll__item">
        <v-img :src="voiceimg" height="100vh">
          <div class="scroll__item__textbox">
            <div v-if="language === '한국어'" class="scroll__item__title">
              음성 번역
            </div>
            <div v-else-if="language === '영어'" class="scroll__item__title">
              Speech Translation
            </div>
            <div class="scroll__item__subtitle">
              <h4 v-if="language === '한국어'">
                DMTLABS에서 제공하는 다국적 음성 더빙 서비스를 경험해보세요.
              </h4>
              <h4 v-else-if="language === '영어'">
                Experience the multinational voice dubbing service provided by
                DMTLABS.
              </h4>
            </div>
          </div>
        </v-img>
      </div>

    </div>
    <!--서비스 소개>
    <v-container class="text-center">
      <v-container>
        <div v-if="language === '한국어'" class="text-h2 font-weight-bold">
          서비스
        </div>
        <div v-else-if="language === '영어'" class="text-h2 font-weight-bold">
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
              <div v-if="language === '한국어'" class="d-flex flex-column text-left">
                <v-card-title class="text-h4 font-weight-bold">
                  텍스트 번역
                </v-card-title>
                <v-card-text>
                  DMTLABS에서 제공하는 텍스트 파일 다국어 번역 서비스를
                  경험해보세요.
                </v-card-text>
              </div>
              <div v-else-if="language === '영어'" class="d-flex flex-column text-left">
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
              <div v-if="language === '한국어'" class="d-flex flex-column text-right">
                <v-card-title class="text-h4 font-weight-bold">
                  <v-spacer />영상 번역
                </v-card-title>
                <v-card-text>
                  DMTLABS에서 제공하는 영상 자막 다국어 번역 서비스를
                  경험해보세요.
                </v-card-text>
              </div>
              <div v-else-if="language === '영어'" class="d-flex flex-column text-right">
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
              <div v-if="language === '한국어'" class="d-flex flex-column text-left">
                <v-card-title class="text-h4 font-weight-bold">
                  음성 번역
                </v-card-title>
                <v-card-text>
                  DMTLABS에서 제공하는 다국적 음성 더빙 서비스를 경험해보세요.
                </v-card-text>
              </div>
              <div v-else-if="language === '영어'" class="d-flex flex-column text-left">
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
    </v-container-->
  </div>
</template>

<style scoped>
.main__template {
  overflow: hidden;
  height: 100%;
}
.main__template * {
  touch-action: none;
}
.scroll__box {
  position: relative;
  overflow: hidden;
  transition: 1s cubic-bezier(0.5, 0, 0.5, 1);
}
.scroll__item {
  position: relative;
  height: 100vh;
  overflow: hidden;
  cursor: default;
}
.scroll__item__textbox {
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.scroll__item__title {
  font-size: 10rem;
  font-weight: lighter;
  color: white;
}
.scroll__item__subtitle {
  font-size: 1.5rem;
  color: white;
}
</style>

<script>
export default {
  layout: "Default",
  data() {
    return {
      mainimg:  'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg',// || require("~/static/mainImg1.jpg"),
      textimg:  'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg',// || require("~/static/text.jpg"),
      videoimg: 'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg',// || require("~/static/video.jpg"),
      voiceimg: 'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg', //|| require("~/static/voice.jpg"),
      sections: 4,
      scdir: '',
      swdir: '',
      hold: false,
    };
  },
  mounted() {
    const box = this.$refs.box;
    box.style.transform = 'translateY(0)';
    box.addEventListener('wheel', this.handleScroll);
    box.addEventListener('wheel', this.scrollY);
    this.swipe(box);
  },
  beforeDestroy() {
    const box = this.$refs.box; 
    box.removeEventListener('wheel', this.scrollY);
    box.removeEventListener('wheel', this.handleScroll);
  },
  computed: {
    language() {
      return this.$store.state.manager.language;
    },
  },
  methods: {
    handleScroll(e) {
      if (e.deltaY < 0) {
        this.scdir = 'down';
      }
      if (e.deltaY > 0) {
        this.scdir = 'up';
      }
      e.preventDefault();
      e.stopPropagation();
    },
    scrollY() {
      var slength; 
      var plength;
      var pan = this.$refs.box;
      var step = 100;
      var vh = window.innerHeight / 100;
      var vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
      plength = parseInt(pan.offsetHeight / vh);
      plength = plength || parseInt(pan.offsetHeight / vmin);
      slength = parseInt(pan.style.transform.replace('translateY(',''));
      console.log(pan);
      if (this.scdir === 'up' && Math.abs(slength) < (plength - plength / this.sections)) {
        slength = slength - step;
      } else if (this.scdir === 'down' && slength < 0) {
        slength = slength + step;
      } else if (this.scdir === 'top') {
        slength = 0;
      }
      
      if (this.hold === false) {
        this.hold = true;
        pan.style.transform = 'translateY(' + slength + 'vh)';
        console.log(pan.style.transform);
        setTimeout(() => {
          this.hold = false;
        }, 1000);
      }
    },
    swipe() {
      var sX;
      var sY;
      var dX;
      var dY;
      var threshold = 100;
      var slack = 50;
      var alT = 500;
      var elT;
      var stT;
      var pan = this.$refs.box;
      pan.addEventListener('touchstart', function (e) {
        var tchs = e.changedTouches[0];
        this.swdir = 'none';
        sX = tchs.pageX;
        sY = tchs.pageY;
        stT = new Date().getTime();
      }, false);

      pan.addEventListener('touchend', function (e) {
        var tchs = e.changedTouches[0];
        dX = tchs.pageX - sX;
        dY = tchs.pageY - sY;
        elT = new Date().getTime() - stT;
        if (elT <= alT) {
          if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
            this.swdir = (dX < 0) ? 'left' : 'right';
          } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
            this.swdir = (dY < 0) ? 'up' : 'down';
          }

          if (pan.id === 'box') {
            if (this.swdir === 'up') {
              this.scdir = this.swdir;
              scrollY(pan);
            } else if (this.swdir === 'down' && pan.style.transform != 'translateY(0)') {
              this.scdir = this.swdir;
              scrollY(pan);
            }
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }, false);
    }
  },
};
</script>
