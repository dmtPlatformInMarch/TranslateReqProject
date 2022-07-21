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
        state.file = Object.freeze(payload);
    },
    setFiles(state, payload) {
        state.files = Object.freeze(payload);
    },
    setFileURL(state, payload) {
        state.fileURL = Object.freeze(payload);
    },
    setTrackURL(state, payload) {
        state.trackURL = Object.freeze(payload);
    },
    setFileName(state, payload) {
        state.fileName = Object.freeze(payload);
    },
    setFileExt(state, payload) {
        state.fileExt = Object.freeze(payload);
    }
}

export const actions = {
    async signedURL({ commit }, payload) {
        try {
            for (var pair of payload.entries()) {
                //console.log("페이로드 : ", pair[0], pair[1]);
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
    async postVideo({ state, commit }, payload) {
        try {
            const recognition = await this.$axios.post('/video/recognition', {
                "fileURL": state.fileURL,
                "ext": payload
            });
            if (recognition.status === 200) {
                //console.log(recognition.data);
                return recognition.data;
            } else {
                console.log("비디오 인식 실패");
            }
        } catch (err) {

        }
    },
    async textToTrack({ state, commit }, payload) {
        try {
            const createTrack = await this.$axios.post('/video/track/create', {
                "fileName": state.fileName,
                "track": payload.track,
                "ext": payload.ext
            });
            if (createTrack.status === 200) {
                return createTrack.data;
            } else {
                return "업로드 에러";
            }
        } catch (err) {
            console.log("트랙 만들기 실패");
        }
    }
}

