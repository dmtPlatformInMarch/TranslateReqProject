<template>
    <v-card>
        <v-list>
            <v-list-item-group>
                <v-list-item-content style="{ margin: 20px; padding: 10px; }">
                    <v-text-field label="아이디" clearable dense />
                </v-list-item-content>
                <v-list-item-content style="{ margin: 20px; padding: 10px; }">
                    <v-text-field label="비밀번호" clearable dense />
                </v-list-item-content>
            </v-list-item-group>
            <v-list-item>
                <v-btn style="width:100%" depressed>로그인</v-btn>
            </v-list-item>
            <v-list-item-subtitle class="text-center">
                <v-btn style="width:90%" plain to="/signup">회원가입</v-btn>
            </v-list-item-subtitle>
        </v-list>
    </v-card>
</template>

<style scoped>

</style>

<script>
export default {
    
}
</script>