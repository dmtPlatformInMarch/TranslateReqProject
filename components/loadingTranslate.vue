<template>
  <div class="text-center" v-bind:class="{ hind: loadingView }">
    <!-- 로딩바 구현 -->
    <v-progress-circular class="loadingbar" :rotate="360" :size="200" :width="20" :value=this.percentView>
      <p class="timeValue">{{ this.percentView }}<span style="font-size : 2rem">%</span></p>
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
      loadingView: false,
      color : "red",
      estimateTime : 0,
      percentView : 0,
    }
  },

  props : {
    timeLine : Array,
  },

  created(){
    console.log("로딩페이지 생성");
    this.calculateTime()
    
  },

    mounted(){
        this.timeToPercent()
},

  methods : {
    // 포맷 변경 : 시간 -> 문자 -> 숫자(초단위 절삭)
    calculateTime : function(){
        let orginTime = this.timeLine[this.timeLine.length-1].end

        let timeByStr=orginTime.substring(0,5).split(":")
        let StrByNum = timeByStr.map(item => Number(item))
        for(let i = 0;i<StrByNum.length;i++){
            if(i==0){
                this.estimateTime += StrByNum[i]*60
            }else{
                this.estimateTime += StrByNum[i]
            }
        }
        },
    // 적정 % 계산
    timeToPercent : function(){
        const parameter = 60;
        var tmp = 0;
        var timer=setInterval(()=>{
            let percentSecend = Math.ceil(parameter/this.estimateTime);
            tmp += percentSecend
            if(tmp >= 90){
                clearTimeout(timer)
                this.percentView = 99;                
            }else{
                this.percentView = tmp;
            }
        },1000)
                
    }
    }
  }

</script>
