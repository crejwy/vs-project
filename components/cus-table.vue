<template>
    <div class="cusTable" :style="{position:getPositon}">      
        <div class="cusTableInner" @mouseover="mouseover()" @mouseout="mouseout()" @click.right.prevent="openMenu()">
            <font-awesome-icon class="arrowsalt" icon="arrows-alt" v-show="isShowArrowsalt" />
            <table @click="actived()" :style="{position:getTableStyle}">
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
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props:['para'],
    data(){
        return{
            location:this.para.location,
            ntable:this.para,
            mouseIsOnTable:false,            
        }
    },
    computed:{
        getPositon(){
            return this.ntable.exteriorSetting.style.position;
        },
        getTableStyle(){
            return _.omit(Object.assign({},this.ntable.exteriorSetting.style), ['position']);
        },
        isShowArrowsalt(){
            return this.para.isActive||this.mouseIsOnTable;
        }
    },
    methods:{
        ...mapMutations(['activedElement']),
        actived(){
            this.activedElement(this.location);
        },
        mouseover(){
            this.mouseIsOnTable=true;
        },
        mouseout(){
            this.mouseIsOnTable=false;
        },
        openMenu(event){
            
        }
    }  
}
</script>
<style lang="less">
    table{
        border-collapse: collapse;
    }
    table tr th, table tr td { 
        border:1px solid #0094ff;
        min-width: 20px;
        min-height: 20px;
        height: 20px;
    }
    .cusTableInner{
        position: relative;
    }
    .arrowsalt{
        color: gray;
        position: absolute;
        top:-8px;
        left: -8px;

    }

</style>
