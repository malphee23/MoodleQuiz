<script setup>
import { ref, computed } from 'vue';
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';
import MySelect from './UI/MySelect.vue';
import MyCard from './UI/MyCard.vue';


const name = ref()
const selectedAnswer = ref('')

const answers = [
    { value: 1, name: 'Это верно' },
    { value: 2, name: 'Это почти верно' },
    { value: 3, name: 'Это не совсем вверно' },
    { value: 4, name: 'Это неверно' }
]

const selectedAnswerName = computed(() => {
    return answers.find(answer => answer.value === selectedAnswer.value)?.name
})
</script>

<template>
    <my-card class="join-block">
        <div class="qr-code-instruction-block">
            <div class="qr-code">
                <img src="@/images/qr.png" alt="qr-code">
            </div>
            <div class="qr-code-instruction-text">
                <div class="qr-code-instruction-text-topic">
                    Инструкция по подключению
                </div>
                <div class="qr-code-instruction-text-body">
                    <ol>
                        <li>
                            Открой камеру телефона
                        </li>
                        <li>
                            Наведи на QR-код
                        </li>
                        <li>
                            Выбери свое имя и группу
                        </li>
                        <li>
                            Ожидай начало теста
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="invite-code-block">
            <div class="invite-code-instruction-text">
                Или введи этот код ->
            </div>
            <div class="invite-code">
                123 123
            </div>
        </div>


    </my-card>
</template>

<style scoped>
.join-block {}

.qr-code-instruction-block {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;

    padding: clamp(16px, 2vw, 40px);
    gap: clamp(16px, 2vw, 32px);
}

.invite-code-block {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    justify-content: center;
    flex-wrap: wrap;

    padding: clamp(16px, 2vw, 40px);
    gap: clamp(16px, 2vw, 32px);
}

.invite-code-instruction-text {
    color: var(--text-color);
    font-size: clamp(1.25rem, 0.75rem + 1.5vw, 3rem);
}

.invite-code {
    color: var(--system-color);
    font-size: clamp(2rem, 1rem + 3vw, 6rem);
    white-space: nowrap;
}

.qr-code {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 45%;
    min-width: 0;
}

.qr-code img {
    width: 100%;
    height: auto;
    display: block;
}

.qr-code-instruction-text {
    flex: 1;
    min-width: 0;

    display: flex;
    flex-direction: column;
    gap: 20px;
}

.qr-code-instruction-text-topic {
    color: var(--system-color);
    font-size: clamp(2rem, 1rem + 2vw, 5rem);
    font-weight: 700;
    line-height: 1.2;
}

.qr-code-instruction-text-body {
    color: var(--text-color);
    font-size: clamp(1.25rem, 0.75rem + 1.5vw, 3rem);
    font-weight: 400;
    line-height: 1.2;
}

.qr-code-instruction-text-body ol {
    margin: 0;
    padding-inline-start: 1.2em;
}

.qr-code-instruction-text-body li+li {
    margin-top: 0.4em;
}

@media (max-width: 800px) {
    .qr-code-instruction-block {
        flex-direction: column;
    }

    .invite-code-block {
        flex-direction: column;
    }

    .qr-code {
        align-self: center;
        width: 70%;
        flex: none;
    }
}
</style>