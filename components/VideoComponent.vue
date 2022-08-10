<template>
    <div class="video__box">
        <video ref="player" class="video__player" controls preload="auto" :src="url" crossorigin="use-credentials">
        </video>
    </div>
</template>

<style scoped>
.video__box {
    max-width: 920px;
}
.video__player {
    width: 100%;
}
</style>

<script>
export default {
    props: {
        url: {
            type: String,
            default: ""
        },
    },
    data() {
        return {
            video: '',
            tracks: [],
            videoTrack: '',
            reload: false
        }
    },
    created() {
        this.videoTrack = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(this.$store.state.videoes.fileName)}.vtt`;
        this.$nuxt.$on('newTracks', (lang) => {
            // 0.5초 후 변경
            /*this.videoTrack = "/";
            setTimeout(() => {
                this.videoTrack = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(this.$store.state.videoes.fileName)}.vtt`
            }, 500);*/
            let srcCode = "ko";
            if (lang === "영어") {
                srcCode = "ko";
            } else if (lang === "중국어(간체)") {
                srcCode = "zh";
            } else if (lang === "일본어") {
                srcCode = "ja";
            }
            console.log("트랙 길이 : ", this.video.textTracks.length);
            if (this.video.textTracks.length === 0) {
                this.videoTrack = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(this.$store.state.videoes.fileName)}.vtt`
                let track = document.createElement("track");
                track.kind = "subtitles";
                track.srclang = srcCode;
                track.label = lang;
                track.src = this.videoTrack;
                this.video.appendChild(track);
                this.video.textTracks[0].mode = "showing";
            } else {
                let rmTrack = document.querySelector("track");
                rmTrack?.parentNode.removeChild(rmTrack);
                this.videoTrack = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(this.$store.state.videoes.fileName)}.vtt`
                let track = document.createElement("track");
                track.kind = "subtitles";
                track.srclang = srcCode;
                track.label = lang;
                track.src = this.videoTrack;
                this.video.appendChild(track);
                this.video.textTracks[0].mode = "showing";
            }
        });
        this.$nuxt.$on('transTracks', (lang) => {
            let srcCode = "ko";
            if (lang === "영어") {
                srcCode = "ko";
            } else if (lang === "중국어(간체)") {
                srcCode = "zh";
            } else if (lang === "일본어") {
                srcCode = "ja";
            }
            if (this.video.textTracks.length === 0) {
                this.videoTrack = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(this.$store.state.videoes.fileName)}.vtt`
                let track = document.createElement("track");
                track.kind = "subtitles";
                track.srclang = srcCode;
                track.label = lang;
                track.src = this.videoTrack;
                this.video.appendChild(track);
                this.video.textTracks[0].mode = "showing";
            } else {
                let rmTrack = document.querySelector("track");
                rmTrack?.parentNode.removeChild(rmTrack);
                this.videoTrack = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(this.$store.state.videoes.fileName)}.vtt`
                let track = document.createElement("track");
                track.kind = "subtitles";
                track.srclang = srcCode;
                track.label = lang;
                track.src = this.videoTrack;
                this.video.appendChild(track);
                this.video.textTracks[0].mode = "showing";
            }
        });
    },
    mounted() {
        this.video = document.querySelector('video');
        this.tracks = this.video.textTracks;
    },
    methods: {
        
    }
}
</script>
