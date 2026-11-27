<script setup>
import QuizHeader from '@/components/QuizHeader.vue';
import { ref } from 'vue';

const testName = ref('Бинарное древо поиска')

const slotsQuantity = ref(4)
const inviteCode = ref('')
</script>

<template>
    <div class="page">
        <quiz-header :test-name="testName"></quiz-header>
        
        <div class="page-body">
            <div class="page-title">
                Присоединиться к тесту
            </div>

            <div class="code-body">
                <my-card class="code-card">
                    <div class="code-call">
                        Код подключения
                    </div>
                    
                    <my-code-input v-model="inviteCode" :slotsQuantity="slotsQuantity"></my-code-input>
                    <div class="text-under-code">
                        введите {{ slotsQuantity }} цифры
                    </div>

                    <my-button :disabled="inviteCode.length !== slotsQuantity">Продолжить</my-button>
                </my-card>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100dvh;
}

.page-body {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.page-title {
    color: var(--text-color);
    font-size: 1.8rem;
    padding: 5vw 0;
    margin-top: 50px;
}

.code-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

    min-height: 100px;

    gap: 5vw;
    padding: clamp(16px, 3vw, 24px);
}

.code-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    max-width: 500px;
}

.code-call {
    font-size: 2rem;
    color: var(--text-color);
}

.text-under-code {
    align-self: center;
    padding: 0;
    font-size: 1rem;
    color: rgba(244, 245, 233, 0.6)
}


@media (max-height: 800px) {
    .code-body {
        position: static;
        transform: none;
        display: flex;
        flex: 1;
        align-self: center;
    }
}
</style>