<template>
    <div class="track__wrapper">
        <div class="track__time">
            <v-text-field
                class="input__time"
                :value="start"
                outlined 
                dense 
                hide-details
                @input="changeStart($event)"
            /> 
            --> 
            <v-text-field
                class="input__time"
                :value="end"
                outlined 
                dense 
                hide-details
                @input="changeEnd($event)"
            />
        </div>
        <div class="track__text">
            <v-textarea
                :value="segmentText"
                outlined
                dense
                auto-grow
                rows="1"
                row-height="20"
                hide-details
                @input="changeText($event)"
            />
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
}
.input__time {
    flex: 0 0 auto !important;
}
.track__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px;
    min-height: 25px;
}
</style>

<script lang="js">
export default {
    props: {
        idx: {
            type: Number,
            require: true
        },
        start: {
            type: String,
            default: "00:00:00.000"
        },
        end: {
            type: String,
            default: "00:00:00.000"
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
                return "00:00:00.000";
            } else {
                const hour = (time / 3600000) >= 1 ? parseInt(time/3600000) : 0;
                const min = (time / 60000) >= 1 ? (time / 60000) >= 60 ? parseInt(time / 60000) - 60 >= 1 ? parseInt(time / 60000) - 60 : 0 : parseInt(time / 60000) : 0;
                const sec = (time % 60000) >= 1 ? parseInt(time % 60000 / 1000) >= 1 ? parseInt(time % 60000 / 1000) : 0 : parseInt(time / 1000) >= 1 ? parseInt(time / 1000) : 0;
                const mill = time % 1000;
                const ooHour = (hour / 10) >= 1 ? hour : `0${hour}`;
                const ooMin = (min / 10) >= 1 ? min : `0${min}`;
                const ooSec = (sec / 10) >= 1 ? sec : `0${sec}`;
                const oooMill = (mill / 100) >= 1 ? mill : (mill / 10) >= 1 ? `0${mill}` : `00${mill}`;
                return `${ooHour}:${ooMin}:${ooSec}.${oooMill}`;
            }
        },
        changeStart(e) {
            this.$nuxt.$emit('startChange', e, this.idx);
            console.log(e);
        },
        changeEnd(e) {
            this.$nuxt.$emit('endChange', e, this.idx);
            console.log(e);
        },
        changeText(e) {
            this.$nuxt.$emit('textChange', e, this.idx);
            console.log(e, this.idx);
        },
    }
}
</script>
