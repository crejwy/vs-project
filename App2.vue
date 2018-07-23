<template>
    <div>                
        <div class="left-content">
            <div class="setting-orgin " role="group" aria-label="...">     
                <span class="app-name inline-block"   @click="saveDocument()">Simple Word</span>       
                <button type="button" class="btn btn-default" 
                @click="addComponent(c)" v-for="c in effectiveComponents" :key="c">
                <font-awesome-icon icon="coffee" />add{{c}}
                    </button>
            </div>
            <cus-document v-bind:document="$store.state.document"></cus-document>         
        </div>
        <div class="right-content">
            <component :is="curSetting.name" v-bind:setting="curSetting.value"></component>            
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

function catchEffectiveComponents(childname){
    var result=[];
    switch(childname){
        case 'document':result=['page'];break;
        case 'page':result=['text','input','table','image'];break;        
    }
    return result;
}

export default {
    components:{        
        'cus-document':()=>import("./components/cus-document.vue"),
        'base-setting':()=>import("./components/base-setting.vue"),
        'text-setting':()=>import("./components/text-setting.vue"),
        'document-setting':()=>import("./components/document-setting.vue"),
        'page-setting':()=>import("./components/page-setting.vue"),
        'table-setting':()=>import("./components/table-setting.vue"),
        'image-setting':()=>import("./components/image-setting.vue")
    },
    data(){
        return{
           
        }
    },
    computed: {        
         // //获取当前激活元素
        curSetting(){
            let acel=this.$store.getters.activedElement;
            return{
                name:acel.name+"-setting",
                value:acel.exteriorSetting
            }
        },
        effectiveComponents(){
            let acel=this.$store.getters.activedElement;
            return catchEffectiveComponents(acel.name);
        }
    },
    methods:{
        addComponent:function(name){
            this.$store.commit('addComponent',name)
        }, 
        saveDocument(){
            // console.log(this.$store.state.document);
            console.log(this.lowsetting);
            
        }
    }
    
    
}
</script>



<style>
    .inline-block{
        display:inline-block;
    }
    .left-content{
        left:0;
        padding-top:50px;
        margin:0;
        width:80%;
        height:100%;
        background:inherit;
        float:left;
        overflow:auto;
        
    }
    .right-content{
        top:50px;
        width:20%;
        height:100%;
        position:fixed;
        right:0;
        background:gainsboro;
        overflow: auto;
    }
    .app-name{
        line-height:30px;width:100px;border:solid 1px;color:#fff;background:blue;
    }
    .setting-orgin{
        width:100%;
        height: 50px;
        position: fixed;
        z-index: 999;
        background: indigo;
        top: 0;
    }
    
    
</style>