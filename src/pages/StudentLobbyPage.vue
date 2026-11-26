<script setup>
import { useRoute } from 'vue-router';


const route = useRoute()
const sessionId = route.params.id
</script>

<template>
    <div>
        <my-card class="card">
            <my-button>{{ sessionId }}</my-button>
        </my-card>

    </div>
</template>

<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>