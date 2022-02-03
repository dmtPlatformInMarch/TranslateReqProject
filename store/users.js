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
    async loadUser({ commit, state }) {
        console.log('Load User');
        try {
            const res = await this.$axios.get('/user', {
                withCredentials: true,
            });
            console.log(res.data);
            commit('setUser', res.data);
            console.log(state);
        } catch (err) {
            console.log(err);
        }
    },
    // 회원가입
    signUp({ commit, state }, payload) {
        // 일단은 회원가입을 하면 해당 계정으로 로그인
        this.$axios.post('/user', {
            email: payload.email,
            password: payload.password,
            nickname: payload.nickname,
        }, {
            // 쿠키를 서로 저장
            withCredentials: true,
        })
            .then((res) => {
                commit('setUser', res.data);
            })
            .catch((err) => {
                console.log("받는 곳에서 오류\n",err);
            });
    },
    login({ commit }, payload) {
        this.$axios.post('/user/login', {
            email: payload.email,
            password: payload.password,
        }, {
            // 쿠키를 서로 저장
            withCredentials: true,
        }).then((res) => {
            commit('setUser', res.data);
        }).catch((err) => {
            console.log(err);
        });
    },
    logout({ commit, state }) {
        this.$axios.post('/user/logout', {}, {
            withCredentials: true,
        })
            .then((data) => {
                console.log(this.loginState);
                commit('setUser', null);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};