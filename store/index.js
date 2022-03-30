export const state = () => ({});

export const mutations = {};

export const actions = {
    // 서버 사이드 렌더링
    // 모든 페이지에서 그려지기 전에 실행되는 명령
    // 서버로부터 사용자 데이터를 가져옴.
    async nuxtServerInit({ commit, dispatch, state }, { req }) {
        try {
            dispatch('users/loadUser');
        } catch (err) {
            console.log(err);
        }
    },
};