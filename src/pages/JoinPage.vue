<script setup>
import JoinBlock from '@/components/JoinBlock.vue';
import StudentJoinList from '@/components/StudentJoinList.vue';

const students = [
    { num: 1, name: 'Вася' },
    { num: 2, name: 'Петя' },
    { num: 3, name: 'Коля' },
    { num: 4, name: 'Дима' },
    { num: 5, name: 'Иннокентий' },
    { num: 6, name: 'Кульбитринерий' },
    { num: 7, name: 'Ира' },
    { num: 8, name: 'Лера' },
    { num: 9, name: 'Вася' },
    { num: 10, name: 'Петя' },
    { num: 11, name: 'Коля' },
    { num: 12, name: 'Дима' },
    { num: 13, name: 'Иннокентий' },
    { num: 14, name: 'Кульбитринерий' },
    { num: 15, name: 'Ира' },
    { num: 16, name: 'Лера' },
]

const testName = 'Бинарное древо поиска'
</script>

<template>
    <div class="main">
        <header>
            <div class="logo">
                [ КВИЗ ]
            </div>

            <div class="quiz-number">
                Тест "{{ testName }}"
            </div>
        </header>

        <div class="top-section">
            <div class="join-call">
                Подключайтесь к тесту
            </div>

            <div class="joined-student-status">
                <div class="joined-student-status-counter">
                    {{ students.length }}
                </div>
                <div class="joined-student-status-text">
                    студентов подключились
                </div>
            </div>
        </div>

        <div class="join-page">
            <join-block></join-block>
            <student-join-list :students="students"></student-join-list>
        </div>
    </div>

</template>

<style scoped>
.main {
    padding: 20px 50px;
}

header {
    display: flex;
    align-items: center;
    gap: 2vw;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 20px;
}

.logo {
    color: var(--system-color);
    font-size: 1.5rem;
}

.quiz-number {
    color: var(--text-color);

}

.top-section {
    display: flex;
    justify-content: space-between;
    color: var(--text-color);
    align-items: baseline;
}

.join-call {
    font-size: 4vw;
}

.joined-student-status {
    display: flex;
    align-items: baseline;
}

.joined-student-status-counter {
    font-size: 5vw;
    color: var(--system-color);
}

.joined-student-status-text {
    font-size: 2vw;
    padding-left: 1vw;
}

.join-page {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 3fr);
    gap: 24px;
    padding: 1vw 0;
}

@media (max-width: 64rem) {
    .join-page {
        grid-template-columns: minmax(0, 1fr);
    }
}
</style>