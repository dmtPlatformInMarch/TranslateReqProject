<template>
    <div class="main">
        <div class="image__section">
            <img class="image__background" :src="backgroundURL" >
        </div>
        <div class="login__section">
            <div class="login__title">
                <h2>
                    <span class="title__span">D M T L A B S</span><br />
                    <span class="title__span">A D M I N</span>
                </h2>
            </div>
            <div class="login__form">
                <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                    <v-text-field v-model="email" label="ID" filled dark 
                        :rules="idRule"
                    />
                    <v-text-field v-model="password" label="PASSWORD" filled dark 
                        :rules="pwdRule"
                    />
                    <v-btn :disabled="!valid" type="submit" block text dark>
                        login
                    </v-btn>
                </v-form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    width: 100%;
    height: 100%;
}
.image__section {
    width: 100%;
    height: 100%;
}
.image__background {
    display: flex;
    width: 100%;
    height: 100%;
}
.login__section {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 100%;
    background: rgba(0, 0, 60, 0.75);
}
.login__title {
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    color: white;
    margin: 50px;
}
.title__span {
    white-space: nowrap;
}
.login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 30vh;
}

@media screen and (max-width: 640px) {
    .title__span {
        font-size: 16px;
    }
}
</style>

<script>
export default {
    layout: 'none',
    data() {
        return {
            valid: false,
            email: "",
            password: "",
            backgroundURL: 'https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/images/YongSan.jpg',
            idRule: [v => !!v || 'ID is required'],
            pwdRule: [v => !!v || 'PASSWORD is required'],
        }
    },
    methods: {
        async onSubmitForm() {
            if (this.$refs.form.validate()) {
                try {
                    await this.$store.dispatch("users/login", {
                        email: this.email,
                        password: this.password,
                    });
                    if (this.$store.state.users.loginState.permission === "admin") {
                        this.$router.push('/admin/main');
                    } else {
                        alert("해당 페이지는 관리자만 접근할 수 있습니다.");
                        await this.$store.dispatch("users/logout");
                    }
                } catch (err) {
                    // 사용자 관점 처리 => store - login 에서 처리
                    // console.log("로그인 폼 컴포넌트 에러", err);
                }
            } else {
                // validate가 false인 경우
            }
        },
    }
}
</script>
