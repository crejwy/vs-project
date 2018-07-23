<template>
    <div>
        <div>
            <label>Background:</label>
            <input v-model="setting.style.background" />
        </div>       
        <div>
            <label>Width:</label>
            <input v-model="setting.style.width" />
        </div>
        <div>
            <label>Height:</label>
            <input v-model="setting.style.height" />
        </div>
    </div>
</template>
<script>
export default {
    props:['setting']
}
</script>
