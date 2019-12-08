import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";


const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
    },
    fetchPortfolio(){
        return Vue.axios.get('/api/portfolio')
    },
    fetchCarById(id){
        return Vue.axios.get(`/api/portfolio/${id}`)
    }
}

export default ApiService;