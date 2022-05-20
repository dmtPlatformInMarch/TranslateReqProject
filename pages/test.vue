<template class="main__template">
  <div ref="box" class="scroll__box">

    <div class="scroll__item">
      <v-img :src="mainimg" height="100vh">
        <div class="scroll__item__textbox">
          <div class="scroll__item__title">
            1페이지
          </div>
        </div>
      </v-img>
    </div>

    <div class="scroll__item">
      <v-img :src="mainimg" height="100vh">
        <div class="scroll__item__textbox">
          <div class="scroll__item__title">
            2페이지
          </div>
        </div>
      </v-img>
    </div>

    <div class="scroll__item">
      <v-img :src="mainimg" height="100vh">
        <div class="scroll__item__textbox">
          <div class="scroll__item__title">
            3페이지
          </div>
        </div>
      </v-img>
    </div>

    <div class="scroll__item">
      <v-img :src="mainimg" height="100vh">
        <div class="scroll__item__textbox">
          <div class="scroll__item__title">
            4페이지
          </div>
        </div>
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
</style>

<script>
export default {
  data() {
    return {
      mainimg:  'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/mainImg1.jpg',// || require("~/static/mainImg1.jpg"),
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
      console.log(this.scdir + ":" + slength + ":" + plength + ":" + (plength - plength / this.sections));
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
