import Vue from 'vue'
import VueX from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(VueX);

const state = {
    userInfo: '',
    cartCount: 0
};

export default new VueX.Store({
    state,
    mutations,
    actions
})