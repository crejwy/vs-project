<template>
    <div>        
        <basicstyle v-bind:mystyle="setting.style"></basicstyle>
        <cusInput displayname="内容" name="text" v-bind:value="setting.text"></cusInput>         
    </div>
</template>

<script>
import basicstyle from './setting/cus-basicstyle.vue'
import cusInput from './setting/cus-titleinput.vue'
export default {
    components:{
        basicstyle,cusInput
    },
    props:['setting']    
}
</script>



