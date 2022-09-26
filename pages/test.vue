<template class="main">
    <div class="wrapper">
        <div class="action__box">
            <h1>Action Section</h1>
            <v-divider />
            <div class="section">
                <video ref="originalplayer" :src="videoURL" controls preload="auto" crossorigin="anonymous">
                </video>

                <div class="google__ex">
                    <v-btn class="google__ex__btn" color="primary" @click="googleTest">
                        구글 API 테스트
                    </v-btn>
                    <v-btn class="google__ex__btn" color="success" @click="blobToServer">
                        Blob을 백엔드로 보내기 테스트
                    </v-btn>
                </div>
            </div>
        </div>

        <div class="result__box">
            <h1>Result Section</h1>
            <v-divider />
            <div class="section">
                <audio ref="resultplayer" controls>
                </audio>
                <div class="google__ex">
                    {{ testResult }}
                </div>
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

.google__ex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 25px;
}
.google__ex__btn {
    margin: 0 15px;
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
            testResult: "테스트 전",
            fps: 0,
            stream: null,
            recordedChunks: [],
            mediaRecorder: {},
            recognition: {},
            recoging: false,
            videoURL: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/360p_2%EB%B6%8416%EC%B4%88.mp4",
        }
    },
    async mounted() {
        this.$refs.originalplayer.addEventListener('play', (event) => {
            this.recordStart();
        });
        this.$refs.originalplayer.addEventListener('pause', () => {
            this.recordStop();
        });
    },
    methods: {
        async recordStart() {
            this.stream = await this.$refs.originalplayer.captureStream(this.fps);
            const audioTracks = this.stream.getAudioTracks();
            
            this.mediaRecorder = new MediaRecorder(new MediaStream(audioTracks), { mimeType: "audio/webm;codecs=opus", audioBitsPerSecond: "48000"});
            
            this.mediaRecorder.ondataavailable = async (event) => {
                if (event?.data.size > 0) {
                    await this.recordedChunks.push(event.data);
                    const blob = new Blob(this.recordedChunks, { type: "audio/webm" });
                    const responseText = await this.$store.dispatch('test/blobSending', blob);
                    console.log("인식결과 : ", responseText);
                } else {
                    console.log("본 객체 : ", event);
                    console.log("객체 데이터 : ", event.data);
                }
            };

            this.mediaRecorder.onstop = (event) => {
                window.URL.revokeObjectURL(blobURL);
                const blob = new Blob(this.recordedChunks, { type: "audio/webm" });
                
                // console.log("결과 Blob : ", blob);
                const blobURL = window.URL.createObjectURL(blob);
                this.$refs.resultplayer.src = blobURL;
                this.$refs.resultplayer.load();
                this.$refs.resultplayer.play();
            }
            console.log("Record Start");
            this.mediaRecorder.start(500); // ms 단위로 blob 객체 생성
        },
        recordStop() {
            console.log("Record Stop");
            this.mediaRecorder.stop();
        },
        // Blob으로 뽑기 성공.
        async googleTest() {
            try {
                const response = await this.$store.dispatch('test/googleTest');
                if (response != null) this.testResult = "테스트 성공";
                else this.testResult = "테스트 실패";
            } catch (err) {
                console.log(err);
            }
        },
        async blobToServer() {
            try {
                const blob = new Blob(this.recordedChunks, { type: "audio/webm" });
                const responseText = await this.$store.dispatch('test/blobSending', blob);
                console.log("인식결과 : ", responseText);
            } catch (err) {
                console.log(err);
            }
        },
    },
    computed: {
        
    }
};
</script>