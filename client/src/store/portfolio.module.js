import axios from 'axios';

const state = {
    cars: [],
    loading: false,
    filters: {}
}

export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
const FETCH_START = 'FETCH_START';
const FETCH_END = 'FETCH_END';

const getters = {
    getCars(state) {
        return state.cars;
    },
    isLoading(state) {
        return state.loading
    }
}

const actions = {
    async [FETCH_PORTFOLIO]({ commit }) {
        commit(FETCH_START)
        const { data } = await axios.get('/api/portfolio')
        commit(FETCH_END, { cars: data.data })
    }
}

const mutations = {
    [FETCH_START](state) {
        state.loading = true;
    },
    [FETCH_END](state, { cars }) {
        state.cars = cars;
        state.loading = false;
    },
}

export default { actions, mutations, getters, state }
