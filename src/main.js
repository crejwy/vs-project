// import _ from 'lodash';
// import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);


import {store} from '../store';
import App from "../App2.vue";

new Vue({
    el:"#app",
    components:{App},
    store
});