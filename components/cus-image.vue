<template>
    <img :style="n_img.exteriorSetting.style" :src="n_img.exteriorSetting.src" @click.self="actived">
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:['para'],
    data(){
        return{
            location:this.para.location,
            n_img:this.para
        }
    },
    methods:{
        ...mapMutations(['activedElement']),
        actived(){
            this.activedElement(this.n_img.location);            
        },
    }  
}
</script>
