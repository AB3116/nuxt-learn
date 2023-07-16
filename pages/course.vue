<template>
    <section class="text-4xl mb-12 text-lime-300 flex items-center justify-between h-[96px]">
        <h1><b>{{ title }}</b></h1>
        <UserCard />
    </section>
    <section class="grid grid-flow-col grid-cols-[1fr_3fr] gap-x-8">
        <div class="bg-slate-700 p-8 rounded-2xl min-w-[20ch]">
            <h3 class="text-2xl mb-8 font-bold text-lime-300">Chapters</h3>
            <div v-for="chapter in  chapters " class="font-bold space-y-1 mb-8 flex flex-col" :key="chapter.slug">
                <h4 class="mb-2 text-lg">{{ chapter.number }}. {{ chapter.title }}</h4>
                <NuxtLink v-for="(lesson, index) in  chapter.lessons " :key="lesson.slug"
                    class="font-normal ml-2 max-w-[30ch]" :to="lesson.path"
                    :class="{ 'text-lime-300': lesson.path === $route.fullPath, 'text-slate-300': lesson.path !== $route.fullPath }">
                    {{ chapter.number }}.{{ index + 1 }}. {{ lesson.title }}</NuxtLink>
            </div>
        </div>
        <div class="bg-slate-700 p-8 rounded-2xl min-w-[65ch]">
            <NuxtPage />
        </div>
    </section>
</template>

<script setup>
const { chapters, title } = useCourse();
</script>
