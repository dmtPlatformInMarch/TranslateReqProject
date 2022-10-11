<template class="">
    <v-app app>
        <v-app-bar class="main__toolbar" elevation="0" color="transparent" width="100vw">
            <v-toolbar-title>
                <nuxt-link to="/dev">
                    <v-avatar height="80px" width="200px" tile>
                        <img :src="logo" />
                    </v-avatar>
                </nuxt-link>
            </v-toolbar-title>
        </v-app-bar>

        <nuxt class="main__page" />
    </v-app>
</template>

<style scoped>
.main__toolbar {
    position: absolute;
    display: flex;
    align-items: center;
    height: 5vh !important;
}
.main__page {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5vh;
}
</style>

<script>
export default {
    name: 'DevLayout',
    data() {
        return {
            logo: 'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/logo3.png',
        }
    },
}
</script>
