export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.chapterSlug === 'work-and-study') return;
    return navigateTo('/login')
})