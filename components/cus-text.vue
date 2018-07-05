<template>
    <label :style="n_label.style" @click="activeElementSetting">
        {{n_label.text}}
    </label>
</template>
<script>
export default {
    props:['para'],
    data(){
        return{
            location:"text",
            n_label:para
        }
    },
    methods:{        
        activeElementSetting:function(){ 
            // setting.location.push({location:this.location,id:this.para.id});
            this.$emit("activeElementSetting",{
                    location:[{location:this.location,id:this.para.id}],  
                    name:"base",
                    value:Object.assign(new settingObject.Text(),n_label)
                });
        }
    }  
}
</script>