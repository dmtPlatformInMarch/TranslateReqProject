<template>
<div>
    <nuxt class="none__wrapper" light />
    <snack-bar />
</div>
</template>

<style scoped>
.none__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>

<script>
import SnackBar from '../components/SnackBar.vue'

export default {
    components: {
        SnackBar
    },
    data() {
        return {

        }
    },
}
</script>
