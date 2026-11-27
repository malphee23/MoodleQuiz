<script setup>
defineProps({
    testName: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div>
        <header>
            <div class="logo">
                [ КВИЗ ]
            </div>

            <div class="quiz-number">
                Тест "{{ testName }}"
            </div>
        </header>
    </div>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    gap: 5vw;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 20px;
}

.logo {
    color: var(--system-color);
    font-size: 1.5rem;
    flex-shrink: 0;
}

.quiz-number {
    color: var(--text-color);

}
</style>