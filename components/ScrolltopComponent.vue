<template>
    <v-btn class="btn__top" fab dark color="success" @click="scrollTop" v-show="visible">
        <v-icon>
            mdi-triangle
        </v-icon>
    </v-btn>
</template>

<style scoped>
.btn__top {
    position: fixed;
    width: 64px;
    height: 64px;
    bottom: 32px;
    right: 32px;
    cursor: pointer;
}
</style>

<script>
export default {
    data() {
        return {
            visible: false,
        }
    },
    beforeMount() {
        window.scrollTo(0,0);
        window.addEventListener('wheel', this.scrollListener);
    },
    beforeDestroy() {
        window.removeEventListener('wheel', this.scrollListener);
    },
    methods: {
        scrollListener(e) {
            this.visible = e.deltaY > 1;
        },
        scrollTop: function () {
            this.$nuxt.$emit('onScrollTop');
        },
    },
    
}
</script>
