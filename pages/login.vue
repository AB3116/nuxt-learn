<script setup>
const { title } = useCourse();
</script>

<template>
    <div class="text-center">
        <h1 class="text-3xl text-lime-300">Log in to {{ title }}</h1>
        <button class="px-4 py-2 mt-8 rounded-md border hover:opacity-80">Log in with GitHub</button>
    </div>
</template>