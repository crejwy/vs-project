<template>
    <div>
        <div class="pages">
            <cus-page v-for="pageinfo in pages" :page="pageinfo" :key="pageinfo.id" @click="activedElement('{{pageinfo.id}}')"></cus-page> 
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
           location:"Document",
           pages:this.document.childrenElement,
           effectiveComponents:[]
        }         
    },
    computed: {
        
    },
    methods:{
        ...mapMutations(['activedElement']),
        activedElement(id){
            this.activedElement({
                name:"document",
                id:id
            });
        }
    }
    
}
</script>

