<template>
    <div>
        <v-container>
            <v-card>
                <v-container>
                    <v-form>
                        <v-text-field label="이름" type="text"/>
                        <v-text-field label="사용할 아이디" type="text" />
                        <v-text-field label="사용할 비밀번호" type="password" />
                        <v-text-field label="비밀번호 확인" type="password" />
                        <v-checkbox required label="가입 약관" />
                        <v-btn type="submit">가입하기</v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    layout: 'signup_layout'
}
</script>