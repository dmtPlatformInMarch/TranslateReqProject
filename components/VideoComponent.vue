<template>
    <div class="video__box">
        <video class="video__player" controls preload="auto" :src="url" crossorigin="use-credentials">
            <track kind="subtitles" :src="videoTrack" srclang="en" label="자막">
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
        this.$nuxt.$on('newTracks', async () => {
            this.videoTrack = "/";
            setTimeout(() => {
                this.videoTrack = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(this.$store.state.videoes.fileName)}.vtt`
        }, 500);
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
