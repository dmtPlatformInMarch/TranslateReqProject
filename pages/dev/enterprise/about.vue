<template>
    <v-container class="d-flex flex-column align-center page">
        <div class="d-flex flex-column align-center justify-center text-center page__section">
            <h1>
                Enterprise
                <br />
                Service
            </h1>
            <p>본 항목은 다양한 단체/기업의 상업적 이용을 위한 안내 페이지입니다.</p>
        </div>
    </v-container>
</template>

<style scoped>
.page {
    width: 85vw;
}
.page__section {
    width: 60vw;
    height: 50vh;
}
@media screen and (min-width: 3440px) {
    .container {
        max-width: 3440px;
    }
}
</style>

<script>
export default {
    layout: "DevLayout",
    data() {
        return {

        }
    },
}
</script>
