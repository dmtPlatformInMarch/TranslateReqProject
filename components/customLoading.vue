<template class ="loading__template">
    <div class="text-center" v-bind:class="{ hind: loading }">
    <v-progress-circular class="loadingbar" :rotate="360" :size="200" :width="20" :value=this.percentView>
      <p class="timeValue">{{ this.percentView }}<span style="font-size : 2rem">%</span></p>
    </v-progress-circular>
  </div>
</template>

<style scoped>
.snackbar__template{
    position: absolute !important;
}

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
      loading : true,
      estimateTime : 0,
      percentView : 0,
      trackLength : 0,
    }
  },


  created(){
    console.log("로딩바 생성");
     this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'manager/openLoadingBar') {
                this.loading = this.$store.state.manager.viewLoadingBar;
                this.trackLength = this.$store.state.manager.trackLength/10;
                this.timeToPercent();
            } 
            if (mutation.type === 'manager/closeLoadingBar') {
                this.loading = true;
            }
    })
  },


  methods : {
      // 적정 % 계산
     timeToPercent : function(){
        // 값 초기화
        this.percentView = 0;
        // 계산속도 파라미터로 변경
        const parameter = 15;
        let transByPercent = Math.ceil(100/(this.trackLength/parameter));
        
        var timer=setInterval(()=>{    
            if(this.percentView >= 90){
                clearTimeout(timer)
                this.percentView = 99;                
            }else{
                this.percentView += transByPercent;
                console.log("percentVlew = " + this.percentView);
            }
        },1000)
    }
        },
  
    }


</script>
