<template>
    <p class="uppercase text-slate-400 font-semibold">Lesson {{ chapter.number }}.{{ lesson.number }}.</p>
    <h3 class="text-3xl font-bold mt-2 mb-8">{{ lesson.title }}</h3>
    <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" class="mb-8" />
    <p class="max-w-[65ch] text-lg leading-7">{{ lesson.text }}</p>
    <div class="flex space-x-4 my-8">
        <NuxtLink v-if="lesson.sourceUrl" class="font-normal text-md border rounded-md px-2 py-1 hover:opacity-80"
            :to="lesson.sourceUrl">Download Source
            Code</NuxtLink>
        <NuxtLink v-if="lesson.downloadUrl" class="font-normal text-md border rounded-md px-2 py-1 hover:opacity-80"
            :to="lesson.downloadUrl">Download
            Video</NuxtLink>
    </div>
    <LessonCompleteButton :model-value="isLessonComplete" @update:model-value="toggleIsLessonComplete" />
</template>

<script setup>
const course = useCourse();
const route = useRoute();

definePageMeta({
    middleware: [
        function ({ params }, from) {
            const course = useCourse();

            const chapter = course.chapters.find(c => c.slug === params.chapterSlug)

            if (!chapter) {
                return abortNavigation(
                    createError({
                        statusCode: 404,
                        message: "Chapter not found",
                    })
                )
            }

            const lesson = chapter.lessons.find(l => l.slug === params.lessonSlug)

            if (!lesson) {
                return abortNavigation(
                    createError({
                        statusCode: 404,
                        message: "Lesson not found",
                    })
                )
            }
        },
        'auth'
    ]
})

const chapter = computed(() => {
    return course.chapters.find(c => c.slug === route.params.chapterSlug)
})

const lesson = computed(() => {
    return chapter.value.lessons.find(l => l.slug === route.params.lessonSlug)
})

const title = computed(() => {
    return `${lesson.value.title} - ${course.title}`
});

useHead({
    title,
})

const progressArray = useLocalStorage('progress', [])

const isLessonComplete = computed(() => {
    if (!progressArray.value[chapter.value.number - 1] || !progressArray.value[chapter.value.number - 1][lesson.value.number - 1]) return false

    return (progressArray.value[chapter.value.number - 1][lesson.value.number - 1])
})

const toggleIsLessonComplete = () => {
    if (!progressArray.value[chapter.value.number - 1]) {
        progressArray.value[chapter.value.number - 1] = []
    }

    progressArray.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value;
}

</script>