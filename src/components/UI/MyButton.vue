<script setup>
defineOptions({ name: 'my-button' })
</script>

<template>
    <div>
        <button class="button-style">
            <slot></slot>
        </button>
    </div>
</template>

<style scoped>
.button-style {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    width: 100%;
    height: 64px;
    padding: 16px 32px;

    background-color: var(--system-color);
    color: #192019;

    border: none;
    border-radius: 10px;

    font-size: 22px;
    font-family: inherit;

}

.button-style:hover {
    background-color: #BDE858;
}

.button-style:active {
    background-color: #AED94B;
}
</style>