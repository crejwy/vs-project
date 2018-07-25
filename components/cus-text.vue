<template>
    <label :style="n_label.exteriorSetting.style" @click.self="actived">
        {{n_label.exteriorSetting.text}}
    </label>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:['para'],
    data(){
        return{
            location:this.para.location,
            n_label:this.para
        }
    },
    methods:{
        ...mapMutations(['activedElement']),
        actived(){
            this.activedElement(this.n_label.location);
            // this.$forceUpdate();
        },
    }  
}
</script>