<template>
    <basicstyle v-bind:mystyle="setting.style"></basicstyle>
</template>
<script>
import basicstyle from './setting/cus-basicstyle.vue'
export default {
    components:{
        basicstyle
    },
    props:['setting']    
}
</script>
