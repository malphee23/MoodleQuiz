<script setup>
defineOptions({ name: 'my-card' })
</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    width: 100%;

    background-color: var(--cards-color);
    border: none;
    border-radius: 12px;
}
</style>