<template>
    <div>        
        <div class="left-content">
            <div class="pages">
                <cus-page v-for="pageinfo in n_pages" :page="pageinfo" :activepage="activepage" :key="pageinfo.id" v-on:actived="actived"></cus-page> 
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
    props:['document'],
    data(){
        return {
            n_pages:this.document.pages,
            activepage:""   
        }
    },
    methods:{
        addPage:function(){            
            this.$emit("addpage",{
                id:new Date().getTime(),
                style:{
                    width:'600px',
                    height:'800px'
                },
                isActive:false,
                children_el:[]
            }); 
        },
        actived:function(pageid){
            console.log(pageid);
            // this.activepage=pageid;
            var index=_.findIndex(this.n_pages, ['id', pageid]);
            var index2=_.findIndex(this.n_pages, 'isActive');
            if(index>-1){            
                this.n_pages[index].isActive=true;
            }
            if(index2>-1){
                this.n_pages[index2].isActive=false;               
            }
            
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
