<template>
    <div class="document" >
        <div class="pages"  @click.self="actived()">
            <cus-page v-for="pageinfo in pages" :page="pageinfo" :key="pageinfo.id"></cus-page> 
        </div>
    </div>
</template>
<script>
import page from "./cus-page.vue"
import { mapMutations } from 'vuex'
   

export default {
    components:{        
        'cus-page':page
    },
    props:['document'],
    data(){
        return{
           location:[],
           effectiveComponents:[]
        }         
    },
    computed: {
        pages(){
            var pages=this.document.childrenElement.map(x=>Object.assign(x,{
                location:_.concat(this.location,x.id)                
            }));
            return pages;
        }
    },
    methods:{
        ...mapMutations(['activedElement']),
        actived(){
            this.activedElement(this.location);
        }
    }
    
}
</script>
<style lang="less">
    
</style>

