<template>
    <div class="video__box">
        <video class="video__player" controls preload="auto" :src="url" crossorigin="use-credentials">
            <track kind="subtitles" :src="temp" srclang="en" label="영어" default>
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
        }
    },
    computed: {
        temp() {
            return `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(this.$store.state.videoes.fileName)}.vtt`;
        }
    },
    mounted() {
        this.video = document.querySelector('video');
        //console.log("비디오 : ", this.video);
        this.tracks = this.video.textTracks;
        //console.log("트랙 : ", this.tracks);
    },
    methods: {

    }
}
</script>
