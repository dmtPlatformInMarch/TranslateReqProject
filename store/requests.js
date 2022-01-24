export const state = () => ({
    mainRequest: [],
    requestCount: 0,
    filePaths: [],
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
    concatFilePaths(state, payload) {
        state.imagePaths = state.imagePaths.concat(payload);
    },
    removeImagePaths(state, payload) {
        state.imagePaths.splice(payload, 1);
    }
};

export const actions = {
    onRequest({ commit }, payload) {
        // 서버 요청
        commit('addMainRequest', payload);
        commit('increseCount', 1);
    },
    cancelRequest({ commit }, payload) {
        commit('removeMainRequest', payload);
    },
    uploadFile({ commit }, payload) {
        this.$axios.post('http://localhost:3085/request/file', payload, {
            withCredentials: true,
        })
            .then((res) => {
                commit('concatFilePaths', res.data);
            })
            .catch(() => {

            })
    }
};