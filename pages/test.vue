<template class="main">
    <div class="wrapper">
        
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
</style>

<script>
import draggable from 'vuedraggable'
import TrackComponent from '../components/TrackComponent.vue';

let message = [];

export default {
    layout: "TestLayout",
    components: {
    draggable,
        TrackComponent
    },
    created() {
        const totalLength = 100;
        for (let i = 0; i < totalLength; i++) {
            message.push("abcde");
        }
    },
    data() {
        return {
            itemHeight: 156, // 내부 아이템 높이
            bench: 15, // 여유 padding 아이템 개수
            viewList: [],// 실제로 보이는 리스트
            list: [],
        }
    },
    mounted() {
        this.list = message.map((name, index) => { // 실제 리스트
            return { name, order: index + 1  };
        }),
        this.viewList = this.list.slice(0,23);
        this.$refs.virtualScroll.addEventListener('wheel', () => {
            this.viewList = this.renderList();
            this.viewList = this.viewList.splice(0);
        });
        console.log(this.$refs.virtualScroll.scrollHeight);
    },
    methods: {
        renderList() {
            let buffer = this.itemHeight * this.bench;
            let top = Math.max(0, Math.floor((this.$refs.virtualScroll.scrollTop - buffer) / this.itemHeight));
            let bottom = Math.min(this.$refs.virtualScroll.scrollHeight / this.itemHeight, Math.ceil((this.$refs.virtualScroll.scrollTop + this.$refs.virtualScroll.clientHeight + buffer) / this.itemHeight));
            return this.list.slice(top, bottom);
        }
    },
    computed: {
        dragOptions() {
            return {
                animation: 0,
                group: "description",
                disabled: false,
                ghostClass: "ghost"
            };
        },
    }
};
</script>