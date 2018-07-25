import Vue from 'vue';
import Vuex from 'vuex';
import defaultExteriorSetting from '../components/defaultExteriorSetting';

Vue.use(Vuex);


export default new Vuex.Store({
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
            if(state.activedElement==null){
                state.activedElement=state.document;
            }
            state.activedElement.childrenElement.push({
              name:childname,
              id:_.now(),
              isActive:false,
              exteriorSetting:defaultExteriorSetting.CatchPage(childname),
              childrenElement:[]
            });
        },
        changeExteriorSetting:(state,setting)=>{
            if(state.activedElement==null){
                state.activedElement=state.document;
            }
            
            var props=setting.name.split('.');
            var target=state.activedElement.exteriorSetting;
            if(props.length>0){
                let i=0,len=props.length-1;
                for(;i<len;i++){
                    target=target[props[i]];
                }
                Vue.set(target,props[len],setting.value);                
            }
            
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
