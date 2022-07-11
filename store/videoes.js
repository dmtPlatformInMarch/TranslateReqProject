import { throttle } from "lodash";

export const state = () => ({
    file: undefined,
    files: [],
    fileURL: '',
});

export const mutations = {
    setFile(state, payload) {
        state.file = payload;
    },
    setFiles(state, payload) {
        state.files = payload;
    },
    setFileURL(state, payload) {
        state.fileURL = payload;
    },
}

export const actions = {
    async signedURL({ commit }, payload) {
        try {
            for (var pair of payload.entries()) {
                //console.log("페이로드 : ", pair[0], pair[1]);
                console.log(pair[1]);
                commit('setFile', pair[1]);
            }
            const presignedURL = await this.$axios.post('/video/presigned', payload, {
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
    async deleteFile({ state, commit, dispatch }) {
        try {
            if (state.file?.name != undefined) {
                const deleteResponse = await this.$axios.delete(`/video/file/delete/${state.file.name}`);
                if (deleteResponse.status === 200) {
                    commit('setFile', undefined);
                    dispatch('getFiles');
                    console.log("삭제 성공");
                } else {
                    console.log("삭제 실패");
                }
            }
        } catch (err) {
            console.log(err);
        }
    },
    async setURL({ state, commit }) {
        try {
            const url = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(state.file.name)}`
            await commit('setFileURL', url);
        } catch (err) {

        }
    },
    getFiles: throttle( async function ({ commit }) {
        try {
            const listResponse = await this.$axios.get('/video/file/list');
            if (listResponse.status === 200) {
                commit('setFiles', listResponse.data);
            } else {
                console.log('파일 목록 가져오기 실패');
            }
        } catch (err) {
            console.log(err);
        }
    }, 1000),
}

