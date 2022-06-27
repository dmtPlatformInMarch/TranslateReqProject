export const state = () => ({
    file: undefined,
    fileText: ""
});

export const mutations = {
    setFile(state, payload) {
        state.file = payload;
    },
    setFileText(state, payload) {
        state.fileText = payload;
    }
}

export const actions = {
    async signedURL({ commit }, payload) {
        try {
            for (var pair of payload.entries()) {
                //console.log("페이로드 : ", pair[0], pair[1]);
                commit('setFile', pair[1]);
            }
            const presignedURL = await this.$axios.post('/test/presigned', payload, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                },
            });
            //console.log("받아온 URL : ", presignedURL.data);
            return presignedURL.data;
        } catch (err) {
            console.log(err);
        }
    },
    async deleteFile({ state, commit }) {
        try {
            const deleteResponse = await this.$axios.delete(`/test/file/delete/${state.file.name}`);
            if (deleteResponse.status === 200) {
                commit('setFile', undefined);
                commit('setFileText', '');
            } else {
                console.log("삭제 실패");
            }
        } catch (err) {
            console.log(err);
        }
    },
    async extract({ state, commit }) {
        try {
            const extractResponse = await this.$axios.get(`/test/file/extract/${state.file?.name}`);
            commit('setFileText', extractResponse.data);
        } catch (err) {
            console.log(err);
        }
    }
}