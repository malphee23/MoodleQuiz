<script setup>
import { ref, computed, watch } from 'vue';

defineOptions({ name: 'my-code-input' })

const code = computed(() => {
    return digits.value.join('')
})

const model = defineModel()

const props = defineProps({
    slotsQuantity: {
        type: Number,
        default: 4
    }
})

const digits = ref(Array(props.slotsQuantity).fill(''))

watch(digits, () => {
    model.value = digits.value.join('')
}, {deep: true})
</script>

<template>
    <div class="code-input">
        <input v-for="n in slotsQuantity" v-model="digits[n - 1]" :key="n" maxlength="1" class="code-slot" inputmode="numeric" type="text">
    </div>
</template>

<style scoped>
.code-input {
    display: flex;
    width: 100%;
    gap: 4vw;
}

.code-slot {
    display: flex;
    text-align: center;

    background-color: var(--back-color);
    color: var(--text-color);
    border: none;

    border-radius: 10px;
    width: 100%;
    min-height: 50px;

    font-size: 1.7rem;
}
</style>