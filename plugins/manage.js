// 스낵바 플러그인
export default ({ app, store }, inject) => {
    inject('manage', {
        showMessage({ message = '', color = '' }) {
            store.commit('manager/showMessage', { message, color });
        },
        setLanguage({ language = '' }) {
            store.commit('manager/setLanguage', language);
        },
        startLoading() {
            store.commit('manager/startLoading');
        },
        endLoading() {
            store.commit('manager/endLoading');
        }
    })
}