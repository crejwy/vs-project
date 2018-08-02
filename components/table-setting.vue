<template>
    <div>
        <basicstyle v-bind:mystyle="setting.style"></basicstyle>
    </div>
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


