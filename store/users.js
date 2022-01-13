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
    // 회원가입
    signUp({ commit, state }, payload) {
        // 일단은 회원가입을 하면 해당 계정으로 로그인
        commit('setUser', payload);
    },
    login({ commit , state }, payload) {
        commit('setUser', payload);
    },
    logout({ commit, state }, payload) {
        commit('setUser', null);
    },
};