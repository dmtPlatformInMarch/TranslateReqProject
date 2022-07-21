<template>
  <div class="main__template">
    <div ref="box" class="scroll__box">
      <div class="scroll__item">
        <v-img class="bg1" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 0">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">
                  DMTLABS
                </div>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <div class="scroll__item__subtitle">
                  <h4 v-show="language === '한국어'">
                    DMTLABS는 다국적 번역 서비스를 제공합니다.
                  </h4>
                  <h4 v-show="language === '영어'">
                    DMTLABS provides multinational translation services.
                  </h4>
                </div>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>

      <div class="scroll__item">
        <v-img class="bg2" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 1">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">
                  <div v-show="language === '한국어'">
                    텍스트 번역
                  </div>
                  <div v-show="language === '영어'">
                    Text Translation
                  </div>
                </div>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <div class="scroll__item__subtitle">
                  <h4 v-show="language === '한국어'">
                    DMTLABS에서 제공하는 텍스트 파일 다국어 번역 서비스를
                    경험해보세요.
                  </h4>
                  <h4 v-show="language === '영어'">
                    Experience the text file multilingual translation service
                    provided by DMTLABS.
                  </h4>
                </div>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>

      <div class="scroll__item">
        <v-img class="bg3" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 2">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">
                  <div v-show="language === '한국어'" >
                    영상 번역
                  </div>
                  <div v-show="language === '영어'">
                    Video Translation
                  </div>
                </div>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <div class="scroll__item__subtitle">
                  <h4 v-show="language === '한국어'">
                    DMTLABS에서 제공하는 영상 자막 다국어 번역 서비스를
                      경험해보세요.
                  </h4>
                  <h4 v-show="language === '영어'">
                    Experience the video caption multilingual translation service
                      provided by DMTLABS.
                  </h4>
                </div>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>

      <div class="scroll__item">
        <v-img class="bg4" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 3">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">
                  <div v-show="language === '한국어'" >
                    음성 번역
                  </div>
                  <div v-show="language === '영어'">
                    Speech Translation
                  </div>
                </div>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <div class="scroll__item__subtitle">
                  <h4 v-show="language === '한국어'">
                    DMTLABS에서 제공하는 다국적 음성 더빙 서비스를 경험해보세요.
                  </h4>
                  <h4 v-show="language === '영어'">
                    Experience the multinational voice dubbing service provided by
                    DMTLABS.
                  </h4>
                </div>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>
    </div>
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
.bg1 {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg');
  background-size: cover;
}
.bg2 {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/text.jpg');
  background-size: cover;
}
.bg3 {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/video.jpg');
  background-size: cover;
}
.bg4 {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/voice.jpg');
  background-size: cover;
}

@media screen and (max-width: 900px) {
  .scroll__item__title {
    font-size: 7rem;
    font-weight: lighter;
    color: white;
    padding: 0 5vw;
  }
  .scroll__item__subtitle {
    font-size: 1.2rem;
    color: white;
    padding: 0 10vw;
  }
}
@media screen and (max-width: 500px) {
  .scroll__item__title {
    font-size: 4rem;
    font-weight: lighter;
    color: white;
    padding: 0 5vw;
  }
  .scroll__item__subtitle {
    font-size: 1rem;
    color: white;
    padding: 0 10vw;
  }
}
@media screen and (max-width: 361px) {
  .scroll__item__title {
    font-size: 3rem;
    font-weight: lighter;
    color: white;
    padding: 0 5vw;
  }
  .scroll__item__subtitle {
    font-size: 0.8rem;
    color: white;
    padding: 0 10vw;
  }
}
</style>

<script>
import gsap from "gsap";

export default {
  layout: "Default",
  data() {
    return {
      sections: 4,
      scdir: '',
      swdir: '',
      hold: false,
      sX: 0,
      sY: 0,
      stT: 0,
      dX: 0,
      dY: 0,
      elT: 0,
      alT: 500,
      threshold: 100,
      slack: 50,
      lookup: 0,
  }},
  mounted() {
    const box = this.$refs.box;
    box.style.transform = 'translateY(0)';
    box.addEventListener('wheel', this.handleScroll);
    box.addEventListener('wheel', this.scrollY);
    box.addEventListener('touchstart', this.swipeStart, false);
    box.addEventListener('touchend', this.swipeEnd, false);
  },
  beforeDestroy() {
    const box = this.$refs.box; 
    box.removeEventListener('wheel', this.scrollY);
    box.removeEventListener('wheel', this.handleScroll);
    box.removeEventListener('touchstart', this.swipeStart);
    box.removeEventListener('touchend', this.swipeEnd);
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
      if (this.scdir === 'up' && Math.abs(slength) < (plength - plength / this.sections)) {
        slength = slength - step;
      } else if (this.scdir === 'down' && slength < 0) {
        slength = slength + step;
      } else if (this.scdir === 'top') {
        slength = 0;
      }
      
      if (this.hold === false) {
        this.hold = true;
        if (this.scdir === 'up') {
          if (this.lookup < this.sections - 1) this.lookup++;
        }
        else if (this.scdir === 'down') {
          if (this.lookup > 0) this.lookup--;
        }
        pan.style.transform = 'translateY(' + slength + 'vh)';
        setTimeout(() => {
          this.hold = false;
        }, 1000);
      }
    },
    swipeStart(e) {
      var tchs = e.changedTouches[0];
      this.swdir = 'none';
      this.sX = tchs.pageX;
      this.sY = tchs.pageY;
      this.stT = new Date().getTime();
    },
    swipeEnd(e) {
      var pan = this.$refs.box;
      var tchs = e.changedTouches[0];
      this.dX = tchs.pageX - this.sX;
      this.dY = tchs.pageY - this.sY;
      this.elT = new Date().getTime() - this.stT;
      if (this.elT <= this.alT) {
        if (Math.abs(this.dX) >= this.threshold && Math.abs(this.dY) <= this.slack) {
          this.swdir = (this.dX < 0) ? 'left' : 'right';
        } else if (Math.abs(this.dY) >= this.threshold && Math.abs(this.dX) <= this.slack) {
          this.swdir = (this.dY < 0) ? 'up' : 'down';
        }

        if (this.swdir === 'up') {
          this.scdir = this.swdir;
          this.scrollY(pan);
        } else if (this.swdir === 'down') {
          this.scdir = this.swdir;
          this.scrollY(pan);
        }
        e.preventDefault();
        e.stopPropagation();
      }
    },
    beforeEnter(el) {
      el.style.position = 'relative';
      el.style.top = '30vh';
      el.style.opacity = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 2,
        opacity: 1,
        top: 0,
        ease: 'power2.out', 
        stagger: 0.2,
        onComplete: done
      });
    },
    subEnter(el, done) {
      gsap.to(el, {
        delay: 0.6,
        duration: 1.4,
        opacity: 1,
        top: 0,
        ease: 'power2.out', 
        stagger: 0.2,
        onComplete: done
      });
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 0.7,
        top: '30vh',
        ease: 'elastic.inOut(2.5, 1)'
      })
      gsap.to(el, {
        duration: 0.2,
        opacity: 0,
        onComplete: done
      });
    },
  },
};
</script>
