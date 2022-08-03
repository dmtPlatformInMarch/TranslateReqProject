<template class="main">
    <div class="inner">
        <div>
            <v-btn @click="addTrans">
                객체 배열의 속성값 변경
            </v-btn>
        </div>
        <draggable v-model="list">
        <div v-for="(item, index) in list" :key="index">
            <test-component :idx="index" :text="item.text" :addText="item.trans" />
        </div>
        </draggable>
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
import draggable from 'vuedraggable';
import axios from "axios";

export default {
    layout: 'TestLayout',
    components: {
        TestComponent,
        draggable
    },
    created() {
        this.$nuxt.$on('addComponent', () => {
            this.list.push({"text":"추가하는 컴포넌트", "trans": ""});
        });
        this.$nuxt.$on('removeComponent', (index) => {
            this.list.splice(index, 1);
        });
    },
    data() {
        return{
            list: [
                {"text": "yet still going strong", "trans": ""},
                {"text": "and if i remember these furry folks are taken advantage of a good weather to make sure there are state of the art security system is ready", "trans": ""},
                {"text": "what are they all looking at a now i see", "trans": ""},
                {"text": "looks like a new families moved in down the block and they're kind of a little well different", "trans": ""},
                {"text": "which is an a bad thing of course but the citizens of dog towns still seemed to be feeling a little doubtful about their new neighbours", "trans": ""},
                {"text": "these are burrowing ells and this is what burrowing ells do they move into burrows other animals have abandoned", "trans": ""},
                {"text": "and since the average prary dog ways nearly eight times what one of those little oll guys does the owls don't pose any danger", "trans": ""},
                {"text": "but badgers yeah definitely danger", "trans": ""},
                {"text": "prery dog is one of a badger's favorite snacks and even though they'll defend their town to the death", "trans": ""},
                {"text": "prery dogs are no match for him", "trans": ""},
                {"text": "but way what's this let in that a little ou go give it you", "trans": ""},
                {"text": "well seems like the little alls of really earned their place and dog town how many towns do you know with their own all air force", "trans": ""},
                {"text": "it's definitely time to crank the party up a note", "trans": ""},
            ],
            translist: [],
        }     
    },
    methods: {
        async addTT() {
            let templist = [];
            for(let i = 0; i < this.list.length; i++) {
                let str = this.list[i].text;
                const res = await axios({
                    method: "post",
                    url: "https://dmtcloud.kr/translate-text",
                    data: {
                        "from": "en",
                        "to": "zh-CN",
                        "text": str
                    }
                });
                if(res.status === 200) templist.push(res.data[0].translations);
            }
            this.translist = templist.slice();
        },
        addTrans() {
            const transTrack = ["번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과", "번역된 결과"];
            for (let i = 0; i < this.list.length; i++) {
                this.list[i].trans = transTrack[i];
            }
        }
    },
}
</script>