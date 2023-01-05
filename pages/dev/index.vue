<template>
    <v-container class="d-flex flex-column align-center page">
        <div class="d-flex flex-column align-center justify-center text-center page__section">
            <v-spacer />
            <h1>
                DMTLABS
                <br/>
                서비스 가이드
            </h1>
            <p>DMTLABS에서 제공하는 서비스의 쉬운 사용을 위해 제공되는 설명입니다.</p>
            <v-spacer />
        </div>
    </v-container>
</template>

<style scoped>
h1 {
    font-size: 48px !important;
}
.page {
    width: 85vw;
}
.page__section {
    width: 60vw;
    height: 50vh;
    background-image:   linear-gradient(rgba(255, 255, 255, 0.95),rgba(255, 255, 255, 0.95)),
                        url("../../assets/logo/logo.png");
    background-position: center;

}
@media screen and (min-width: 3440px) {
    .container {
        max-width: 3440px;
    }
}
</style>

<script>
export default {
    layout: 'DevLayout',
    data() {
        return {
            
        }
    },
}
</script>
