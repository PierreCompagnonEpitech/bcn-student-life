<template>
    <Header />
    
    <div class="flex flex-col justify-center w-5/6 m-auto itemscenter">
        <div id="Text1" class="flex flex-col lg:justify-start m-auto lg:mt-12 barlow-bold justify-center">
            <div class="text-blue-600 lg:mx-0 mx-auto font-normal mt-2">
                Epitech Barcelona
            </div>
            <div class="text-2xl font-extrabold lg:text-4xl">
                <b class="text-blue-300">{</b> THE BEST OF <b class="text-blue-600">INNOVATION</b> <b class="text-blue-300">}</b>  - <b class="text-blue-300">{</b>THE FUTURE OF <b class="text-blue-600">SOFTWARE</b> <b class="text-blue-300">}</b>
            </div>
        </div>
        <NuxtImg class="mt-10 mx-auto rounded-3xl" src="/epiban3.jpg" width="1120" height="" loading="lazy" preload/>

        <div class="text-2xl text-center m-auto mt-6 font-bold">Epitech: it's not just your education, but a revolution</div>

        <div class="mt-6 m-auto w-5/6 text-center text-gray-500">
            Founded in 1999 in Paris, Epitech is a world-leading educational institution in computer science and 
            technology. With a unique focus on hands-on learning and collaboration, Epitech empowers its students to 
            become leaders in the technology industry. Through a project-oriented curriculum, Epitech fosters critical
            thinking, creativity and problem solving, preparing graduates to meet the challenges of today’s and tomorrow’s
             digital world.
        </div>

        <div class="text-xl italic text-blue-400 text-center mt-6 m-auto font-bold">"At Epitech, we train innovators and technology leaders with a unique focus on hands-on learning, collaboration and real-world problem solving."</div>

        <div class="text-lg lg:block hidden lg:text-start text-center lg:mt-20">Life on Campus</div>

        <div class="flex flex-wrap m-auto justify-between">
            <Carousel class="lg:w-1/2" :autoplay="2000" :wrap-around="true" :items-to-show="1">
                <Slide v-for="slide in 5" :key="slide">
                    <NuxtImg width="500" height="400" v-if="slide === 1" src="/bcn1.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 2" src="/bcn2.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 3" src="/bcn3.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 4" src="/bcn4.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 5" src="/bcn5.jpg" class="rounded-3xl"/>
                </Slide>

                <template #addons>
                <Pagination />
                </template>
            </Carousel>

            <Carousel class=" lg:w-1/2" :autoplay="2000" :wrap-around="true" :items-to-show="1">
                <Slide v-for="slide in 5" :key="slide">
                    <NuxtImg width="500" height="400" v-if="slide === 1" src="/campus.jpeg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 2" src="/campus2.jpeg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 3" src="/campus3.jpeg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 4" src="/campus4.jpeg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 5" src="/campus5.jpg" class="rounded-3xl"/>
                </Slide>

                <template #addons>
                <Pagination />
                </template>
            </Carousel>

            <Carousel class="lg:w-1/2" :autoplay="2000" :wrap-around="true" :items-to-show="1">
                <Slide v-for="slide in 5" :key="slide">
                    <NuxtImg width="500" height="400" v-if="slide === 1" src="/campus6.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 2" src="/campus2.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 3" src="/campus3.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 4" src="/campus4.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 5" src="/ep1.jpg" class="rounded-3xl"/>
                </Slide>

                <template #addons>
                <Pagination />
                </template>
            </Carousel>

            <Carousel class="lg:w-1/2" :autoplay="2000" :wrap-around="true" :items-to-show="1">
                <Slide v-for="slide in 5" :key="slide">
                    <NuxtImg width="500" height="400" v-if="slide === 1" src="/life1.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 2" src="/life2.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 3" src="/life3.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 4" src="/life4.jpg" class="rounded-3xl"/>
                    <NuxtImg width="500" height="400" v-if="slide === 5" src="/life5.jpg" class="rounded-3xl"/>
                </Slide>

                <template #addons>
                <Pagination />
                </template>
            </Carousel>
        </div>

        <div class="text-lg lg:text-start text-center mt-28">
            Different programmes that respond to multidisciplinary motivations
        </div>

        <div class="flex flex-col justify-between">
            <Card3
                class="lg:mx-0 mx-auto mt-10"
                v-for="index in tab" 
                :imageUrl="index.imageUrl"
                :title="index.title"
                :title_image="index.title_image"
                :desc="index.desc"
                :redirectUrl="index.redirectUrl"
            />
        </div>


        <div class="text-lg lg:text-start text-center mt-10 lg:mt-28">Discover More</div>

        <Card3
            class="lg:mx-0 mx-auto mt-10"
            :imageUrl="'/Rectangle 165.png'"
            :title="'Epitech Spain Hub'"
            :title_image="'HUB'"
            :desc="'Dive into our curated collection of student projects from recent years, showcasing creativity, collaboration, and innovation.'"
            :redirectUrl="'https://www.notion.so/hub-barcelona/Hub-Projects-Experiences-Gallery-bb0003062df14619b98f54e29de39959'"
        />

        <Card3
            class="lg:mx-0 mx-auto mt-10"
            :imageUrl="'/yt.png'"
            :title="'Epitech Spain Youtube Channel'"
            :title_image="'.'"
            :desc="'Discover the offcial youtube channel of Epitech Spain.'"
            :redirectUrl="'https://www.youtube.com/@Epitech-Spain'"
        />

        <Card3
            class="lg:mx-0 mx-auto mt-10"
            :imageUrl="'/sc.png'"
            :title="'Epitech Student Concil'"
            :title_image="'.'"
            :desc="'The Instaram account of the student concil.'"
            :redirectUrl="'https://www.youtube.com/@Epitech-Spain'"
        />

        <li class="mt-10 ml-10">
            <a class="text-blue-500" href="https://www.instagram.com/epitech.sc.bcn/">Epitech Spain Instagram account</a>
        </li>
    </div>

    <Footer />
</template>

<script setup>
import { ref } from 'vue';

const tab = ref([
    {
        imageUrl: '/Rectangle 164.png',
        title: 'Bachelor + Master’s Degree in Software Development ',
        title_image: 'EPITECH ',
        desc: 'Students with a High School Diploma or Middle and Higher Vocational training (Gradio Medio, Grado Superior, in Spain) can study to become an expert in IT, computer science and web programming.',
        redirectUrl: 'https://www.epitech-it.es/en/programmes/bachelor-masters-degree-in-computer-science/',
    },
    {
        imageUrl: '/Rectangle 165.png',
        title: 'Web and Mobile Development Programme',
        title_image: 'CODING ACADEMY',
        desc: 'Full or part time course for adults with a high school diploma or a minimum of 5 years’ professional experience.',
        redirectUrl: 'https://www.epitech-it.es/en/programmes/coding-academy-in-barcelona/',
    },
    {
        imageUrl: '/Rectangle 166.png',
        title: 'Data Science & AI Bootcamp',
        title_image: 'SCHNEIDER ELECTRIC',
        desc: 'Transform your career in just 4 months with our immersive Data Science Bootcamp, 50% sponsored by Schneider Electric.',
        redirectUrl: 'https://www.epitech-it.es/epitech-schneider/',
    }
]);

</script>
 
<style>
  .carousel__item {
    min-height: 200px;
    width: 100%;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
</style>
  