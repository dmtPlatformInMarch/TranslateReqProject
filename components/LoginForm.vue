<template>
    <v-card>
        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-list>
                <v-list-item-group>
                    <v-list-item-content style="{ margin: 20px; padding: 10px; }">
                        <v-text-field v-model="email" :rules="emailRules" label="이메일" clearable dense />
                    </v-list-item-content>
                    <v-list-item-content style="{ margin: 20px; padding: 10px; }">
                        <v-text-field v-model="password" :rules="passwordRules" label="비밀번호" clearable dense />
                    </v-list-item-content>
                </v-list-item-group>
                <v-list-item>
                    <v-btn style="width:100%" depressed :disabled="!valid" type="submit">로그인</v-btn>
                </v-list-item>
                <v-list-item-subtitle class="text-center">
                    <v-btn style="width:90%" plain to="/signup">회원가입</v-btn>
                </v-list-item-subtitle>
            </v-list>
        </v-form>
    </v-card>
</template>

<style scoped>

</style>

<script>
export default {
    data() {
        return {
            // valid는 하위 rules가 모두 true인 경우에만 true
            // 하나라도 false라면 false (rules가 없다면 true)
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || '이메일을 입력해주세요.',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '이메일이 유효하지 않습니다.'
            ],
            passwordRules: [
                v => !!v || '비밀번호를 입력해주세요.'
            ],
        }
    },
    methods: {
        onSubmitForm() {
            if(this.$refs.form.validate()){
                this.$store.dispatch('users/login', {
                    nickname: '유저',
                    email: this.email
                });
            } else {
                // false
            }
            //console.log(this.valid);
        },
    }
}
</script>