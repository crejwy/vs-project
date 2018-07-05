<template>
    <label :style="n_label.style" @click.self="activeElementSetting">
        {{n_label.text}}
    </label>
</template>
<script>
import settingObject from "./f-setting"
export default {
    props:['para'],
    data(){
        return{
            location:"text",
            n_label:Object.assign({text:"change text at right"},this.para)
        }
    },
    methods:{        
        activeElementSetting:function(){ 
            // setting.location.push({location:this.location,id:this.para.id});
            console.log(this.location);
            this.$emit("activeElementSetting",{
                    location:[{location:this.location,id:this.n_label.id}],  
                    name:"text",
                    value:this.n_label
                });
        }
    }  
}
</script>