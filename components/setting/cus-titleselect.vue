<template>
    <div>
        <label>{{n_displayname}}</label>
        <select v-bind:value="getValue"  @change="change" style="width: 100px;">
            <option>relative</option>
            <option>absolute</option>
        </select>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:['displayname','name','value'],
    data(){
        return{
            n_displayname:this.displayname,
            // selected:this.value,
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
                value:event.target.value
            })
        }
    }
}
</script>
