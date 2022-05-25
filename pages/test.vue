<template class="main__template">
  <div ref="box" class="scroll__box">

    <div class="scroll__item">
        <v-img class="bg1" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 0">
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <div class="scroll__item__title">페이지1</div>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <div class="scroll__item__subtitle">서브헤더</div>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>

      <div class="scroll__item">
        <v-img class="bg2" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 1" >
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <h1 class="scroll__item__title">페이지2</h1>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <h4 class="scroll__item__subtitle">서브헤더</h4>
              </transition>
            </div>
          </transition>
        </v-img>
      </div>

      <div class="scroll__item">
        <v-img class="bg3" height="100vh">
          <transition @leave="leave">
            <div class="scroll__item__textbox" v-if="lookup === 2" >
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="enter" :css="false">
                <h1 class="scroll__item__title">페이지3</h1>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <h4 class="scroll__item__subtitle">서브헤더</h4>
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
                <h1 class="scroll__item__title">페이지4</h1>
              </transition>
              <transition appear name="slide-fade" @before-enter="beforeEnter" @enter="subEnter" :css="false">
                <h4 class="scroll__item__subtitle">서브헤더</h4>
              </transition>
            </div>
          </transition>
        </v-img>
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
</style>

<script>
import gsap from "gsap";

export default {
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
      lookup: 0,
      show: true,
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
    }
  },
};
</script>
