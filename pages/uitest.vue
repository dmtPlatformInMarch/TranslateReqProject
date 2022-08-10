<template class="main">
    <div class="wrapper">
        <div class="videobox">
            <video video ref="player" class="video__player" controls preload="auto" :src="url" crossorigin="use-credentials">
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
        <div class="btn__group">
            <v-btn block @click="viewTrack">
                자막 보이기
            </v-btn>
            <v-btn block @click="viewCreateTrack">
                자막 만들고 보이기
            </v-btn>
            <v-btn block @click="isTrack">
                자막 있는지 확인
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
}
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.videobox {
    width: 640px;
}
.btn__group {
    width: 640px;
    height: 10%;
    display: flex;
    flex-direction: column;
}
</style>

<script>
export default {
    layout: 'TestLayout',
    components: {
        
    },
    data() {
        return{
            url: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/360p_2%EB%B6%8416%EC%B4%88.mp4",
            url_track: "https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/360p_2%EB%B6%8416%EC%B4%88.vtt",
            video: ""
        }     
    },
    mounted() {
        this.video = document.querySelector('video');
    },
    methods: {
        viewTrack() {
            this.video.textTracks[0].mode = this.video.textTracks[0].mode === 'showing' ? 'disabled' : 'showing';
            console.log(this.video.textTracks);
        },
        viewCreateTrack() {
            let track = document.createElement("track");
            track.kind = "subtitles";
            track.srclang = "en";
            track.label = "새로 만든 자막";
            track.src = this.url_track;
            this.video.appendChild(track);
            this.video.textTracks[0].mode = this.video.textTracks[0].mode === 'showing' ? 'disabled' : 'showing';
            console.log(this.video.textTracks[0])
        },
        isTrack() {
            if (this.video.textTracks.length === 0) {
                console.log("비어있음");
            } else {
                console.log("여기서 처리");
            }
        }
    },
}
</script>