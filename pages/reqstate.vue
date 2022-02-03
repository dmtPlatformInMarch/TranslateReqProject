<template>
    <v-container>
        <h1>번역 현황 페이지</h1>
        <v-card>
            <v-container>
                <v-subheader v-if="!loginState">
                    번역 요청 현황을 보시려면 로그인이 필요합니다.
                </v-subheader>
                <v-subheader v-else>
                    {{ loginState.nickname }} 님의 번역 현황
                </v-subheader>
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
                <v-subheader v-if="!loginState">
                    번역 요청 이력을 보시려면 로그인이 필요합니다.
                </v-subheader>
                <v-subheader v-else>
                    {{ loginState.nickname }} 님의 번역 요청 이력
                </v-subheader>
                <v-card>
                    <v-list style="height: 300px; overflow-y: scroll">
                        <v-list-item v-if="mainRequest.length === 0">
                            <v-list-item-title>번역한 의뢰가 없습니다.</v-list-item-title>
                        </v-list-item>
                        <v-list-item-group v-else>
                            <trans-dash-board v-for="p in mainRequest" :id="p.id" :key="p.id" :p="p" />
                        </v-list-item-group>
                    </v-list>
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
            
        }
    },
    fetch({ store }) {
        return store.dispatch('requests/loadRequests');
    },
    asyncData() {
        // 비동기 데이터, 위의 data와 합쳐짐.
        return {};
    },
    computed: {
        mainRequest() {
            return this.$store.state.requests.mainRequest;
        },
        loginState() {
            return this.$store.state.users.loginState;
        }
    },
    methods: {
        
    },
};
</script>