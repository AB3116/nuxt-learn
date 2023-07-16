export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    if (to.params.chapterSlug === 'work-and-study' || user.value) return;
    return navigateTo(`/login?redirectTo=${to.path}`)
})