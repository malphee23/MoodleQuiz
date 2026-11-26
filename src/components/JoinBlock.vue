<script setup>
import { ref, computed } from 'vue';
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';
import MySelect from './UI/MySelect.vue';


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
    <div class="join-block">
        <MyCard>
            <div class="qr-code">
                <img src="@/images/qr.png" alt="qr-code" width="150" height="150">
            </div>

            <div class="instruction">
                <h1>Инструкция по подключению</h1>
                <p>1. Открой камеру телефона</p>
                <p>2. Наведи ее на QR-код</p>
                <p>3. Укажи группу и свое имя</p>
                <p>4. Ожидай начала теста</p>
            </div>

            <div>
                <MyButton>Привет</MyButton>
                <MyInput v-model="name"></MyInput>
                <p>{{ name }} ты сделал выбор: {{ selectedAnswerName }}</p>
            </div>

            <div>
                <MySelect v-model="selectedAnswer" :options="answers"></MySelect>
            </div>
        </MyCard>
    </div>
</template>

<style scoped>
.qr-code {
    padding: 15px;
}

.instruction {
    font-size: 16px;
    color: darkolivegreen;
    padding: 15px;
}
</style>