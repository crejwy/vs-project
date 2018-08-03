// import _ from 'lodash';
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee,faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
library.add({ faCoffee,faArrowsAlt });

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false

import store from '../store/index';
import App from "../App.vue";

new Vue({
    el:"#app",
    components:{App},
    store
});
