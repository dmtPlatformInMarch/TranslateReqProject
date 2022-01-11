<template>
    <v-container>
        <h1>번역 현황 페이지</h1>
        <v-card>
            <v-container>
                <v-subheader>유저 님이 요청한 번역</v-subheader>
                <v-card>
                    <v-virtual-scroll :items="items" :item-height="50" height="300">
                        <template v-slot:default="{ item }">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{ Date() }}</v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.country1 }} -> {{ item.country2 }} 번역</v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-action>
                                        <v-btn rounded depressed small color="orange">
                                            번역중
                                            <v-icon right>mdi-briefcase-clock</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                            </v-list-item>
                        </template>
                    </v-virtual-scroll>
                </v-card>
            </v-container>
        </v-card>

        <v-card>
            <v-container>
                <v-subheader>유저 님의 번역 요청 이력</v-subheader>
                <v-card>
                    <v-virtual-scroll :items="items" :item-height="50" height="300">
                        <template v-slot:default="{ item }">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{ Date() }}</v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-content>
                                    <v-list-item-title>{{ item.country1 }} -> {{ item.country2 }} 번역</v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-action>
                                        <v-btn depressed small>
                                            가져오기
                                            <v-icon right>mdi-open-in-new</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                            </v-list-item>
                        </template>
                    </v-virtual-scroll>
                </v-card>
            </v-container>
        </v-card>
    </v-container>
</template>

<style scoped>

</style>

<script lang="js">
export default {
    data: () => ({
        countrys: [ '한국어', '영어', '일본어', '중국어', '아랍어'],
        countrys2: [ '독일어', '이탈리아어', '포르투갈어', '러시아어', '스페인어'],
    }),
    computed: {
        items () {
            const countryLength = this.countrys.length;
            return Array.from({ length: 30 }, (k) => {
                return {
                    country1: this.countrys[this.getRandomIndex(countryLength)],
                    country2: this.countrys2[this.getRandomIndex(countryLength)],
                }
            })
        }
    },
    methods: {
        getRandomIndex (length) {
            return Math.ceil(Math.random() * (length - 1));
        },
    },
};
</script>