<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>
                <h1>test page</h1>
            </v-toolbar-title>
        </v-toolbar>
        <div class="page__box">
            <nuxt />
        </div>
    </v-app>
</template>

<style scoped>
.page__box {
    display: flex;
    align-items: center;
    justify-content: center;
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
