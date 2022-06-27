<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>
                <h1>테스트 페이지</h1>
            </v-toolbar-title>
        </v-toolbar>
        <div class="page__box">
            <nuxt />
        </div>
    </v-app>
</template>

<style scoped>
.page__box {
    width: 100%;
    height: 100%;
}
</style>

<script>
export default {
    name: 'TestLayout',
    data() {
        return {

        }
    }
}
</script>
