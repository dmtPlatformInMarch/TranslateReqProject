<template>
    <v-overlay :value="loading" z-index="10000">
        <div class="progress__box">
            <v-progress-linear v-model="percentage" color="cyan" height="25">
                <template v-slot:default="{value}">
                    <strong>{{ Math.ceil(value) }} %</strong>
                </template>
            </v-progress-linear>
        </div>
    </v-overlay>
</template>

<style scoped>
::v-deep .v-overlay__content {
    width: 100% !important;
}
.progress__box {
    width: 100%;
}
</style>

<script>
export default {
    
    data() {
        return {
            loading: false,
        }
    },
    computed: {
        percentage() {
            if (this.$store.state.manager.loading >= 100) {
                this.loading = false;
                this.$store.commit('manager/setUploadLoading', 0);
            }
            return this.$store.state.manager.loading;
        }
    },
    created() {
        this.$store.subscribe((mutation, state) => {
            if (mutation.type === 'manager/startLoading') {
                this.loading = true;
            } 
            if (mutation.type === 'manager/endLoading') {
                this.loading = false;
            }
        });
    },
    methods: {
        start() {

        },
        finish() {

        }
    }
}
</script>
