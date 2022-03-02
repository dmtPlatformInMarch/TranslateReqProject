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
    async loadUser({ commit }) {
        try {
            console.log('Load User');
            const res = await this.$axios.get('/user', {
                withCredentials: true,
            });
            commit('setUser', res.data);
        } catch (err) {
            console.log('로그인이 필요합니다.');
        }
    },
    // 회원가입
    async signUp({ commit }, payload) {
        try {
            const signupResponse = await this.$axios.post('/user/signup', {
                email: payload.email,
                password: payload.password,
                nickname: payload.nickname,
            }, {
                // 쿠키를 서로 저장
                withCredentials: true,
            });
            return signupResponse;
        } catch (err) {
            console.log(err);
        }
        // 회원가입을 성공했을 경우
    },
    async login({ commit }, payload) {
        try {
            const loginState = await this.$axios.post('/user/login', {
                email: payload.email,
                password: payload.password,
            }, {
                withCredentials: true,
            });

            commit('setUser', loginState.data);
        } catch (err) {
            console.log(err);
        }
    },
    async logout({ commit }) {
        try {
            const res = await this.$axios.post('/user/logout', {}, {
                withCredentials: true,
            });
            commit('setUser', null);
        } catch (err) {
            console.log(err);
        }
    },
};