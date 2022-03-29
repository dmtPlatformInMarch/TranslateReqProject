import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
    createPersistedState({
        paths: ["users", "requests", "manager"],
    })(store)
}