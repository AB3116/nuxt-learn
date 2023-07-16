<script setup>
const user = useSupabaseUser();
const name = computed(() => user.value.user_metadata.user_name)
const profile = computed(() => user.value.user_metadata.avatar_url)
const firstLesson = useFirstLesson();

const supabase = useSupabaseClient()
const logout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error(error)
    }

    await navigateTo(firstLesson.path)
}
</script>

<template>
    <div class="flex items-center gap-x-4 bg-slate-700 w-max p-2 rounded-lg text-white" v-if="user">
        <div>
            <img :src=profile alt="Profile Photo" width="40" class="rounded-lg" />
        </div>
        <div>
            <p class="text-sm font-bold">{{ name }}</p>
            <p class="text-sm underline cursor-pointer" @click="logout">Log out</p>
        </div>
    </div>
</template>