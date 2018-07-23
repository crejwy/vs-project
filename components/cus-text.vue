<template>
    <label :style="para.exteriorSetting.style" @click.self="actived">
        {{para.exteriorSetting.text}}
    </label>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:['para'],
    data(){
        return{
            location:this.para.location,
            // n_label:Object.assign({text:"change text at right"},this.para)
        }
    },
    methods:{
        ...mapMutations(['activedElement']),
        actived(){
            this.activedElement(this.para.location);
        },
    }  
}
</script>