<template>
    <div>
        <Header />
    <!-- First Block -->
        <div id="FirstBlock" class="flex flex-col w-5/6 m-auto md:flex-row mt-12 justify-center">
            <div id="Text1" class="flex flex-col lg:justify-start m-auto lg:mt-24 barlow-bold justify-center items-center w-full lg:w-1/2">
                <div class="text-3xl lg:text-6xl">
                    <b class="text-pink-600 font-etrabold">Barcelona:</b> Get ready for your dream <b class="font-extrabold text-yellow-500">student adventure!</b>
                </div>
                <div class="text-gray-500 lg:text-xl w-5/ font-normal mt-2">
                    <em>Studying in Barcelona ?</em> Your ultimate guide to setting in, integrating and making the most of this incredible city.
                </div>
            </div>

            <div id="Images1" data-aos="flip-u" class="flex m-auto">
                <NuxtImg
                    src="/Images.png"
                    height="557"
                    width="445"
                    loading="lazy"
                    preload
                />
            </div>
        </div>
    <!-- First Block -->

    <!-- Second Block -->
        <div id="SecondBlock" class="flex flex-col m-auto md:flex-row-reverse justify-center">
            <div id="Text1" class="flex flex-col lg:justify-start m-auto lg:mt-12 barlow-bold justify-center w-full lg:w-1/2">
                <div class="text-pink-600 w-5/6 font-normal mt-2">
                    LIVE IN BARCELONA
                </div>
                <div class="text-2xl lg:text-5xl w-4/5">
                    Barcelona opens its doors to you: Get <b class="font-bold text-pink-500">ready</b> for student life !
                </div>
                <div class="text-gray-500 lg:text-xl w-4/5 font-normal mt-2">
                    Find out everything you need to make the most of your stay in Barcelona. From finding accommodation and jobs to discovering the city's best restaurants, bars and attractions and other tips!
                </div>
                <button @click="$router.push('live-in-barcelona')" class="h-12 w-32 bg-pink-600 hover:bg-pink-700 rounded-full font-normal mt-6 text-white">
                    See more
                </button>
            </div>

            <div id="Images1" data-aos="flip-u" class="flex m-auto">
                <NuxtImg class="ml-10"
                    src="/Images2.png"
                    width="440"
                    height="520"
                    loading="lazy"
                    preload
                />
            </div>
        </div>
    <!-- Second Block -->

    <!-- Third Block -->
        <div id="Third" class="flex flex-col justify-center m-auto items-center w-3/4 mt-20">
            <div class="flex flex-row tems-center">
               <div class="flex flex-col w-1/2">
                    <div class="text-pink-600 font-normal">
                        EXPLORE BARCELONA
                    </div>
                    <div class="text-4xl font-bold">
                        Barcelona Must-sees: Your guide to <b class="text-pink-500 font-bold">the best</b> addresses
                    </div>
                </div>

                <div class="flex flex-col w-1/2 mt-5">
                    <div class="text-gray-500 lg:text-lg">
                        Whether you're looking for a wild night out, a cultural gateway or just a coffee to brush up your lessons, you'll find what your looking for in our guide. So don't wait any longer and explore Barcelona.
                    </div>
                    <button @click="$router.push('explore-barcelona')" class="h-12 w-32 bg-pink-600 hover:bg-pink-700 rounded-full font-normal mt-6 text-white">
                        See more
                    </button>
                </div>
            </div>

            <div class="flex flex-row justify-between w-full mt-14">
                <div class="flex flex-col items-center">
                    <NuxtImg src="/Rectangle1.png" width="300" height="420"  loading="lazy" preload/>
                    <div class="text-sm mt-2 underline text-pink-500 ">Casa Bastillo</div>
                </div>
                <div class="flex flex-col items-center">
                    <NuxtImg src="/Rectangle2.png" width="300" height="420" loading="lazy" preload/>
                    <div class="text-sm mt-2 underline text-pink-500 ">Arc de Triumf</div>
                </div>
                <div class="flex flex-col items-center">
                    <NuxtImg src="/Rectangle3.png" width="300" height="420" loading="lazy" preload/>
                    <div class="text-sm mt-2 underline text-pink-500 ">Parc Guel</div>
                </div>
            </div>
        </div>
    <!-- Third Block -->

    <!-- Fourth Block -->
        <div id="Fourth" class="flex flex-row w-5/6 mt-32 justify-around m-auto">
            <NuxtImg src="/Group2.png" width="500" height="370" loading="lazy" preload/>
            <div class="flex flex-col ml-6 w-1/3 mt-12">
                <div class="text-4xl font-bold">Want to get by in Spanish ? <b class="text-pink-500 font-bold">This</b> is the place !</div>
                <div class="text-gray-500 mt-4">Discover the language and learn the basics to make yourself understood and live like a true Barcelonian</div>
                <button @click="$router.push('/tips-and-tricks')" class="h-12 w-32 bg-pink-600 hover:bg-pink-700 rounded-full font-normal mt-6 text-white">
                    See more
                </button>
            </div>
        </div>
    <!-- Fourth Block -->
        <Footer />
    </div>
</template>

<style setup>
</style>