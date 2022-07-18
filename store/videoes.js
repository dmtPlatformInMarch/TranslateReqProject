import { throttle } from "lodash";

export const state = () => ({
    file: undefined,
    files: [],
    fileURL: '',
    trackURL: '',
    fileName: '',
    fileExt: '',
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
    setTrackURL(state, payload) {
        state.trackURL = payload;
    },
    setFileName(state, payload) {
        state.fileName = payload;
    },
    setFileExt(state, payload) {
        state.fileExt = payload;
    }
}

export const actions = {
    async signedURL({ commit }, payload) {
        try {
            for (var pair of payload.entries()) {
                //console.log("페이로드 : ", pair[0], pair[1]);
                commit('setFile', pair[1]);
            }
            this.$nuxt.$loading.start();
            const presignedURL = await this.$axios.post('/video/presigned', payload, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                },
            });
            this.$nuxt.$loading.finish();
            //console.log("받아온 URL : ", presignedURL.data);
            return presignedURL.data;
        } catch (err) {
            console.log(err);
        }
    },
    async deleteFile({ state, commit, dispatch }) {
        try {
            const deleteResponse = await this.$axios.delete(`/video/file/delete/${state.fileName}.${state.fileExt}`);
            if (deleteResponse.status === 200) {
                commit('setFile', undefined);
                dispatch('getFiles');
                console.log("삭제 성공");
            } else {
                console.log("삭제 실패");
            }
        } catch (err) {
            console.log(err);
        }
    },
    async setURL({ state, commit }) {
        try {
            await commit('setFileExt', state.file.name.substring(state.file.name.lastIndexOf('.') + 1));
            await commit('setFileName', state.file.name.substring(0, state.file.name.lastIndexOf('.')));
            const url = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(state.file.name)}`;
            const track = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(state.fileName)}.vtt`;
            await commit('setFileURL', url);
            await commit('setTrackURL', track);
        } catch (err) {
            console.log(err);
        }
    },
    async loadTrack({ state, commit }) {
        try {
            const trackResponse = await this.$axios.get(`/video/track/${state.fileName}`);
            if (trackResponse.status === 200) {
                return trackResponse.data;
            } else {
                return '가져오기 실패';
            }
            // .vtt 파일에서 텍스트 추출해서 가져오기
        } catch (err) {
            console.log(err);
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
    }, 500),
    async postVideo({ state, commit }) {
        try {
            const recognition = await this.$axios.post('/video/recognition', {
                "fileURL": state.fileURL
            });
            if (recognition.status === 200) {
                //console.log(recognition.data);
                return recognition.data;
            } else {
                console.log("뭔가 뭔가 에러임!!!");
            }
        } catch (err) {

        }
    }
}

