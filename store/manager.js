import https from "https";

export const state = () => ({
    language: '한국어',
    snackBar: {
        message: '',
        color: '',
    },
    translateTest : {
        from: '',
        to: '',
        text: ''
    },
    translateText: '',
});

export const mutations = {
    showMessage(state, payload) {
        state.snackBar.color = payload.color || primary;
        state.snackBar.message = payload.message;
    },
    setLanguage(state, payload) {
        state.language = payload || '한국어';
    },
    setTest(state, payload) {
        state.translateTest.from = payload.from;
        state.translateTest.to = payload.to;
        state.translateTest.text = payload.text;
    },
    setTranslate(state, payload) {
        state.translateText = payload;
    }
}

export const actions = {
    async Test({ commit }, payload) {
        try {
            // agent로 무시해보려고 했지만 되지 않음.
            const agent = new https.Agent({
                rejectUnauthorized: false
            });
            const res = await this.$axios.post('http://dmtcloud.kr:3535/translate-text', {
                from: payload.from,
                to: payload.to,
                text: payload.text,
            }, {
                httpsAgent: agent,
                progress: false,
            });
            if (payload.returnValue) return res.data[0].translations
            else {
                commit('setTest', payload);
                commit('setTranslate', res.data[0].translations);
                console.log(res.data[0].translations);
            }
        } catch(err) {
            console.log(err);
        }
        
    },
    async textExtract({ commit, state }, payload) {
        const ext = payload.file.name.substring(payload.file.name.lastIndexOf('.') + 1, payload.file.name.length).toLowerCase();
        let fileExtract = '';
        console.log("확장자 : " + ext);
        try {
            if (ext === 'docx') {
                const formdata = new FormData();
                formdata.append('extFile', payload.file);
                const docxres = await this.$axios.post('/extract/docx', formdata, {
                    headers: {
                        "Content-Type" : "multipart/form-data"
                    },
                });
                return docxres.data;
            } else if (ext === 'pdf') {
                const formdata = new FormData();
                formdata.append('extFile', payload.file);
                const pdfres = await this.$axios.post('/extract/pdf', formdata, { progress: false });
                if (pdfres.status === 400) {
                    return 'error';
                }
                fileExtract = await this.$axios.post('http://dmtcloud.kr:3535/translate-text', {
                    from: 'ko',
                    to: payload.to,
                    text: pdfres.data,
                }, { progress: false });
                return fileExtract.data[0].translations;
            }
        } catch(err) {
            console.log(err);
        }
    }
}