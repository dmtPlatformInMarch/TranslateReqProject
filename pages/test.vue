<template class="main">
    <div class="wrapper">
        <div class="action__box">
            <h1>Action Section</h1>
            <v-divider />
            <div class="section">
                이곳에서 액션을 수행
            </div>
        </div>

        <div class="result__box">
            <h1>Result Section</h1>
            <v-divider />
            <div class="section">
                이곳에서 결과를 출력
            </div>
        </div>
    </div>    
</template>

<style scoped>
.main {
    display: flex;
}
.wrapper {
    position: absolute;
    top: 64px;
    overflow: auto;
    width: 100%;
    height: calc(100% - 64px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.action__box {
    width: 100%;
    height: 50%;
    border: 1px solid grey;
}
.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: calc(100% - 48px);
}
.result__box {
    width: 100%;
    height: 50%;
    border: 1px solid grey;
}
</style>

<script>
export default {
    layout: "TestLayout",
    components: {
        
    },
    created() {
        
    },
    data() {
        
    },
    mounted() {
        
    },
    methods: {
        
    },
    computed: {
        
    }
};
</script>