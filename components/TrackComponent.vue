<template>
    <div class="track__wrapper">
        <div class="track__time">
            <v-text-field
                ref="inputTime"
                class="input__time"
                :value="start + ' --> ' + end"
                outlined
                dense
                hide-details="auto"
                :readonly="editTime"
                @input="changeTime($event)"
                :rules="timeRule"
            />
            <div class="edit__time">
                <v-btn icon @click="timeEdit">
                    <v-icon>
                        mdi-timer-edit
                    </v-icon>
                </v-btn>
            </div>
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
        <div class="track__trans__text">
            <v-textarea
                :value="segmentTrans"
                outlined
                dense
                auto-grow
                rows="1"
                row-height="20"
                hide-details
                
            />
        </div>
    </div>
</template>

<style scoped>
.track__wrapper {
    display: flex;
    border: 1px solid grey;
    margin: 5px;
    padding: 0 10px;
    flex-basis: 4rem;
    justify-content: center;
}
.track__time {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    width: 25%;
}
.input__time {
    width: 80%;
    flex: 0 0 auto !important;
}
.input__time >>> input {
    text-align: center;
}
.edit__time {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.track__text {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    width: 35%;
}
.track__trans__text {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    width: 35%;
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
        },
        trans: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            editTime: true,
            timeRule: [
                value => (/\d\d:\d\d:\d\d[,.]\d\d\d --> \d\d:\d\d:\d\d[,.]\d\d\d/).test(value) || '형식이 맞지 않습니다.'
            ],
        }
    },
    computed: {
        segmentText() {
            return this.text.split('\\n');
        },
        segmentTrans() {
            return this.trans.split('\\n');
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
        changeTime(e) {
            this.$nuxt.$emit('timeChange', e, this.idx);
        },
        changeText(e) {
            this.$nuxt.$emit('textChange', e, this.idx);
        },
        changeTrans(e) {
            this.$nuxt.$emit('transChange', e, this.idx);
        },
        timeEdit() {
            this.editTime = !this.editTime
            if (!this.editTime) this.$refs.inputTime.focus();
        }
    }
}
</script>
