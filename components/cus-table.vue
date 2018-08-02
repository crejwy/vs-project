<template>
    <div>
        <table @click="actived()">
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:['para'],
    data(){
        return{
            location:this.para.location,
            ntable:this.para
        }
    },
    methods:{
        ...mapMutations(['activedElement']),
        actived(){
            this.activedElement(this.location);
        },
    }  
}
</script>
<style lang="less">
    table{
        border-collapse: collapse;
    }
    table tr th, table tr td { 
        border:1px solid #0094ff;
        width: 40px;
        height: 20px;
    }

</style>
