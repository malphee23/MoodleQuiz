<script setup>
defineProps({
    students: {
        type: Array,
        default: () => [],
    },
})
</script>

<template>
    <div>
        <div class="student-list">
            <div v-for="student in students" class="student-list-item">
                {{ student.num }}. {{ student.name }}<br>
            </div>
        </div>
        <my-button class="btn-start">Начать тест -></my-button>
    </div>
</template>

<style scoped>
.student-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 5px;

    max-height: 36vw;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--border-color) var(--cards-color);
}

.student-list-item {
    display: flex;
    align-items: center;
    padding: 16px 12px;

    background-color: var(--cards-color);
    width: 100%;
    min-height: 75px;
    flex-shrink: 0;

    border-radius: 10px;

    font-size: 30px;
    color: var(--text-color);
}

.btn-start {
    padding-top: 1.5vw;
}
</style>