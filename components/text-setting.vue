<template>
    <div>
        <div>
            <label>Margin:</label>
            <input v-model="setting.style.margin" />
        </div>
        <div>
            <label>Padding:</label>
            <input v-model="setting.style.padding" />
        </div>
        <div>
            <label>Background:</label>
            <input v-model="setting.style.background" />
        </div>
        <div>
            <label>Position:</label>
            <input v-model="setting.style.position" />
        </div>
        <div>
            <label>Width:</label>
            <input v-model="setting.style.width" />
        </div>
        <div>
            <label>Height:</label>
            <input v-model="setting.style.height" />
        </div>
        <div>
            <label>Text:</label>
            <input v-model="setting.text" />
        </div>
    </div>
</template>
<script>
export default {
    props:['setting']
}
</script>


