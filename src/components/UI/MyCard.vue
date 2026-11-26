<script setup>

</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    min-height: 300px;
    background-color: var(--cards-color);
    border: none;
    border-radius: 12px;
}
</style>