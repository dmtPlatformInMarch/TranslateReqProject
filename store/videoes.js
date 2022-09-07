import { throttle } from "lodash";

export const state = () => ({
    file: undefined,
    files: [],
    fileURL: '',
    trackURL: '',
    fileName: '',
    fileExt: '',
    loading: 0
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
    },
    setUploadPercent(state, payload) {
        state.loading = payload;
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
                return "삭제 성공";
            } else {
                return "삭제 실패";
            }
        } catch (err) {
            console.log(err);
        }
    },
    async setURL({ state, commit }) {
        try {
            let url;
            let track;
            if (state.file != undefined || state.fileExt === '' || state.fileName === '') {
                await commit('setFileExt', state.file.name.substring(state.file.name.lastIndexOf('.') + 1));
                await commit('setFileName', state.file.name.substring(0, state.file.name.lastIndexOf('.')));
                url = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(state.file.name)}`;
                track = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(state.fileName)}.vtt`;
            } else {
                url = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/videoes/${encodeURI(state.fileName)}.${state.fileExt}`;
                track = `https://dmtlabs-files.s3.ap-northeast-2.amazonaws.com/tracks/${encodeURI(state.fileName)}.vtt`;
            }
            
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
                "fileName": state.fileName,
                "fileURL": state.fileURL,
                "ext": payload ? payload.mode : 'vtt'
            });

            if (recognition.status === 200) {
                return recognition.data;
            } else {
                console.log("비디오 인식 실패");
            }
        } catch (err) {
            console.log(err);
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
    },
    // realTrack 자막 번역
    async textToTrans({  }, payload) {
        try {
            const transTrack = await this.$axios.post('/video/track/format', {
                "from": payload.from,
                "to": payload.to,
                "track": payload.track,
                "timeline": payload.timeline,
                "mode": payload.mode
            });
            return transTrack.data;
        } catch (err) {

        }
    },
    // fileTrack 자막 번역
    async transTrack({  }, payload) {
        try {
            // payload의 text속성을 추출
            const tracks = payload.track.map(({ text }) => text);
            const transResponse = await this.$axios.post('/video/track/trans', {
                "from": payload.from,
                "to": payload.to,
                "track": tracks
            });
            // transResponse JSON
            // from, to, translation
            return transResponse.data?.translations;
        } catch(err) {

        }
    }
}

