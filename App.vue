<template>
    <div>        
        <div class="left-content">
            <div class="pages">
                <cus-page v-for="pageinfo in n_pages" :page="pageinfo" :key="pageinfo.id"></cus-page> 
            </div>
        </div>
        <div class="right-content">
            <span class="app-name inline-block" >Simple Word</span>            
            <button @click="addPage">添加新页</button>
        </div>
    </div>
</template>

<script>
import page from "./components/cus-page.vue"
export default {
    components:{        
        'cus-page':page
    },
    props:["pages"],
    data(){
        return {
            n_pages:this.pages        
        }
    },
    methods:{
        addPage:function(){            
            this.$emit("addpage")
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
        background:gainsboro;
    }
    .app-name{
        line-height:30px;width:100px;border:solid 1px;color:#fff;background:blue;
    }
    
</style>
