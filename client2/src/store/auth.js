import axios from 'axios';

export default {
    namespaced: true,
    state: {
        user: null,
        role: 0,
        isLoggedIn: false,
        showLogout: false
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${
                userData.token
            }`
            console.log(userData.token)
        },
        SAVE_ROLE(state, payload) {
            state.role = payload;
            state.showLogout = true
            state.isLoggedIn = true
        },
        SET_STATE_TO_DEFAULT(state) {
            state.role = 0;
            state.showLogout = false
            state.isLoggedIn = false
        }
    },
    actions: {
        login ({commit}, credentials) {
            return axios.post('http://localhost:3333/api/v0/auth/login', credentials)
                .then(({data}) => {
                    commit('SET_USER_DATA', data)
                })
        },
        saveRoleToStore({commit}, data) {
            commit("SAVE_ROLE", data)
        },
        processLogout({commit}) {
            commit("SET_STATE_TO_DEFAULT")
        }
    }
}