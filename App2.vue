<template>
    <div>        
        <div class="btn-group-vertical " role="group" aria-label="...">            
            <button type="button" class="btn btn-default" 
            @click="addComponent('{{c.name}}}')" v-for="c in effectiveComponents" :key="c.name">
            <font-awesome-icon icon="coffee" />add{{c.name}}
                </button>
        </div>
        <div class="left-content">
            <cus-document v-bind:document="getDocument"></cus-document>
        </div>
        <div class="right-content">
            <span class="app-name inline-block" >Simple Word</span>    

            <component :is="curSetting.name" v-bind:setting="curSetting.value"></component>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    components:{        
        'cus-document':()=>import("./components/cus-document.vue"),
        'base-setting':()=>import("./components/base-setting.vue"),
        'text-setting':()=>import("./components/text-setting.vue"),
        'document-setting':()=>import("./components/document-setting.vue")
    },
    data(){
        return{

        }
    },
    computed: {
        getDocument(){
            return this.$store.getters.document;
        },
        curSetting(){
            let acel=this.$store.getters.activedElement;
            return{
                name:acel.name+"setting",
                value:acel.exteriorSetting
            }
        },
        effectiveComponents(){
            return this.$store.state.effectiveComponents;
        }
    },
    methods:{
        addComponent:function(name){
            this.$store.commit('addComponent',page)
        }, 
    }
    
    
}
</script>



<style>
    .inline-block{
        display:inline-block;
    }
    .left-content{
        left:0;
        top:0;
        margin:0;
        width:80%;
        height:100%;
        background:inherit;
        float:left;
        overflow:auto;
    }
    .right-content{
        top:0;
        width:20%;
        height:100%;
        position:fixed;
        right:0;
        /* background:gainsboro; */
    }
    .app-name{
        line-height:30px;width:100px;border:solid 1px;color:#fff;background:blue;
    }
    
</style>