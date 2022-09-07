<template class="main">
    <div class="wrapper">
        <v-virtual-scroll class="track__wrapper" bench="15" :items="mergeTrack" height="1080" item-height="156">
            <!--template v-slot:default="{ item, index }">
                <track-component :start="item.start" :end="item.end" :text="item.text" :idx="index" />
            </template-->
            <draggable class="track__wrapper" :component-data="settingProps()">
                <div>
                    머임 왜 안나옴 <br />
                </div>
            </draggable>
        </v-virtual-scroll>
        
    </div>
</template>

<style scoped>
.main {
    display: flex;
}
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.track__wrapper {
    width: 100%;
    height: 100%;
}
.list-group-item {
    cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
</style>

<script>
import draggable from 'vuedraggable'
import TrackComponent from '../components/TrackComponent.vue';

export default {
    layout: 'TestLayout',
    components: {
        draggable,
        TrackComponent,
    },
    created() {
        this.$nuxt.$on("addItem", (index) => {
            this.mergeTrack.splice(index + 1, 0, {
                start: "00:00:000",
                end: "00:00:000",
                text: "새로운 자막"
            });
        });
        this.$nuxt.$on("deleteItem", (index) => {
            this.mergeTrack.splice(index, 1);
        });
    },
    data() {
        return{
            track: [
                "yet still going strong",
                "and if i remember these furry folks have",
                "taken advantage of the good weather to",
                "make sure their state-of-the-art",
                "security system is ready",
                "what are they all looking at",
                "ah",
                "now i see",
                "looks like a new family's moved in down",
                "the block and they're kind of a little",
                "well",
                "different",
                "which isn't a bad thing of course",
                "but the citizens of dogtown still seem",
                "to be feeling a little um",
                "doubtful about their new neighbors these",
                "are burrowing owls",
                "and this is what burrowing owls do",
                "they move into burrows other animals",
                "have abandoned and since the average",
                "prairie dog weighs nearly eight times",
                "what one of those little owl guys does",
                "the owls don't pose any danger",
                "but badgers yeah",
                "definitely danger",
                "prairie dog is one of a badger's",
                "favorite snacks",
                "and even though they'll defend their",
                "town to the death",
                "prairie dogs are no match for him",
                "[Music]",
                "but wait what's this",
                "look at that little owl go",
                "give it to him",
                "well",
                "seems like the little owls have really",
                "earned their place in dog town",
                "how many towns do you know with their",
                "own owl air force",
                "definitely time to crank the party up a",
                "notch",
                "[Music]",
                "You",
            ],
            startTime: [
                4.08,
                7.60,
                10.55,
                12.63,
                14.16,
                19.35,
                23.60,
                24.80,
                26.64,
                28.64,
                31.28,
                32.48,
                34.40,
                36.72,
                38.88,
                41.20,
                44.40,
                46.08,
                48.48,
                50.96,
                53.36,
                55.60,
                58.40,
                63.12,
                67.84,
                72.80,
                74.96,
                78.08,
                79.76,
                81.44,
                84.46,
                95.60,
                99.20,
                102.72,
                107.76,
                108.88,
                110.88,
                113.60,
                115.04,
                119.28,
                121.44,
                123.59,
                136.64,
            ],
            endTime: [
                7.60,
                10.55,
                12.63,
                14.16,
                17.92,
                22.64,
                24.80,
                26.64,
                28.64,
                31.28,
                32.48,
                34.40,
                36.72,
                38.88,
                41.20,
                44.40,
                46.08,
                48.48,
                50.96,
                53.36,
                55.60,
                58.40,
                62.40,
                66.72,
                71.80,
                74.96,
                78.00,
                79.76,
                81.44,
                84.46,
                95.60,
                98.64,
                102.56,
                105.36,
                108.88,
                110.88,
                113.60,
                115.04,
                118.40,
                121.44,
                123.59,
                135.05,
                138.72,
            ],
            mergeTrack: [],
        }
    },
    computed: {
        dragOptions() {
            return {
                animation: 0,
                group: "description",
                disabled: false,
                ghostClass: "ghost"
            }
        }
    },
    mounted() {
        let merge = [];
        for (let i = 0; i < this.track.length; i++) {
            merge[i] = {
                start: this.secToTime(this.startTime[i]),
                end: this.secToTime(this.endTime[i]),
                text: this.track[i]
            }
        }
        this.mergeTrack = merge;
    },
    methods: {
        secToTime(value) {
            let hour = '';
            let min = '';
            let sec = '';
            let ms = '';
            let time = value.toString().split('.');
            hour = (Math.floor(time[0] / 3600) >= 10) ? Math.floor(time[0] / 3600) : `0${Math.floor(time[0] / 3600)}`;
            min = (Math.floor((time[0] % 3600) / 60) >= 10) ? Math.floor((time[0] % 3600) / 60) : `0${Math.floor((time[0] % 3600) / 60)}`;
            sec = (Math.floor((time[0] % 3600) % 60) >= 10) ? Math.floor((time[0] % 3600) % 60) : `0${Math.floor((time[0] % 3600) % 60)}`;
            if (time.length === 1) ms = '000';
            else ms = (parseInt(time[1]) >= 10) ? `${parseInt(time[1])}0` : `${parseInt(time[1])}00`;
            return `${hour}:${min}:${sec}.${ms}`;
        },
        settingProps() {
            return {
                props: {
                    
                }
            }
        }
    },
}
</script>