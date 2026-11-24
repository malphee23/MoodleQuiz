<script setup>

</script>

<template>
    <div class="join-block">
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
    </div>
</template>

<style scoped>
.join-block {
    width: 500px;
    height: 300px;
    background-color: darkgrey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
}

.qr-code {
    padding: 15px;
}

.instruction {
    font-size: 16px;
    color: darkolivegreen;
    padding: 15px;
}
</style>