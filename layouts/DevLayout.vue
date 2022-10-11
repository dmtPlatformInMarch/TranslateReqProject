<template class="">
    <v-app app>
        <v-app-bar class="main__toolbar" elevation="0" color="transparent" width="100vw">
            <v-toolbar-title class="main__toolbar__title d-flex align-center" @click="home">
                <v-avatar height="5vh" width="6vw" tile>
                    <img src="../assets/logo4_transparent.png" />
                </v-avatar>
                <div>API DOCUMENTATION</div>
            </v-toolbar-title>
        </v-app-bar>
        <div class="main__section">
            <v-navigation-drawer permanent width="15vw" color="#fafafa">
                <v-list>
                    <v-list-group v-for="parent in documentation" :key="parent.title" no-action>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title v-text="parent.title" @click="go(parent.link)" />
                            </v-list-item-content>
                        </template>

                        <v-list-item v-for="child in parent.childs" :key="child.title">
                            <v-list-item-content>
                                <v-list-item-title v-text="child.title" @click="go(child.link)" />
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </v-list>
            </v-navigation-drawer>

            <nuxt class="main__page" />
        </div>
    </v-app>
</template>

<style scoped>
.main__toolbar {
    position: absolute;
    display: flex;
    height: 5vh !important;
    background-color: rgba(0,0,0,0.1) !important;
}
.main__toolbar__title {
    position: absolute;
    top: 0;
    left: 0;
}
.main__section {
    position: absolute;
    display: flex;
    width: 100%;
    height: 95vh;
    top: 5vh;
}
.main__page {
    overflow-y: scroll;
    position: absolute;
    left: 15vw;
    width: 85vw;
    height: 95vh;
}
</style>

<script>
export default {
    name: 'DevLayout',
    data() {
        return {
            logo: '',
            documentation: [
                {
                    title: "HOME",
                    link: '/dev',
                    childs: []
                },
                {
                    title: "API",
                    childs: [
                        {
                            title: "Text Translation",
                            link: '/dev/api/translate-text'
                        }
                    ]

                },
                {
                    title: "Platform",
                    childs: [
                        {
                            title: "About",
                            link: '/dev/platform/about'
                        },
                        {
                            title: "Text Translation",
                            link: '/dev/platform/text-translation'
                        }
                    ]
                },
                {
                    title: "EnterPrise",
                    childs: [
                        {
                            title: "About",
                            link: '/dev/enterprise/about'
                        },
                        {
                            title: "API Token",
                            link: '/dev/enterprise/token-issue'
                        },
                        {
                            title: "Check Usage",
                            link: '/dev/enterprise/usage-check'
                        }
                    ]
                }
            ],
        }
    },
    methods: {
        home() {
            this.$router.push('/dev');
        },
        go(link) {
            if (link != undefined) this.$router.push(link);
            else {

            }
        }
    }
}
</script>
