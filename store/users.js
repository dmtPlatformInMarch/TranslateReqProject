export const state = () => ({
    loginState: null,
});

// mutation에는 비동기 작업이 있어선 안됨. 
// (=> actions에서 수행)
export const mutations = {
    setUser(state, payload) {
        state.loginState = payload;
    },
};

// (context, payload)로 구성
// 비동기 작업 or 복잡한 작업 수행
export const actions = {
    // 유저 정보 불러오기
    async loadUser({ commit, state }) {
        try {
            const loginToken = this.$cookies.get('token');
            if (loginToken != null) {
                const base64Payload = loginToken.split('.')[1];
                const payload = Buffer.from(base64Payload, 'base64');
                commit('setUser', JSON.parse(payload.toString()));
            }
        } catch (err) {
            if (err.response?.status != 410) console.log(err);
            else { console.log(err); }
        }
    },
    // 회원가입
    async signUp({}, payload) {
        try {
            const signupResponse = await this.$axios.post('/user/signup', {
                email: payload.email,
                password: payload.password,
                nickname: payload.nickname,
                organization: payload.organization,
            });
            return signupResponse;
        } catch (err) {
            console.log(err);
        }
    },
    // 로그인
    async login({ state, commit }, payload) {
        try {
            const loginResponse = await this.$axios.post('/user/login', {
                email: payload.email,
                password: payload.password,
            });
            if (loginResponse.status === 200) {
                this.$cookies.set('token', loginResponse.data.token);
                const loginToken = loginResponse.data.token;
                const base64Payload = loginToken.split('.')[1];
                const payload = Buffer.from(base64Payload, 'base64');
                commit('setUser', JSON.parse(payload.toString()));
            }
            if (state.loginState.permission != 'admin') location.reload();
        } catch (err) {
            if (err.response.data.message === '존재하지 않는 사용자입니다.') {
                this.$manage.showMessage({ message: `${err.response.data.message}`, color: 'red' });
            } else if (err.response.data.message === '로그인한 사용자는 사용할 수 없습니다.') {
                this.$manage.showMessage({ message: `${err.response.data.message}`, color: 'red' });
            } else {
                console.log('로그인 스토어 에러\n', err.response);
            }
        }
    },
    // 로그아웃
    async logout({ commit }) {
        try {
            await this.$axios.post('/user/logout');
            commit('setUser', null);
            this.$cookies.remove('token');
            location.reload();
        } catch (err) {
            console.log(err);
        }
    },
};