// 요청 스토어

/*
### Request Data Form
{
    id: string,
    name: string,
    phone: string,
    email: string,
    company: string,
    second_phone: string,
    date: string,
    req_lang: string,
    grant_lang: string,
    options: string,
    trans_state: string (list value)
}
*/

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
        state.filePaths = [];
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
        console.log(
            `여기가 스토어 액션 시작\n`,
            `id: ${payload.id}\n`,
            `name: ${payload.name}\n`,
            `phone: ${payload.phone}\n`,
            `email: ${payload.email}\n`,
            `company: ${payload.company}\n`,
            `second_phone: ${payload.second_phone}\n`,
            `date: ${payload.date}\n`,
            `req_lang: ${payload.req_lang}\n`,
            `grant_lang: ${payload.grant_lang}\n`,
            `options: ${payload.options}\n`,
            `trans_state: ${'번역 준비중'}\n`
        );
        this.$axios.post('http://localhost:3085/request', {
            id: payload.id,    
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            company: payload.company,
            second_phone: payload.second_phone,
            date: payload.date,
            req_lang: payload.req_lang,
            grant_lang: payload.grant_lang,
            options: payload.options,
            trans_state: '번역 준비중'
        }, {
            withCredentials: true,
        })
            .then((res) => {
                commit('addMainRequest', res.data);
            })
            .catch(() => {

            });
        
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