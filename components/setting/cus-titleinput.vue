<template>
    <div>
        <label>{{n_displayname}}</label>
        <input :value="getValue"  @change="change"/>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:['displayname','name','value'],
    data(){
        return{
            n_displayname:this.displayname,
            n_value:this.value,
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
            this.changeExteriorSetting({
                name:this.n_name,
                value:event.target.value==""?"auto":event.target.value
            })
        }
    }
}
</script>
