<template>
    <div class="page" :class="{ active: n_page.isActive }" :id="n_page.id" :style="n_page.style" v-on:click.self="actived">
        <component :is="childel.component" v-for="childel in n_page.children_el" :para="childel" :key="childel.id"  v-on:activeElementSetting="activeElementSetting"></component>
    </div>
</template>
<script>
import settingObject from "./f-setting"
// page={
//     id:new Date().getTime(),
//     style:{
//         width:'600px',
//         height:'800px'
//     },
//     isActive:false,
//     children_el:[]
// }
export default {
    components:{
        'cus-icon':()=>import ('./cus-icon.vue'),
        'cus-image':()=>import ('./cus-image.vue'),
        'cus-input':()=>import ('./cus-input.vue'),
        'cus-text':()=>import ('./cus-text.vue'),
        'cus-table':()=>import ('./cus-table.vue')
    },
    props:['page'],
    data(){
        return {
            n_page:this.page,
            location:"Page" 
        }
    },
    computed:{        
    },
    methods:{
        actived:function(){            
            this.$emit("actived",this.n_page.id);         
            this.activeElementSetting({
                    location:[],  
                    name:"base",
                    value:Object.assign(settingObject.Base,{style:this.n_page.style})
                })
        },
        activeElementSetting:function(setting){ 
            console.log(this.location+' activeElementSetting');
            setting.location.push({location:this.location,id:this.n_page.id});
            console.log(setting);
            this.$emit("activeElementSetting",setting);
        }
    }    
}

</script>

<style lang="less">   
    @page-border:solid 1px #808080;
    .page{
        position: relative;
        background: white;
        margin: 10px auto;
        z-index: 1;
        padding-top: 10px; 
        overflow: hidden;
        &:hover{
            outline: @page-border;
        }

        &.active{
            outline: @page-border;
        }
    }
    
</style>