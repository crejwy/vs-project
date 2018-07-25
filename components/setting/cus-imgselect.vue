<template>
    <div>
        <label>{{n_displayname}}</label>
        <input   type="file" :src="getValue"  @change="change"/>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:['displayname','name','value'],
    data(){
        return{
            n_displayname:this.displayname,
            // n_value:this.value,
            n_name:this.name
        }
    },
    computed:{
        getValue(){
            return this.value;
        }
    },
    methods:{
        ...mapMutations(['changeExteriorSetting']),
        change(event){
            var files = event.target.files || event.dataTransfer.files;
            if (!files.length)                return;
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            let  vm=this;
            reader.onload = (e) => {
                vm.changeExteriorSetting({
                    name:vm.n_name,
                    value:e.target.result
                })
            };            
        }
    }
}
</script>
