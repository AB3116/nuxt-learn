import courseData from "./courseData"

export const useCourse = () => {
    return {
        ...courseData,
        chapters: courseData.chapters.map(c => ({
            ...c,
            lessons: c.lessons.map(l => ({
                ...l,
                path: `/course/chapter/${c.slug}/lesson/${l.slug}`
            }))
        }))
    }
}