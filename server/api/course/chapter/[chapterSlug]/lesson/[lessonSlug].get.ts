import courseData from '~/server/courseData'
import { Lesson, LessonWithPath, Chapter, Course } from '~/types/course'

courseData as Course;

export default defineEventHandler((event): LessonWithPath => {
    const { chapterSlug, lessonSlug } = event.context.params

    const chapter: Maybe<Chapter> = courseData.chapters.find(ch => ch.slug === chapterSlug)
    if (!chapter) {
        throw createError({
            statusCode: 404,
            message: `Chapter not found`,
        })
    }
    const lesson: Maybe<Lesson> = chapter.lessons.find(le => le.slug === lessonSlug)
    if (!lesson) {
        throw createError({
            statusCode: 404,
            message: `Lesson not found`,
        })
    }

    return {
        ...lesson,
        path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
    }
})