<template>
    <div class="main">
        <div v-if="plus">
            <v-btn icon @click="addComponent">
                <v-icon>
                    mdi-plus
                </v-icon>
            </v-btn>
        </div>
        <div class="box" v-else>
            <div>
                <p>
                    {{ idx }}
                </p>
            </div>
            <div>
                <p>
                    {{ text }}
                </p>
            </div>
            <div>
                <p>
                    {{ addText }}
                </p>
            </div>
            <v-btn class="clear" icon @click="removeComponent">
                <v-icon>
                    mdi-close
                </v-icon>
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
p {
    padding: 5px;
    margin-bottom: 0 !important;
}
.main {
    position: relative;
    text-align: center;
    border: 1px solid red;
    margin: 15px 0;
}
.box {
    width: 80%;
    display: flex;
    justify-content: space-around;
}
.clear {
    position: absolute;
    right: 0;
}
</style>

<script lang="js">
export default {
    props: {
        idx: {
            type: Number
        },
        text: {
            type: String
        },
        addText: {
            type: String
        },
        plus: {
            default: false
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        addComponent() {
            this.$nuxt.$emit('addComponent');
        },
        removeComponent() {
            this.$nuxt.$emit('removeComponent', this.idx);
        }
    }
}
</script>