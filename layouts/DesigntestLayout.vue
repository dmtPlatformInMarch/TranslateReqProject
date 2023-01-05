<template>
    <v-app app>
        <client-only>
            <default-toolbar />
        </client-only>

        <div>
            <nuxt />
        </div>
    </v-app>
</template>

<style scoped>

</style>

<script>
import defaultToolbar from "../components/defaultToolbar.vue";
import SnackBar from "~/components/SnackBar";

export default {
    name: 'DesigntestLayout',
    components: {
        defaultToolbar,
        SnackBar
    },
    data() {
        return {

        }
    },
}
</script>
