import sortBy from '../utils/sortBy';
import ApiService from '../api.serivce';

const state = {
    cars: [],
    loading: false,
    filters: {
        minPrice: 0,
        maxPrice: 2000
    },
    sortBy: 'priceAsc',
    maxPrice: 0,
    minPrice: 0,
}

export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
export const FETCH_CAR_BY_ID = 'FETCH_CAR_BY_ID';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';
export const SET_SORT_BY = 'SET_SORT_BY';
export const RESET_FILTERS = 'RESET_FILTERS';
const FETCH_START = 'FETCH_START';
const SET_CARS = 'SET_CARS';
const FETCH_END = 'FETCH_END';

const getters = {
    getCars(state) {
        const filtredCars = state.cars.filter(car => {
            return car.pricing.price >= state.filters.minPrice && car.pricing.price <= state.filters.maxPrice;
        });
        return sortBy(filtredCars, state.sortBy);
    },
    isLoading(state) {
        return state.loading
    },
    maxPrice(state) {
        return state.maxPrice;
    },
    filters(state) {
        return state.filters;
    },
    minPrice(state) {
        return state.minPrice;
    },
    sortBy(state) {
        return state.sortBy;
    }
}

const actions = {
    async [FETCH_PORTFOLIO]({ commit }) {
        commit(FETCH_START)
        const { data } = await ApiService.fetchPortfolio();
        commit(FETCH_END)
        commit(SET_CARS, { ...data.data })
    },
    async [FETCH_CAR_BY_ID]({ commit }, id) {
        commit(FETCH_START)
        const result = await ApiService.fetchCarById(id);
        commit(FETCH_END)
        return result;
    }
}

const mutations = {
    [FETCH_START](state) {
        state.loading = true;
    },
    [SET_FILTER_VALUE](state, { field, value }) {
        state.filters[field] = value;
    },
    [SET_SORT_BY](state, value) {
        state.sortBy = value;
    },
    [RESET_FILTERS](state) {
        state.filters = { maxPrice: state.maxPrice, minPrice: state.minPrice };
    },
    [FETCH_END](state) {
        state.loading = false;
    },
    [SET_CARS](state, { cars, maxPrice, minPrice }) {
        state.cars = cars;
        state.maxPrice = maxPrice;
        state.minPrice = minPrice;
        state.filters.maxPrice = maxPrice
        state.filters.minPrice = minPrice
    },
}

export default { actions, mutations, getters, state }
