<template>
    <Header />
        <div class="flex flex-col w-5/6 m-auto mt-16">
            <div class="text-blue-600 font-semibold">Explore Barcelona</div>

            <div class="text-4xl mt-4 font-bold">Restaurants</div>

            <div class="mt-8 text-gray-500">
                Barcelona bursts with iconic sights beyond Gaudi's masterpieces!
                From the labyrinthine streets of the Gothic Quarter to the panoramic views
                from Montjuïc Hill, we've curated a must-see list to ensure your trip is unforgettable.
                Get ready to soak in history, stunning architecture, and the vibrant energy that makes
                Barcelona unique!
            </div>

            <div class= "flex flex-wrap justify-between">
                <Card2
                    class="mt-12 mx-auto lg:mx-0"
                    v-for="tab in tabs"
                    :key="tab.index"
                    :index="tab.index"
                    :imageUrl="tab.imageUrl"
                    :title="tab.title"
                    :description="tab.description"
                    :redirectUrl="tab.redirectUrl"
                    :isLiked="tab.isLiked"
                    @likeState="addLikedPlaceToFav"
                />
             </div>
        </div>
    <Footer />
</template>

<script setup>
import { ref, onUpdated, onMounted, onUnmounted, onBeforeMount, onBeforeUpdate } from 'vue';
import { useSightStore } from '~/stores/sights';

const sights = useSightStore();
const isLiked = ref(false);

const tabs = ref(sights.restaurantsTab);

onBeforeMount(() => {
    let cookie = null;

    for (let i = 0; i < 6; i++) {
        cookie = useCookie(i);
        if (cookie.value)
            tabs.value[i].isLiked = cookie.value;
        // console.log('i: ', tabs.value[i].isLiked );
    }
});

onMounted(() => {
    let cookie = null;

    for (let i = 0; i < 6; i++) {
        cookie = useCookie(i);
        if (cookie.value)
            tabs.value[i].isLiked = cookie.value;
        // console.log('i: ', tabs.value[i].isLiked );
    }
});

const addLikedPlaceToFav = (obj) => {
    const cookie = useCookie(obj.index);
    cookie.value = obj.isLiked;
};

</script>