<template>
    <div class="page" :class="{ active: n_page.isActive }" :id="n_page.id" :style="n_page.exteriorSetting.style" v-on:click.self="actived">
        <component :is="catchComponentName(childel.name)" v-for="childel in childComponents" :para="childel" :key="childel.id"></component>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'

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
            location:this.page.location
        }
    },
    computed:{
        childComponents(){
            var childrenElements=this.n_page.childrenElement.map(x=>Object.assign(x,{
                location:_.concat(this.location,x.id)                
            }));
            // console.log(childrenElement);
            return childrenElements;
        }        
    },
    methods:{
        ...mapMutations(['activedElement']),
        actived(){
            this.activedElement(this.n_page.location);
        },
        catchComponentName(name){
            return "cus-"+name;
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