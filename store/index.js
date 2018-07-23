// import 'es6-promise/auto';

import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        document:{      
            name:'document',
            childrenElement:[],
            exteriorSetting:{},
            defaultSetting:{
                pageSize:{
                    width:'600px',
                    height:'800px',
                    background:'white'
                }        
            }
        },        
        
        // activeSetting:{},
        effectiveComponents:[{
            name:"page"
        }],
        activedElement:null
    },
    mutations: {        
        //添加新元素
        addComponent:(state,childtype)=>{
            store.getters.activedElement.childrenElement.push({
              name:childtype,
              id:_.now()
            });
        },
        //设置当前激活元素
        activedElement:(state,target)=>{
            state.activedElement=target;
        }
    },
    getters:{        
        //获取默认的页属性
        defaultPageSize:state=>{
            return state.document.defaultSetting.pageSize;
        },
        //获取当前激活元素
        activedElement:state=>{return state.activedElement==null?state.document:state.activedElement;},
        // //获取当前激活元素外观属性
        // curexteriorSetting:(state,getters)=>{
        //     let acel=getters.activedElement;
        //     return{
        //         name:acel.name+"setting",
        //         value:acel.exteriorSetting
        //     };
        // },      
    }
});

