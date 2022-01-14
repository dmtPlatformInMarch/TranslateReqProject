<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ p.id }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
            <v-list-item-title>{{ p.req_lang }} -> {{ p.grant_lang }} 번역</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
            <v-btn rounded depressed small color="orange">
                {{ p.trans_state }}
                <v-icon right>mdi-briefcase-clock</v-icon>
            </v-btn>
            <v-btn @click="cle">지우기</v-btn>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
export default {
    props: {
        p: {
            type: Object,
            required: true,
        }
    },
    methods: {
        cle() {
            this.$store.dispatch('requests/cancelRequest', {
                id: this.p.id
            });
        }
    }
}
</script>