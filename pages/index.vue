<script setup>
const firstLesson = useFirstLesson();
</script>

<template>
    <NuxtLink :to="firstLesson.path">
        <button class="border px-2 py-1 rounded-md hover:opacity-80">Go to course</button>
    </NuxtLink>
</template>