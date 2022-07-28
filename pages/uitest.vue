<template class="main">
    <div class="inner">
        <div v-for="(item, index) in list" :key="index">
            <test-component :idx="index" :text="item" />
        </div>
        <test-component :plus="true" />
    </div>
</template>

<style scoped>
.main {
    display: flex;
    align-items: center;
    justify-content: center;
}
.inner {
    padding: 100px;
    width: 80%;
    height: 100%;
}
</style>

<script>
import TestComponent from '../components/TestComponent.vue';

export default {
    layout: 'TestLayout',
    components: {
        TestComponent
    },
    created() {
        this.$nuxt.$on('addComponent', () => {
            this.list.push("추가하는 컴포넌트");
        });
        this.$nuxt.$on('removeComponent', (index) => {
            this.list.splice(index, 1);
        });
    },
    data() {
        return{
            list: [
                'A 테스트 컴포넌트',
                'B 테스트 컴포넌트',
                'C 테스트 컴포넌트',
                'D 테스트 컴포넌트',
                'E 테스트 컴포넌트',
            ]
        }     
    },
    methods: {

    },
}
</script>