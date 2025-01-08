<template>
    <div>
        <p>Count: {{ counter.count }}</p>
        <button @click="counter.increment">Increment</button>
    </div>
</template>

<script setup lang="ts">
    import { useCounterStore } from '~/store/counter';

    const counter = useCounterStore();
</script>