<template>
  <div class="text-center" v-bind:class="{ hind: loadingView }">
    <v-progress-circular class="loadingbar" :rotate="360" :size="200" :width="20" :value=value>
      <p class="timeValue">{{ value }}<span style="font-size : 2rem">%</span></p>
    </v-progress-circular>
  </div>
</template>

<style scoped>
.text-center {
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 9999px;
  background-color: rgba(0, 0, 0, 0.1);
}

.timeValue {
  font-size: 3rem;
  margin : auto 0;
}

.hind {
  display: none;
}

.loadingbar {
  animation: color-change 2.5s infinite ease-in-out;
}


@keyframes color-change {
  0% { color: #4FB0C6; }
  20% { color: #4F86C6; }
  40% { color: #6C49B8; }
  60% { color: #9170da; }
  80% { color: #4F86C6; }
  100% { color: #4FB0C6; }
}

</style>

<script>
export default {
  data() {
    return {
      value: 0,
      loadingView: true,
      color : "red"
    }
  },

  created() {
    console.log("로딩바 생성중")
  },

  updated() {
    this.$store.subscribe((mutation, state) => {
      let progressValue = mutation.payload
      if (mutation.type === 'videoes/setFiles') {
        this.value = 100;
        setTimeout(() => {
          this.loadingView = true;
        }, 500)
      }

      if (isNaN(progressValue) === false) {

        if (progressValue > 90) {
          this.value = 90 + this.randomNum();

        } else if (progressValue > 80) {
          this.value = 80 + this.randomNum();

        } else if (progressValue > 70) {
          this.value = 70 + this.randomNum();

        } else {
          this.value = progressValue;
        }
      }
    }
    )
  },

  methods : {
    randomNum : function(){
      let randNum = Math.floor(Math.random()*(8)) + 1;
    return randNum;
}
    }
  }

</script>
