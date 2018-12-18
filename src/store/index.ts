import Vue from 'vue';
import Vuex from 'vuex';

// modules
import * as user from '@/store/modules/user';

Vue.use(Vuex);

export interface Rootstate {
  user: user.UserState;
}

export default new Vuex.Store<Rootstate>({
  modules: {
    user: user.store,
  },
});
