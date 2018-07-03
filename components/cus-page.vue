<template>
    <div class="page" :id="n_page.id" :style="n_page.style">
        <component :is="childel.component" v-for="childel in n_page.children_el" :key="childel.id"></component>
    </div>
</template>
<script>
export default {
    props:['page'],
    data(){
        return {
            n_page:this.page
        }
    }
}
</script>

<style>
    .page{
        position: relative;
        background: white;
        margin: 10px auto;
        z-index: 1;
        padding-top: 10px;
    }
</style>