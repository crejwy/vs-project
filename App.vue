<template>
    <div>        
        <div class="left-content">
            <div class="pages">
                <cus-page v-for="pageinfo in n_pages" :page="pageinfo" :key="pageinfo.id" v-on:actived="activedPage"></cus-page> 
            </div>
        </div>
        <div class="right-content">
            <span class="app-name inline-block" >Simple Word</span>    
            <div class="inline-block">
                <button class="btn btn-primary" @click="addPage">添加新页</button>
                <button class="btn btn-primary" @click="saveDocument">saveDocument</button>
            </div>                    
            <div class="btn-group-vertical " role="group" aria-label="...">
                <button type="button" class="btn btn-default" @click="addComponent('text')">
                <font-awesome-icon icon="coffee" />addtext
                    </button>
                <button type="button" class="btn btn-default" @click="addComponent('input')">
                    <font-awesome-icon icon="coffee" />addinput
                </button>
                <button type="button" class="btn btn-default" @click="addComponent('table')">
                    <font-awesome-icon icon="coffee" />addtable
                </button>
                <button type="button" class="btn btn-default" @click="addComponent('image')">
                    <font-awesome-icon icon="coffee" />addimag
                </button>
            </div>

            <component :is="currentSettingName" v-bind:setting="curSetting.value" v-on:updateSetting="updateSetting"></component>
        </div>
    </div>
</template>

<script>
import page from "./components/cus-page.vue"
import settingObject from "./components/f-setting"

export default {
    components:{        
        'cus-page':page,
        'base-setting':()=>import("./components/base-setting.vue")
    },
    props:['document'],
    data(){
        return {
            n_pages:this.document.pages.map(page=>{                
                page.isActive=page.id==this.document.activepage;
                return page;
            }),
            n_activepage:this.document.activepage,
            n_activepage_index:null,
            //当前模块位置名称
            location:"App",
            curSetting:{
                //保存聚焦模块的位置及初始style设置
                location:[{location:"Page",id:this.n_activepage}],  
                name:"base",
                value:Object.assign({},new settingObject.Base())
            } 
        }
    },
    computed:{
        getActivePage:function(){
            //获取聚焦page
            if(this.n_activepage_index==null){               
                this.n_activepage_index=_.findIndex(this.n_pages, ['id', this.n_activepage]);
            }
            return this.n_pages[this.n_activepage_index];
        },
        currentSettingName:function(){
            //返回聚焦模块的setting设置器
            return this.curSetting.name+"-setting";
        }
    },
    methods:{
        saveDocument:function(){
            //保存文档
            this.document.saveDocument({
                pages:this.n_pages,
                activepage:this.n_activepage
            });
        },
        addPage:function(){
            //新增page
            this.n_pages.push({
                id:_.now(),
                style:{
                    width:'600px',
                    height:'800px'
                },
                isActive:false,
                children_el:[]
            });
        },
        addComponent:function(name){
            //在page下新增模块
            this.getActivePage.children_el.push({
                component:'cus-'+name,
                id:_.now(),
                style:{}
            });
        },       
        activedPage:function(pageid,setting){ 
            //聚焦page       
            if(this.n_activepage==pageid) return;

            this.getActivePage.isActive=false;  
            this.n_activepage_index=null;    
                     
            let index=_.findIndex(this.n_pages, ['id', pageid]);           
            if(index>-1){            
                this.n_pages[index].isActive=true;
                this.n_activepage=pageid;                   
            }     
        },
        activeElementSetting:function(setting){
            //获取聚焦模块的位置及style设置值
            this.curSetting=setting;
        },
        updateSetting:function(setting){
            //更新聚焦模块的style
            let ele=n_pages;
            this.curSetting.location.forEach(location => {
                let index=_.findIndex(ele, ['id', location.id]);   
                ele=ele.children_el[index];
            });
            ele.style=setting;
        }
    }
}
</script>
<style>
    .inline-block{
        display:inline-block;
    }
    .left-content{
        left:0;
        top:0;
        margin:0;
        width:80%;
        height:100%;
        background:inherit;
        float:left;
        overflow:auto;
    }
    .right-content{
        top:0;
        width:20%;
        height:100%;
        position:fixed;
        right:0;
        /* background:gainsboro; */
    }
    .app-name{
        line-height:30px;width:100px;border:solid 1px;color:#fff;background:blue;
    }
    
</style>
