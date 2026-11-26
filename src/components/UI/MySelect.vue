<script setup>
const model = defineModel()

defineProps({
    options: {
        type: Array,
        default: () => []
    },
})
</script>

<template>
    <div>
        <select v-model="model" class="select">
            <option disabled value="">
                Выберите из списка
            </option>

            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<style scoped>
.select {
    width: 100%;
    min-width: 50px;
    padding: 10px 15px;
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
}
</style>