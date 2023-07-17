import courseData from '~/server/courseData'
import { Lesson, LessonWithPath, Chapter, Course } from '~/types/course'
courseData as Course;

type BaseOutline = {
    title: string;
    slug: string;
    number: number;
}

type LessonOutline = BaseOutline & {
    path: string;
}

type ChapterOutline = BaseOutline & {
    lessons: LessonOutline[];
}

type CourseMeta = {
    title: string;
    chapters: ChapterOutline[];
}

export default defineEventHandler((event): CourseMeta => {
    const chaptersOutline: ChapterOutline[] = courseData.chapters.map((chapter: Chapter) => {
        const lessonsOutline: LessonOutline[] = chapter.lessons.map((lesson: Lesson) => ({
            title: lesson.title,
            slug: lesson.slug,
            number: lesson.number,
            path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
        }))

        return {
            title: chapter.title,
            slug: chapter.slug,
            number: chapter.number,
            lessons: lessonsOutline,
        }
    })

    return {
        title: courseData.title,
        chapters: chaptersOutline
    }
})