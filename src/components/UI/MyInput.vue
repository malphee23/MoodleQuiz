<script setup>
const model = defineModel()

defineOptions({ name: 'my-input' })
</script>

<template>
    <div>
        <input v-model="model" class="input" type="text">
    </div>
</template>

<style scoped>
.input {
    width: 100%;
    min-height: 30px;
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
}
</style>