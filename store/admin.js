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
    async loadReq({ commit }) {
        try {
            const requestResponse = await this.$axios.get(`/admin/requests`);
            commit('loadallRequest', requestResponse.data);
        } catch (err) {
            console.log(err);
        }
    },
    async loadUser({ commit, state }) {
        try {
            const userResponse = await this.$axios.get('/admin/users');
            commit('setallUser', userResponse);
            if (userResponse != state.allUser) this.$manage.showMessage({ message: '유저 정보를 업데이트했습니다.', color: 'success' });
            else this.$manage.showMessage({ message: '이미 최신 정보입니다.', color: 'amber darken-1' });
        } catch (err) {
            console.log(err);
        }
    },
    // 파일을 다운로드 하는 기능 구현 필요
    async download({ commit }, payload) {
        try {
            console.log(payload);
            // const fileResponse = await this.$axios.get(`/admin/file/${payload}`);
        } catch (err) {
            console.log(err);
        }
    },
    async deleteUser({ commit }, payload) {
        try {
            const deleteUserResponse = await this.$axios.delete(`admin/user/delete/${payload}`);
            console.log('유저 강제 탈퇴');
        } catch (err) {
            console.log(err);
        }
    },
}