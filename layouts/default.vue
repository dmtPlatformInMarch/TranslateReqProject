<template>
    <v-app>
        <v-toolbar elevation="1" style="flex: initial">
            <v-toolbar-title>
                <nuxt-link to="/">DMT labs</nuxt-link>
            </v-toolbar-title>
            <v-spacer />
            <v-toolbar-items>
                <v-menu offset-x offset-y :close-on-content-click="false" :nudge-width="200">
                    <template #activator="{ on, attrs }">
                        <v-btn text style="{display: flex, alignItems: 'center'}" v-bind="attrs" v-on="on">로그인</v-btn>
                    </template>
                    <login-form />
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
        <v-row no-gutters>
            <v-col cols="12" md="2">
                <v-navigation-drawer permanent>
                    <v-list>
                        <v-list-item v-if="!loginState">
                            <v-list-item-content>
                                <v-list-item-title>로그인이 필요합니다.</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-else>
                            <v-list-item-content>
                                <v-list-item-title class="text-h6">{{ loginState.nickname }} 님</v-list-item-title>
                                <v-list-item-subtitle>번역 의뢰 : N건</v-list-item-subtitle>
                                <v-btn depressed @click="onLogout">로그아웃</v-btn>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-divider />
                    <v-list nav dense>
                        <v-list-item link to="/request">
                            <v-list-item-icon>
                                <v-icon>mdi-clipboard-edit</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>번역 의뢰</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="/reqstate">
                            <v-list-item-icon>
                                <v-icon>mdi-clipboard-search</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>번역 현황</v-list-item-title>
                        </v-list-item>
                        <v-list-item link to="/history">
                            <v-list-item-icon>
                                <v-icon>mdi-clipboard-clock</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>번역 실적</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-col>
            <v-col cols="12" md="10"><nuxt /></v-col>
        </v-row>
    </v-app>
</template>

<style scoped>

</style>

<script lang="js">
import LoginForm from '~/components/LoginForm'

export default {
    name: 'default',
    components: {
        LoginForm,
    },
    data: () => ({

    }),
    computed: {
        loginState() {
            return this.$store.state.users.loginState;
        }
    },
    methods: {
        onLogout() {
            this.$store.dispatch('users/logout');
        }
    }
};
</script>