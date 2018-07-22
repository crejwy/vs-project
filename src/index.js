import './style.css';
import _ from 'lodash';
// import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'es6-promise/auto';
import Vuex from 'vuex';

Vue.use(Vuex);
library.add(faCoffee);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();    
  });
}

import App from "../App2.vue";
// import App from "../App.vue";

const store = new Vuex.Store({
  state: {
    document:{      
      name:'document',
      childrenElement:[],
      defaultSetting:{
        pageSize:{
          width:'600px',
          height:'800px',
          background:'white'
        }        
      }
    },
    activeLocation:this.state.document,
    activeSetting:{},
    effectiveComponents:[{
      name:"page"
    }]
  },
  mutations: {
    addComponent(childtype){
      this.state.activeLocation.childrenElement.push({
        name:childtype,
        id:_.now()
      });
    },
    activedElement(ele){

    }
  },
  getters: {
    // defaultPageSize:state=>{
    //   return state.document.defaultSetting.pageSize;
    // },
    document: (state,getters) => {
      // let doc=state.document;
      // if(doc.childrenElement.length==0){
      //   doc.childrenElement.push(
      //     {
      //       id:_.now,
      //       name:"page",
      //       // location:[{location:"Page",id:this.document.activepage}],
      //       isActive:true,
      //       // exteriorSetting:Object.assign({},getters.defaultPageSize),
      //       childrenElement:[]                      
      //     }          
      //   );
      // }
      return state.document;
    }
  }
});



new Vue({
  el:"#app",
  components:{App},
  store,
  methods:{
    saveDocument:function(doc){
      console.log(doc);
    }
  }
});

// new Vue({
//   el:"#app",
//   components:{App},
//   data:{
//     document:{
//       pages:[{
//         id:"firstpage",
//         style:{
//             width:'600px',
//             height:'800px'
//         },
//         isActive:false,
//         children_el:[]
//       },{
//         id:"secondpage",
//         style:{
//             width:'600px',
//             height:'800px'
//         },
//         isActive:false,
//         children_el:[]
//       },{
//         id:"thirdpage",
//         style:{
//             width:'600px',
//             height:'800px'
//         },
//         isActive:false,
//         children_el:[]
//       }],
//       activepage:"secondpage",
//       saveDocument:function(doc){
//         console.log(doc);
//       }
//     }
//   },
//   methods:{
//     saveDocument:function(doc){
//       console.log(doc);
//     }
//   }
// });