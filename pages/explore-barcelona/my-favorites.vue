<template>
    <Header />
        <div class="flex flex-col w-5/6 m-auto mt-16">
            <div class="text-blue-600 font-semibold">Explore Barcelona</div>

            <div class="text-3xl mt-4 font-bold">My Favorites</div>

            <div class= "flex flex-wrap justify-between">
                <Card2
                    class="mx-auto lg:mx-0 mt-14"
                    v-for="tab in favorites"
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
import { ref, reactive, onUpdated, onMounted, onUnmounted, onBeforeMount, onBeforeUpdate } from 'vue';
import { useSightStore } from '~/stores/sights';

const sights = useSightStore();
const isLiked = ref(false);

let tabs = ref(sights.sightsTab);
let tabs2 = ref(sights.museumsTab);

let favorites = reactive([]);

onBeforeMount(() => {
    let cookie = null;
    for (let i = 0; i < tabs.value.length; i++) {
        cookie = useCookie(i);
        if (cookie.value === true)
            favorites.push(tabs.value[i]);
    }

    for (let i = 12; i < (tabs2.value.length); i++) {
            cookie = useCookie(i);
            if (cookie.value === true)
                favorites.push(tabs2.value[i]);
    }
    console.log('favs: ', favorites);
    console.log('tabs: ', tabs.value);
    console.log('tabs2: ', tabs2.value);
});

// onMounted(() => {
//     let cookie = null;

//     for (let i = 0; i < 50; i++) {
//         cookie = useCookie(i);
//         if (cookie.value)
//             tabs.value[i].isLiked = cookie.value;
//     }
// });

const addLikedPlaceToFav = (obj) => {
    const cookie = useCookie(obj.index);
    cookie.value = obj.isLiked;
};

</script>