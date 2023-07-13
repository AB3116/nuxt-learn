<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['update:model-value'])
</script>

<template>
    <button class="py-1 px-2 rounded-md" :class="modelValue ? 'bg-green-500' : 'bg-blue-500'"
    @click="$emit('update:model-value', !modelValue)">
        {{ modelValue  ? "Completed" : "Mark As Complete" }}
    </button>    
</template>