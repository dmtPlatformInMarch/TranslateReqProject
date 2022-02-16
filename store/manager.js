export const state = () => ({
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
}

export const actions = {

}