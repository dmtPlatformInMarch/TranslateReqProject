<template class="main">
    <div class="wrapper">
        <div class="action__box">
            <h1>Action Section</h1>
            <v-divider />
            <div class="section">
                <video ref="originalplayer" :src="videoURL" controls preload="auto" muted crossorigin="anonymous">
                </video>
            </div>
        </div>

        <div class="result__box">
            <h1>Result Section</h1>
            <v-divider />
            <div class="section">
                <video ref="resultplayer" autoplay muted>
                </video>
            </div>
        </div>
    </div>    
</template>

<style scoped>
.main {
    display: flex;
}
.wrapper {
    position: absolute;
    top: 64px;
    overflow: auto;
    width: 100%;
    height: calc(100% - 64px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.action__box {
    width: 100%;
    height: 50%;
    border: 1px solid grey;
}
.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: calc(100% - 48px);
}
.result__box {
    width: 100%;
    height: 50%;
    border: 1px solid grey;
}
</style>

<script>
import axios from "axios";
// MediaStream 기술을 통한 실시간 자막 번역 시스템 가능????
// 첫째로, 음성 인식을 단위별로 처리하거나, 스트림으로 처리가 가능해야 함.
// 둘째로, 만약 처리한다고 하더라도 이를 자막으로 입히기 위해선 시간 정보가 필요함.
export default {
    layout: "TestLayout",
    created() {
        
    },
    data() {
        return {
            stream: null,
            videoURL: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/360p_2%EB%B6%8416%EC%B4%88.mp4",
        }
    },
    mounted() {
        this.$refs.originalplayer.addEventListener('canplay', () => {
            const fps = 0;
            if (this.$refs.originalplayer.captureStream) {
                this.stream = this.$refs.originalplayer.captureStream(fps);
            } else if (this.$refs.originalplayer.mozCaptureStream) {
                this.stream = this.$refs.originalplayer.mozCaptureStream(fps);
            } else {
                console.error('Stream capture is not supported');
            }
            this.$refs.resultplayer.srcObject = this.stream;
        });
    },
    methods: {
        
    },
    computed: {
        
    }
};
</script>