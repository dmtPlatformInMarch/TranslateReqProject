<template>
    <div class="track__wrapper">
        <div class="track__time">
            <h3>{{ start }} --> {{ end }}</h3>
        </div>
        <div class="track__text">
            <p>
                <template v-for="(c, index) in segmentText">
                    {{ c }} <br :key="index">
                </template>
            </p>
        </div>
    </div>
</template>

<style scoped>
.track__wrapper {
    display: flex;
    flex-direction: column;
    height: 15%;
    border: 1px solid grey;
    margin: 5px;
    padding: 0 10px;
    flex-basis: 6rem;
    justify-content: center;
}
.track__time {
    padding: 5px;
}
.track__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px;
    margin: 5px;
    border: 1px solid black;
}
</style>

<script lang="js">
export default {
    props: {
        start: {
            type: String,
            default: "00:00.000"
        },
        end: {
            type: String,
            default: "00:00.000"
        },
        text: {
            type: String,
            default: ""
        }
    },
    data() {
        return {

        }
    },
    computed: {
        segmentStart() {
            return this.msToString(this.start);
        },
        segmentEnd() {
            return this.msToString(this.end);
        },
        segmentText() {
            return this.text.split('\\n');
        }
    },
    methods: {
        msToString(time) {
            if (time === 0) {
                return "00:00.000";
            } else {
                const min = (time / 60000) >= 1 ? parseInt(time/60000) : 0;
                const sec = min >= 1 ? (time % 60000 / 0.6 / 1000) >= 1 ? parseInt((time % 60000) / 0.6 / 1000) : 0 : (time / 1000) >= 1 ? parseInt(time / 1000) : 0;
                const mill = min >= 1 ? parseInt((time % 60000) / 0.6 % 100) : (time / 1000) >= 1 ? time % 1000 : time;
                const ooMin = (min / 10) >= 1 ? min : `0${min}`;
                const ooSec = (sec / 10) >= 1 ? sec : `0${sec}`;
                const oooMill = (mill / 100) >= 1 ? mill : (mill / 10) >= 1 ? `0${mill}` : `00${mill}`;
                return `${ooMin} : ${ooSec}.${oooMill}`;
            }
        }
    }
}
</script>
