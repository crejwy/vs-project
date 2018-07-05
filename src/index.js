import './style.css';
import _ from 'lodash';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();    
  });
}

import App from "../App.vue";
new Vue({
  el:"#app",
  components:{App},
  data:{
    document:{
      pages:[{
        id:"firstpage",
        style:{
            width:'600px',
            height:'800px'
        },
        isActive:false,
        children_el:[]
      },{
        id:"secondpage",
        style:{
            width:'600px',
            height:'800px'
        },
        isActive:false,
        children_el:[]
      },{
        id:"thirdpage",
        style:{
            width:'600px',
            height:'800px'
        },
        isActive:false,
        children_el:[]
      }],
      activepage:"secondpage",
      saveDocument:function(doc){
        console.log(doc);
      }
    }
  },
  methods:{
    saveDocument:function(doc){
      console.log(doc);
    }
  }
});