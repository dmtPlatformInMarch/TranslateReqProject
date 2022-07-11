<template>
    <v-app>
        <v-app-bar class="toolbar" elevation="0" color="#013183" dark absolute>
            <v-app-bar-title>
                비디오 데모 페이지
            </v-app-bar-title>
        </v-app-bar>
        <div class="main__wrapper">
            <v-navigation-drawer class="nav__Style" permanent>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            작업 파일
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider />
                
                <div v-if="list.length != 0">
                    <v-list v-for="(item, index) in list" :key="index" class="list__group">
                        <v-btn class="btn__list" color="#2172FF" dark block @click="selectVideo(sliceSlash(item.Key))">
                            {{ sliceSlash(item.Key) }}
                        </v-btn>
                    </v-list>
                </div>

                <div v-else class="empty__div">
                    비어 있음
                </div>
            </v-navigation-drawer>

            <v-container class="main overflow-y-auto">
                <nuxt />
            </v-container>
        </div>
        <snack-bar />
    </v-app>
</template>

<style scoped>
.toolbar {
    height: 64px !important;
}
.main__wrapper {
    display: flex;
    position: absolute;
    width: 100%;
    height: calc(100% - 64px);
    margin-top: 64px;
}
.main {
    display: block;
    height: 100%;
}
.nav__Style {
    width: 20% !important;
    border-right: 3px solid grey;
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
</style>

<script>
import SnackBar from '~/components/SnackBar'

export default {
    name: 'VideoLayout',
    components: {
        SnackBar,
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
        sliceSlash(str) {
            if (this.list.length === 0) return '';
            else return str.substring(str.lastIndexOf('/') + 1);
        },
        selectVideo(filename) {
            this.$nuxt.$emit('onVideoEvent', filename);
        },
    }
}
</script>
