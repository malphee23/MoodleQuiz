<script setup>
import JoinBlock from '@/components/JoinBlock.vue';
</script>

<template>
    <div class="join-page">
        <join-block></join-block>
    </div>
</template>

<style scoped>
.join-page {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 3fr);
    gap: 24px;
    padding: 3vw;
}

@media (max-width: 64rem) {
    .join-page {
        grid-template-columns: minmax(0, 1fr);
    }
}
</style>