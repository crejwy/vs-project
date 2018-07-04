<template>
    <div class="page" :class="{ active: n_page.isActive }" :id="n_page.id" :style="n_page.style" v-on:click="actived">
        <component :is="childel.component" v-for="childel in n_page.children_el" :key="childel.id"></component>
    </div>
</template>
<script>


export default {
    props:['page','activepage'],
    data(){
        return {
            n_page:this.page,
            n_activepage:this.activepage
        }
    },
    computed:{
        isActive:function(){
            return this.n_activepage==this.n_page.id;
        }
        
    },
    methods:{
        actived:function(){            
            this.$emit("actived",this.n_page.id)
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
        &:hover{
            outline: @page-border;
        }

        &.active{
            outline: @page-border;
        }
    }
    
</style>