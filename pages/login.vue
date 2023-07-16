<script setup>
const { title } = useCourse();

const supabase = useSupabaseClient()
const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })

    if (error) {
        console.error(error)
    }
}
</script>

<template>
    <div class="text-center">
        <h1 class="text-3xl text-lime-300">Log in to {{ title }}</h1>
        <button class="px-4 py-2 mt-8 rounded-md border hover:opacity-80" @click="login">Log in with GitHub</button>
    </div>
</template>