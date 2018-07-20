<template>
    <div>
        <div>
            <label>Margin:</label>
            <input v-model="n_s.style.margin" @change="update"/>
        </div>
        <div>
            <label>Padding:</label>
            <input v-model="n_s.style.padding" @change="update"/>
        </div>
        <div>
            <label>Background:</label>
            <input v-model="n_s.style.background" @change="update"/>
        </div>
        <div>
            <label>Position:</label>
            <input v-model="n_s.style.position" @change="update"/>
        </div>
        <div>
            <label>Width:</label>
            <input v-model="n_s.style.width" @change="update"/>
        </div>
        <div>
            <label>Height:</label>
            <input v-model="n_s.style.height" @change="update"/>
        </div>
        <div>
            <label>Text:</label>
            <input v-model="n_s.text" @change="update"/>
        </div>
    </div>
</template>
<script>
export default {
    props:['setting'],
    data(){
        return{
            n_s:this.setting
        }        
    },
    methods:{
        update() {
            this.$emit("updateSetting",this.n_s);
        },
    }
}
</script>
