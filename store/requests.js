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
    costs: ['', '', '', '', ''],
    ex_cost: 0,
});

export const mutations = {
    addMainRequest(state, payload) {
        state.mainRequest.unshift(payload);
        state.hasMoreRequest = true;
    },
    removeMainRequest(state, payload) {
        const index = state.mainRequest.findIndex(v => v.id === payload);
        state.mainRequest.splice(index, 1);
    },
    concatFilePaths(state, payload) {
        state.filePaths[payload.index] = payload.file;
    },
    removeFilePaths(state, payload) {
        state.filePaths[payload] = '';
    },
    loadRequest(state, payload) {
        state.mainRequest = payload;
        state.hasMoreRequest = false;
    },
    setExcost(state, payload) {
        state.ex_cost = payload;
    }
};

export const actions = {
    async onRequest({ commit, state }, payload) {
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
        try {
            const requestResponse = await this.$axios.post('/request', {
                id: payload.id,
                name: payload.name,
                phone: payload.phone,
                email: payload.email,
                company: payload.company,
                second_phone: payload.second_phone,
                date: payload.date,
                field: payload.field,
                req_lang: payload.req_lang,
                grant_lang: payload.grant_lang,
                options: payload.options,
                trans_state: '번역 준비중',
                file: state.filePaths
            }, {
                withCredentials: true,
            })
            commit('addMainRequest', requestResponse.data);
            return requestResponse;
        } catch (err) {
            console.error(err);
        }
    },
    async uploadFile({ commit }, payload) {
        try {
            const uploadResponse = await this.$axios.post('/request/file', payload.file, {
                withCredentials: true,
            });
            commit('concatFilePaths', { index: payload.index, file: uploadResponse.data });
        } catch (err) {
            console.error(err);
        }
    },
    async removeFile({ commit, state }, payload) {
        try {
            const removeResponse = await this.$axios.delete(`/request/file/delete`, {
                data: {
                    files: state.filePaths[payload],
                },
                withCredentials: true,
            });
            if (removeResponse.status === 201) {
                commit('removeFilePaths', payload);
            } else {
                console.log('파일 삭제 오류\n', removeResponse);
            }
        } catch (err) {
            console.log(err);
        }
    },
    async loadRequests({ commit, state }, payload) {
        try {
            if (state.hasMoreRequest) {
                const loadResponse = await this.$axios.get(`/requests/${payload.id}`);
                commit('loadRequest', loadResponse.data);
            } else {
                this.$manage.showMessage({ message: '이미 최신 상태입니다.', color: 'amber darken-1' });
            }
        } catch (err) {
            // 사용자 관점의 에러처리
            console.error(err);
        }
    },
    async cancelRequest({ commit }, payload) {
        try {
            const cancelResponse = await this.$axios.delete(`/request/${payload.id}`, {
                withCredentials: true,
            });
            commit('removeMainRequest', payload.id);
            return cancelResponse;
        } catch (err) {
            console.error(err);
        }
    },
    calcExcost({ commit },) {

    }
};