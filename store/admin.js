import { throttle } from "lodash";

export const state = () => ({
    allRequest: [],
    allUser: [],
});

export const mutations = {
    loadallRequest(state, payload) {
        state.allRequest = payload;
    },
    setallUser(state, payload) {
        state.allUser = payload.data;
    }
}

export const actions = {
    loadReq: throttle( async function({ commit }) {
        try {
            const requestResponse = await this.$axios.get(`/admin/requests`);
            commit('loadallRequest', requestResponse.data);
        } catch (err) {
            console.log(err);
        }
    }, 1000),
    reloadReq: throttle( async function({ commit }) {
        try {
            const requestResponse = await this.$axios.get(`/admin/requests`, {
                headers: { 'Cache-Control': 'no-cache' }
            });
            commit('loadallRequest', requestResponse.data);
        } catch (err) {
            console.log(err);
        }
    }, 1000),
    loadUser: throttle ( async function({ commit, state }) {
        try {
            const userResponse = await this.$axios.get('/admin/users');
            commit('setallUser', userResponse);
            if (userResponse != state.allUser) this.$manage.showMessage({ message: '유저 정보를 업데이트했습니다.', color: 'success' });
            else this.$manage.showMessage({ message: '이미 최신 정보입니다.', color: 'amber darken-1' });
        } catch (err) {
            console.log(err);
        }
    }, 1000),
    async deleteUser({ commit }, payload) {
        try {
            const deleteUserResponse = await this.$axios.delete(`admin/user/delete/${payload}`);
            const userResponse = await this.$axios.get('/admin/users');
            commit('setallUser', userResponse);
        } catch (err) {
            console.log(err);
        }
    },
    async deleteRequest({ commit }, payload) {
        await this.$axios.delete(`/admin/request/delete/${payload}`);
        const requestResponse = await this.$axios.get(`/admin/requests`);
        commit('loadallRequest', requestResponse.data);
        this.$manage.showMessage({ message: '의뢰 취소 완료', color: 'primary' });
    },
    async setState({ commit, state }, payload) {
        try {
            const stateResponse = await this.$axios.post(`/admin/stateSet`, {
                request: payload.request,
                state: payload.state
            });
            console.log(stateResponse);
            const requestResponse = await this.$axios.get(`/admin/requests`, {
                headers: { 'Cache-Control': 'no-cache' }
            });
            commit('loadallRequest', requestResponse.data);
        } catch (err) {
            console.log(err);
        }
    },
    async registToken({}, payload) {
        try {
            const tokenResponse = await this.$axios.post('/admin/regist/token', {
                organization: payload.organization,
                token: payload.token
            });
            
            if (tokenResponse.data === '토큰 등록') {
                return {
                    code: true,
                    message: tokenResponse.data
                };
            } else {
                return {
                    code: false,
                    message: tokenResponse.data
                };
            }
        } catch(err) {
            console.log(err);
        }
    }
}