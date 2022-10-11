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
    async loadUser({ commit }) {
        try {
            //console.log('Start Load User');
            const res = await this.$axios.get('/user', {
                withCredentials: true,
            });
            commit('setUser', res.data);
        } catch (err) {
            console.log('로그인 필요');
        }
    },
    // 회원가입
    async signUp({ commit }, payload) {
        try {
            const signupResponse = await this.$axios.post('/user/signup', {
                email: payload.email,
                password: payload.password,
                nickname: payload.nickname,
                organization: payload.organization,
            }, {
                // 쿠키를 서로 저장
                withCredentials: true,
            });
            return signupResponse;
        } catch (err) {
            console.log(err);
        }
    },
    // 로그인
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
            if (err.response.data === '존재하지 않는 사용자입니다.') {
                this.$manage.showMessage({ message: `${err.response.data}`, color: 'red' });
            } else if (err.response.data.code === 401) {
                this.$manage.showMessage({ message: `${err.response.data.error}`, color: 'red' });
            } else {
                console.log('로그인 스토어 에러\n', err.response);
            }
        }
    },
    // 로그아웃
    async logout({ commit }) {
        try {
            await this.$axios.post('/user/logout', {}, {
                withCredentials: true,
            });
            commit('setUser', null);
            localStorage.removeItem('vuex');
            location.reload();
        } catch (err) {
            console.log(err);
        }
    },
};