export const state = () => ({
    mainRequest: [],
    requestCount: 0,
});

export const mutations = {
    increseCount(state, payload) {
        state.requestCount = state.requestCount + payload;
    },
    addMainRequest(state , payload) {
        state.mainRequest.unshift(payload);
    },
    removeMainRequest(state, payload) {
        const index = state.mainRequest.findIndex(v => v.id === payload.id);
        state.mainRequest.splice(index, 1);
    },
};

export const actions = {
    onRequest({ commit }, payload) {
        // 서버 요청
        commit('addMainRequest', payload);
        commit('increseCount', 1);
    },
    cancelRequest({ commit }, payload) {
        commit('removeMainRequest', payload);
    }
};