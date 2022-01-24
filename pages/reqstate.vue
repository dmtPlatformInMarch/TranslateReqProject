<template>
    <v-container>
        <h1>번역 현황 페이지</h1>
        <v-card>
            <v-container>
                <v-subheader>유저 님이 요청한 번역</v-subheader>
                <v-btn @click="dummy">번역 더미 넣기</v-btn>
                <v-card>
                    <v-list style="height: 300px; overflow-y: scroll">
                        <v-list-item v-if="mainRequest.length === 0">
                            <v-list-item-title>번역 진행 중인 의뢰가 없습니다.</v-list-item-title>
                        </v-list-item>
                        <v-list-item-group v-else>
                            <trans-dash-board v-for="p in mainRequest" :id="p.id" :key="p.id" :p="p" />
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-container>
        </v-card>

        <v-card>
            <v-container>
                <v-subheader>유저 님의 번역 요청 이력</v-subheader>
                <v-card>
                    <v-virtual-scroll :item-height="50" height="300">
                        <!--<template #default="{ item }">
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
                        </template>-->
                    </v-virtual-scroll>
                </v-card>
            </v-container>
        </v-card>
    </v-container>
</template>

<style scoped>

</style>

<script lang="js">
import transDashBoard from '~/components/TransDashBoard';

export default {
    components: {
        transDashBoard,
    },
    data() {
        return {
            countrys: [ '한국어', '영어', '일본어', '중국어', '아랍어'],
            countrys2: [ '독일어', '이탈리아어', '포르투갈어', '러시아어', '스페인어'],
        }
    },
    computed: {
        mainRequest() {
            return this.$store.state.requests.mainRequest;
        }
    },
    methods: {
        getRandomIndex (length) {
            return Math.ceil(Math.random() * (length - 1));
        },
        dummy() {
            this.$store.dispatch('requests/onRequest', {
                id: this.$store.state.requests.requestCount + 1,
                name: '유저',
                phone: '123',
                email: '123@123.com',
                company: '123company',
                second_phone: '',
                date: '2021-01-14',
                req_lang: '한국어',
                grant_lang: '중국어',
                options: '',
                trans_state: '번역 준비중'
            });
        },
    },
};
</script>