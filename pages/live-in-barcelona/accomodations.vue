<template>
    <Header />
    <div class="flex flex-col w-5/6 m-auto mt-16">

        <div class="text-pink-600 font-semibold">LIVE IN BARCELONA</div>

        <div class="text-4xl mt-4 font-bold">Accomodation</div>

        <div class="text-gray-500  text-lg mt-8 ">
            <b>Finding accommodation</b> is often a headache for students arriving in Barcelona. That's why we've put together a selection of quality student residences in convenient neighborhoods close to the universities.
            Whether you're looking for a self-contained studio or a shared room or, you're bound to find the solution that's right for you.
            <p class="mt-8">Here are some student residences in Barcelona:</p>
        </div>

        <!-- Card -->
        <div id="card" v-for="item in items" class="flex mt-20 items-center justify-between m-auto flex-row">
            <img :src="item.imageUrl" class="w-2/5"/>

            <div class="flex justify-center w-1/2 flex-col">
                <div class="text-xl text-pink-600 underline">{{ item.title }}</div>

                <div class="text-lg w-4/5 mt-4">{{ item.location }}</div>

                <a  @click="$router.push(props.redirectUrl)"
                    class="w-24 cursor-pointer mt-4 mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-600 rounded-full hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300">
                        Explore
                    <svg class="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        <!-- Card -->

        <div>Where else to look</div>

    </div>
    <Footer />
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        imageUrl: '/res1.png',
        title: 'Beyoo Accomodation',
        location: 'Two (02) properties : Poble Sec, Marina;\t Gym Central Location;15 min away from the beach Furnished accomodations, Private bathroom, Wifi,Kitchens.',
        redirectUrl: 'live-in-barcelona/book-your-plane-ticket',
    },
    {
        imageUrl: '/res2.png',
        title: 'Vita Student',
        location: 'Two (02)properties: Poblenou, Pédralbes, Central location, near the beach.',
        redirectUrl: 'live-in-barcelona/book-your-plane-ticket',
    },
    {
        imageUrl: '/res3.png',
        title: 'Livensa Living',
        location: 'Two (02)properties: Marina, Diagonal Alto; Bedrooms with kitchen, Rooftop, 01 min from Bus stop.',
        redirectUrl: 'live-in-barcelona/book-your-plane-ticket',
    },
    {
        imageUrl: '/res4.png',
        title: 'Xior Student Housing',
        location: 'Three (03)properties : Diagonal Besos, Collblanc, Paseo de gracia.',
        redirectUrl: 'live-in-barcelona/book-your-plane-ticket',
    },
    {
        imageUrl: '/res5.png',
        title: 'The Social Hub',
        location: '04 min from the bus stop; Central Location.',
        redirectUrl: 'live-in-barcelona/book-your-plane-ticket',
    },
    {
        imageUrl: '/res6.png',
        title: 'Onix Residencia',
        location: 'Discount with universities.',
        redirectUrl: 'live-in-barcelona/book-your-plane-ticket',
    },
    {
        imageUrl: '/res7.png',
        title: 'Resa Residence',
        location: 'Eight (08)residences,  Discount with universities.',
        redirectUrl: 'live-in-barcelona/book-your-plane-ticket',
    },
    {
        imageUrl: '/res8.png',
        title: 'Grupo mestral',
        location: 'Well located, Affordable prices, Discount with universities.',
        redirectUrl: 'live-in-barcelona/book-your-plane-ticket',
    },
]);

</script>