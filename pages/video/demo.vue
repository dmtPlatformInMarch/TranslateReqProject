<template>
    <div class="video__box">
        <div>
            <v-file-input label="업로드 영상" @change="onChange($event)" />
        </div>
        <div class="video__player">
            <v-row class="video__player__grid" no-gutters>
                <v-col cols="8" class="video__player__box">
                    <div v-if="this.readToVideo != false" class="video">
                        <video-component :url="this.fileURL" />
                    </div>
                    <div v-else>
                        비어있음
                    </div>
                </v-col>
                <v-col class="video__player__meta">
                        <v-btn color="error" elevation="0" :disabled="!this.readToVideo" @click="onClearFile">
                            <v-icon>
                                mdi-close
                            </v-icon>
                            영상 삭제
                        </v-btn>
                </v-col>
            </v-row>
        </div>
        <div class="video__translator overflow-y-auto">
            <div class="video__translator__title">
                <h1>자막</h1>
            </div>
            <div class="video__translator__content">
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.video__box {
    height: 100%;
}
.video__player {
    width: auto;
    height: 50%;
    border: 1px solid red;
}
.video__player__grid {
    height: 100%;
}
.video__player__box {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    margin: 25px 15px;
}
.video__player__meta {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    margin: 25px 15px;
}
.video__translator {
    display: flex;
    flex-direction: column;
    height: 50%;
    border: 1px solid red;
}
.video__translator__title {
    margin: 15px;
    padding: 0 15px;
}
.video__translator__content {
    width: auto;
    height: 100%;
    margin: 0 15px 15px 15px;
    border: 1px solid red;
}
.video__uploadFile {
    width: 100%;
    padding: 0 50px;
}
.video {
    border: 1px solid blue;
    padding: 25px;
}
</style>

<script>
import VideoComponent from '../../components/VideoComponent.vue';

export default {
    layout: 'VideoLayout',
    components: {
        VideoComponent
    },
    data() {
        return {
            readToVideo: false,
            viewData: '',
        }
    },
    created() {
        this.$nuxt.$on('onVideoEvent', (filename) => {
            this.readToVideo = true;
            this.$store.commit('videoes/setFileURL', `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(filename)}`);
        });
    },
    computed: {
        language() {
            return this.$store.state.manager.language;
        },
        fileURL() {
            return this.$store.state.videoes.fileURL;
        }
    },
    methods: {
        extToContentType(ext) {
            switch(ext) {
                case 'mp4':
                    return 'video/mp4';
                case 'webm':
                    return 'video/webm';
                case 'ogg':
                case 'ogv':
                case 'ogm':
                    return 'video/ogg';
                default:
                    return 'application/oct-stream';
            }
        },
        async onChange(e) {
            const fileFormData = new FormData();
            if (e != null) {
                try {
                    const ext = e.name.substring(e.name.lastIndexOf('.') + 1);
                    fileFormData.append('fileKey', e);
                    const preSignedUrl = await this.$store.dispatch('videoes/signedURL', fileFormData);
                    this.$nuxt.$loading.start();
                    const response = await fetch(
                        new Request(preSignedUrl, {
                            method: "PUT",
                            headers: {
                                'Content-Type': this.extToContentType(ext),
                        },
                            body: e,
                        }),
                    );
                    this.$nuxt.$loading.finish();
                    if (response.status === 200) {
                        this.$store.dispatch('videoes/setURL').then(
                            () => { 
                                this.readToVideo = true;
                                this.$store.dispatch('videoes/getFiles');
                            }
                        );
                        console.log("Upload Success");
                    } else {
                        // onError!!
                        console.log("Upload Error");
                        return;
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                console.log("e is null");
            }
        },
        onClearFile() {
            this.$store.dispatch('videoes/deleteFile');
            this.$store.commit('videoes/setFileURL', '');
            this.readToVideo = false;
        }
    }
}
</script>