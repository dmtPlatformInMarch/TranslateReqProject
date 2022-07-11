<template>
    <div class="video__box">
        <video class="video__player" controls preload="auto" :src="url" />
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
    mounted() {
        this.video = document.querySelector('video');
        console.log("비디오 : ", this.video);
        this.tracks = this.video.textTracks;
        console.log("트랙 : ", this.tracks);
    },
    methods: {

    }
}
</script>
