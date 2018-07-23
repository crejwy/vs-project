<template>
    <div>        
        <span class="app-name inline-block"   @click="saveDocument()">Simple Word</span>       
        <text-setting v-bind:setting="lowsetting"></text-setting>
    </div>
</template>

<script>


export default {
    components:{        
        'text-setting':()=>import("./components/text-setting.vue")
    },
    data(){
        return{
            lowsetting:{
                style:{
                    margin:"",
                    padding:"",
                    background:"",
                    width:"",
                    height:"",
                    position:""
                },
                text:"phahah"
            }
        }
    },
    methods:{
        saveDocument:function(){
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
