<template>
    <div>
        <basicstyle v-bind:mystyle="setting.style"></basicstyle>
        <cusImgselect displayname="SrcSelect" name="src" v-bind:value="setting.src"></cusImgselect>  

        <!-- <label>背景图</label>
        <input type="file"  @change="onFileChange">
        <img v-if="image" :src="image"/> -->
    </div>  
</template>

<script>
import basicstyle from './setting/cus-basicstyle.vue'
import cusImgselect from './setting/cus-imgselect.vue'
export default {
    components:{
        basicstyle,cusImgselect
    },
    props:['setting'],    
    // methods:{
    //     onFileChange(e){
    //         var files = e.target.files || e.dataTransfer.files;
    //         if (!files.length)
    //             return;
    //         this.createImage(files[0]);
    //     },
    //     createImage(file) {
    //         var image = new Image();
    //         var reader = new FileReader();
    //         var vm = this;
            
    //         reader.onload = (e) => {
    //             vm.image = e.target.result;
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // }
}
</script>
