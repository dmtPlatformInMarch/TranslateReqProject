// 스낵바 플러그인
export default ({ app, store }, inject) => {
    inject('manage', {
        showMessage({ message = '', color = '' }) {
            store.commit('manager/showMessage', { message, color });
        },
        setLanguage({ language = '' }) {
            store.commit('manager/setLanguage', language);
        },
    })
}