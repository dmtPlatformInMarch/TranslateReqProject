export const state = () => ({
    language: '한국어',
    snackBar: {
        message: '',
        color: '',
    }
});

export const mutations = {
    showMessage(state, payload) {
        state.snackBar.color = payload.color || primary;
        state.snackBar.message = payload.message;
    },
    setLanguage(state, payload) {
        state.language = payload || '한국어';
    }
}

export const actions = {

}