<template>
    <v-app>
       
        <defaultToolbar></defaultToolbar>

        <div class="main__wrapper">
            <v-navigation-drawer class="nav__Style" permanent>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title style="font-size : 2rem;">
                            작업 파일
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider />
                
                <div v-if="list.length != 0">
                    <v-list v-for="(item, index) in list" :key="index" class="list__group">
                        <v-btn class="list__btn" color="#2172FF" dark block @click="selectVideo(sliceSlash(item.Key))">
                            {{ sliceSlash(item.Key) }}
                        </v-btn>
                    </v-list>
                </div>
            </v-navigation-drawer>

            <div class="main">
                <nuxt />
            </div>
        </div>
        <scroll-top />
        <snack-bar />

    </v-app>
</template>

<style scoped>

.toolbar {
    height: 64px !important;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    background-size: cover;
    color : black;
}
.main__wrapper {
    overflow-y: scroll;
    display: flex;
    position: absolute;
    width: 100%;
    top: 64px;
    height: calc(100% - 64px);
    text-align: center;
}
.main {
    display: block;
    width: 100%;
    height: 100%;
    padding-right: 64px;
    padding-left: 64px;
}

.nav__Style {
    width: 20% !important;
}
.list__group {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 25px;
}
.empty__div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 64px);
}
.list__btn {
    width: 100%;
    white-space: normal;
}

</style>

<script>
import SnackBar from '~/components/SnackBar'
import ScrollTop from '~/components/ScrolltopComponent'
import defaultToolbar from "../components/defaultToolbar.vue";


export default {
    name: 'RTtrackLayout',
    components: {
        SnackBar,
        ScrollTop,
        defaultToolbar
        
    },
    data() {
        return {
            
        }
    },
    mounted() {
        this.$store.dispatch('videoes/getFiles');
    },
    computed: {
        list() {
            return this.$store.state.videoes.files;
        },
    },
    methods: {
        home() {
            this.$router.push({ path: '/' });
        },
        sliceSlash(str) {
            if (this.list.length === 0) return '';
            else {
                return str.substring(str.lastIndexOf('/') + 1);
            }
        },
        sliceName(str) {
            if (this.list.length === 0) return '';
            else {
                return str.substring(0, str.lastIndexOf('.'));
            } 
        },
        selectVideo(filename) {
            this.$store.commit('videoes/setFileName', this.sliceName(filename));
            const ext = filename.substring(filename.lastIndexOf('.') + 1);
            this.$store.commit('videoes/setFileExt', ext);
            this.$nuxt.$emit('onTrackVideoEvent', filename);
        },
    }
}
</script>
