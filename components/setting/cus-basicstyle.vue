<template>
    <div>
        <cusInput v-if="mystyle.margin" displayname="外边距" name="style.margin" v-bind:value="mystyle.margin"></cusInput>    
        <cusInput v-if="mystyle.padding" displayname="内边距" name="style.padding" v-bind:value="mystyle.padding"></cusInput>
        <cusInput displayname="背景色" name="style.background" v-bind:value="mystyle.background"></cusInput>    
        <cusInput v-if="mystyle.width" displayname="宽度" name="style.width" v-bind:value="mystyle.width"></cusInput> 
        <cusInput v-if="mystyle.height" displayname="高度" name="style.height" v-bind:value="mystyle.height"></cusInput> 
        <cusInput v-if="mystyle.border" displayname="边框" name="style.border" v-bind:value="mystyle.border"></cusInput>
        <cusSelect v-if="mystyle.position" displayname="Position" name="style.position" v-bind:value="mystyle.position"></cusSelect> 
        <cusInput v-if="mystyle.top" displayname="Top" name="style.top" v-bind:value="mystyle.top"></cusInput>        
        <cusInput v-if="mystyle.left" displayname="left" name="style.left" v-bind:value="mystyle.left"></cusInput>
        <cusInput v-if="mystyle.right" displayname="right" name="style.right" v-bind:value="mystyle.right"></cusInput>
        <cusInput v-if="mystyle.bottom" displayname="bottom" name="style.bottom" v-bind:value="mystyle.bottom"></cusInput>
        <cusInput v-if="mystyle.opacity" displayname="透明度" name="style.opacity" v-bind:value="mystyle.opacity"></cusInput>
           
    </div>
</template>
<script>

export default {
    components:{
        cusInput:()=>import ('./cus-titleinput.vue'),
        cusSelect:()=>import ('./cus-titleselect.vue')
    },
    props:['mystyle']
}
</script>

