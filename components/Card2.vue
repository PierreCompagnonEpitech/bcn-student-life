<template>
    <div class="flex flex-col relative border-gray-400 border-2 rounded-3xl h-[calc(35rem)] w-72 bg-gray-200 p-4">

        <img class="mt-5" :src="props.imageUrl" />

        <div id="title + like" class="flex mt-4 w-full justify-between flex-row">
            <p class="font-semibold m-auto text-sm">{{ props.title }} </p>
            <Like @like="handleLike" :liked="props.isLiked" />
        </div>

        <div id="badges"></div>

        <div id="description" class="w-5/6 text-justify text-xs m-auto">
            {{ props.description }}
        </div>
        
        <button @click="redirect(props.redirectUrl)" class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 border-gray-100 border-2 bg-gray-300 text-black px-16 py-2 rounded-full">
            Explore
        </button>

    </div>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    index: Number,
    imageUrl: String,
    title: String,
    description: String,
    redirectUrl: String,
    isLiked: Boolean,
});

const handleLike = (liked) => {
    emit('likeState', { isLiked: liked, index: props.index });
}

const emit = defineEmits(['likeState']);

const redirect = (redirectUrl) => {
    window.open(redirectUrl, '_blank');
};
</script>