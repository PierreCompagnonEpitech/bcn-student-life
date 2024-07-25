<template>
    <Header />
    <div class="flex flex-col w-5/6 m-auto mt-16">

        <div class="text-blue-600 font-semibold">LIVE IN BARCELONA</div>

        <div class="text-4xl mt-4 font-bold">Accomodation</div>

        <div class="text-gray-500  text-lg mt-8 ">
            <b>Finding accommodation</b> is often a headache for students arriving in Barcelona. That's why we've put together a selection of quality student residences in convenient neighborhoods close to the universities.
            Whether you're looking for a self-contained studio or a shared room or, you're bound to find the solution that's right for you.
            <p class="mt-8">Here are some student residences in Barcelona:</p>
        </div>

        <!-- Card -->
        <div id="card" v-for="item in items" class="flex mt-20 items-center justify-between m-auto flex-col lg:flex-row">
            <img :src="item.imageUrl" class="lg:w-2/5 w-full"/>

            <div class="flex justify-center lg:w-1/2 flex-col">
                <div class="text-xl mx-auto lg:mx-0 lg:mt-0 mt-4 text-blue-600 underline">{{ item.title }}</div>

                <div class="text-lg lg:w-4/5 mx-auto lg:mx-0 lg:text-start text-center mt-4">{{ item.location }}</div>

                <a  :href="item.redirectUrl"
                    class="w-24 cursor-pointer mx-auto lg:mx-0 mt-4 mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                        Explore
                    <svg class="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        <!-- Card -->

        <div class="mt-20 ml-8 text-xl font-semibold">Where else to look:</div>

        <li class="mt-5 ml-20">
            <a class="text-blue-500" href="https://www.idealista.com/">Idealista</a>
            <p> Same as "Leboncoin" in France</p>
        </li>
        <li class="mt-5 ml-20">
            <a class="text-blue-500" href="https://housinganywhere.com/">housinganywhere.com</a>
        </li>
        <li class="ml-20">
            <a class="text-blue-500" href="https://www.happycasa.es/en/">happycasa.com</a>
        </li>

        <li class="ml-20">
            <a class="text-blue-500" href="https://www.uniplaces.com/accommodation/barcelona">Uniplaces accomodations</a>
        </li>
        <li class="ml-20">
            <a class="text-blue-500" href="https://barcelona.tbs-education.com/student-services/accommodation/">Barcelona tbs education</a>
        </li>
        <li class="ml-20">
            <a class="text-blue-500" href="https://www.habitatgejove.com/webv2c/en/pisos.asp">habitatgejove.com</a>
        </li>
        <li class="ml-20">
            <a class="text-blue-500" href="https://www.barcelonaresidencias.com/rooms-students-barcelona">barcelonaresidencias.com</a>
        </li>
        <li class="ml-20">
            <a class="text-blue-500" href="https://residencia-balmes.com/en/">residencia-balmes.com</a>
        </li>
        <li class="ml-20">
            <a class="text-blue-500" href="https://www.locabarcelona.com/es/">locabarcelona.com</a>
        </li>
        <li class="ml-20">
            <a class="text-blue-500" href="https://www.spotahome.com/s/barcelona">spotahome.com</a>
        </li>
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
        redirectUrl: 'https://www.beyoo-living.es/en/',
    },
    {
        imageUrl: '/res2.png',
        title: 'Vita Student',
        location: 'Two (02)properties: Poblenou, Pédralbes, Central location, near the beach.',
        redirectUrl: 'https://www.vitastudent.com/en/',
    },
    {
        imageUrl: '/res3.png',
        title: 'Livensa Living',
        location: 'Two (02)properties: Marina, Diagonal Alto; Bedrooms with kitchen, Rooftop, 01 min from Bus stop.',
        redirectUrl: 'https://www.livensaliving.com/en/',
    },
    {
        imageUrl: '/res4.png',
        title: 'Xior Student Housing',
        location: 'Three (03)properties : Diagonal Besos, Collblanc, Paseo de gracia.',
        redirectUrl: 'https://www.xior.be/en/city/barcelona',
    },
    {
        imageUrl: '/res5.png',
        title: 'The Social Hub',
        location: '04 min from the bus stop; Central Location. Bikes upon availability.',
        redirectUrl: 'https://www.thesocialhub.co/barcelona-poblenou/',
    },
    {
        imageUrl: '/res6.png',
        title: 'Onix Residencia',
        location: 'Discount with universities. Great flexibility when it comes to booking types.',
        redirectUrl: 'https://www.residenciaonix.com/en/',
    },
    {
        imageUrl: '/res7.png',
        title: 'Resa Residence',
        location: 'Eight (08) well located residences,  Discount with many universities.',
        redirectUrl: 'https://resa.es/en/',
    },
    {
        imageUrl: '/res8.png',
        title: 'Grupo mestral',
        location: 'Well located in a very central area., Affordable prices, Discount with universities.',
        redirectUrl: 'https://grupomestral.com',
    },
]);

</script>