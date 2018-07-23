// import _ from 'lodash';
// import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);


// import {store} from '../store';
import App from "../App.vue";
import defaultExteriorSetting from "../components/defaultExteriorSetting";
import Vuex from 'vuex';
Vue.use(Vuex);
const store=new Vuex.Store({
    state: {
        document:{      
            name:'document',
            childrenElement:[],
            exteriorSetting:{}
           
        },        
        
        activedElement:null
    },
    mutations: {        
        //添加新元素
        addComponent:(state,childname)=>{
            // console.log(store.getters.activedElement);
            store.getters.activedElement.childrenElement.push({
              name:childname,
              id:_.now(),
              isActive:false,
              exteriorSetting:defaultExteriorSetting.CatchPage(childname),
              childrenElement:[]
            });
        },
        //设置当前激活元素
        activedElement:(state,location)=>{            
            if(state.activedElement && state.activedElement.id==_.last(location)) return;
            // console.log(location);
            let ele=state.document;      
            for(let j = 0,len=location.length; j < len; j++) {
                var id=location[j];
                let index=_.findIndex(ele.childrenElement, ['id', id]); 
                ele=ele.childrenElement[index];
                // console.log(ele);
            }
            state.activedElement=ele;
        }
    },
    getters:{        

        //获取当前激活元素
        activedElement:state=>{return state.activedElement==null?state.document:state.activedElement;},
          
    }
});


new Vue({
    el:"#app",
    components:{App},
    // store
});