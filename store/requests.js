// 의뢰 스토어

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
    hasMoreRequest: true,
    filePaths: ['', '', '', '', ''],
});

const totalRequest = 51;
const limit = 10;

export const mutations = {
    addMainRequest(state , payload) {
        state.mainRequest.unshift(payload);
    },
    removeMainRequest(state, payload) {
        const index = state.mainRequest.findIndex(v => v.id === payload.RequestId);
        state.mainRequest.splice(index, 1);
    },
    concatFilePaths(state, payload) {
        state.filePaths[payload.index] = payload.file;
    },
    removeFilePaths(state, payload) {
        state.filePaths[payload] = '';
    },
    loadRequest(state, payload) {
        state.mainRequest = [payload];
    },
    loadRequests(state, payload) {
        if (payload.reset) {
            state.mainRequest = payload.data;
        } else {
            state.mainRequest = state.mainRequest.concat(payload.data);
        }
        state.hasMoreRequest = payload.data.length === 10;
    },
    loadSubRequest(state, payload) {
        const index = state.mainRequest.findIndex(v => v.id == payload.RequestId);
        state.mainRequest[index].req_lang = payload.req_lang;
        state.mainRequest[index].grant_lang = payload.grant_lang;
    }
};

export const actions = {
    onRequest({ commit, state }, payload) {
        // 서버 요청
        /*console.log(
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
        );*/
        this.$axios.post('/request', {
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
            trans_state: '번역 준비중',
            file: state.filePaths
        }, {
            withCredentials: true,
        })
            .then((res) => {
                commit('addMainRequest', res.data);
            })
            .catch(() => {

            });
    },
    cancelRequest({ commit }, payload) {
        commit('removeMainRequest', payload);
    },
    uploadFile({ commit }, payload) {
        this.$axios.post('/request/file', payload.file, {
            withCredentials: true,
        })
            .then((res) => {
                commit('concatFilePaths', {index: payload.index, file: res.data});
                console.log(`filePaths = ${this.$store.state.requests.filePaths}\n`);
            })
            .catch(() => {

            })
    },
    removeFile({ commit }, payload) {
        commit('removeFilePaths', payload);
    },
    loadRequest({ commit, state }, payload) {
        if(state.hasMoreRequest) {
            this.$axios.get(`/requests?offset=${state.mainRequest.length}&limit=10`)
                .then((res) => {
                    commit('loadRequest', res.data);
                })
                .catch(() => {
                    // 사용자 관점의 에러 처리
                });
        }
    },
    loadSubRequest({ commit, state }, payload) {
        this.$axios.get(`/request/${payload.RequestId}/sub`)
        .then((res) => {
            commit('loadSubRequest', res.data);
        })
        .catch(() => {

        });
    },
    CacelRequest({ commit }, payload) {
        this.$axios.delete(`/request/${payload.RequestId}`, {
            withCredentials: true,
        })
            .then(() => {
                commit('removeMainRequest', payload);
            })
            .catch(() => {

            });
    }
};