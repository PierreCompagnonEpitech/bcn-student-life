<template>
    <div>
        <Header />
    <!-- First Block -->
        <div id="FirstBlock" class="flex flex-col w-5/6 m-auto md:flex-row mt-12 justify-center">
            <div id="Text1" class="flex flex-col lg:justify-start m-auto lg:mt-24 barlow-bold justify-center items-center w-full lg:w-1/2">
                <div class="text-3xl lg:text-6xl">
                    <b class="text-blue-700 font-etrabold">Barcelona:</b> Get ready for your dream <b class="font-extrabold text-blue-400">student adventure!</b>
                </div>
                <div class="text-gray-500 lg:text-xl w-5/ font-normal mt-2">
                    <em>Studying in Epitech Barcelona ?</em> Your ultimate guide to setting in, integrating and making the most of this incredible city.
                </div>
            </div>

            <div id="Images1" data-aos="flip-u" class="flex m-auto">
                <NuxtImg
                    src="/Images.png"
                    height="470"
                    width="430"
                    loading="lazy"
                    preload
                />
            </div>
        </div>
    <!-- First Block -->

    <!-- Second Block -->
        <div id="SecondBlock" class="flex flex-col lg:m-auto lg:flex-row-reverse lg:justify-center">
            <div id="Text1" class="flex flex-col lg:justify-start m-auto lg:mt-12 barlow-bold item justify-center w-full lg:w-1/2">
                <div class="text-blue-700 lg:m-0 m-auto lg:w-5/6 font-normal mt-20 lg:mt-2">
                    LIVE IN BARCELONA
                </div>
                <div class="text-2xl lg:text-start text-center lg:m-0 m-auto lg:text-5xl lg:w-4/5">
                    Barcelona opens its doors to you: Get <b class="font-bold text-blue-600">ready</b> for student life !
                </div>
                <div class="text-gray-500 lg:m-0 lg:text-start text-center m-auto lg:text-xl w-4/5 font-normal mt-2">
                    Find out everything you need to make the most of your stay in Barcelona. From finding accommodation and jobs to discovering the city's best restaurants, bars and attractions and other tips!
                </div>
                <button @click="$router.push('live-in-barcelona')" class="h-12 lg:m-0 m-auto w-32 bg-blue-600 hover:bg-blue-700 rounded-full font-normal mt-6 text-white">
                    See more
                </button>
            </div>

            <div id="Images1" data-aos="flip-u" class="flex hidden md:block m-auto">
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
        <div id="Third" class="flex flex-col justify-center m-auto items-center lg:w-3/4 mt-20">
            <div class="flex flex-col w-full lg:flex-row tems-center">
               <div class="flex flex-col m-auto lg:m-0 lg:w-1/2">
                    <div class="text-blue-600 m-auto lg:m-0 font-normal">
                        EXPLORE BARCELONA
                    </div>
                    <div class="lg:text-4xl lg:text-start text-center w-5/6 lg:w-full m-auto lg:m-0 text-2xl font-bold">
                        Barcelona Must-sees: Your guide to <b class="text-blue-500 font-bold">the best</b> addresses
                    </div>
                </div>

                <div class="flex flex-col w-5/6 m-auto lg:m-0 lg:w-1/2 mt-5">
                    <div class="text-gray-500 lg:text-start text-center lg:text-lg">
                        Whether you're looking for a wild night out, a cultural gateway or just a coffee to brush up your lessons, you'll find what your looking for in our guide. So don't wait any longer and explore Barcelona.
                    </div>
                    <button @click="$router.push('explore-barcelona')" class="h-12 w-32 lg:m-2 m-auto bg-blue-600 hover:bg-blue-700 rounded-full font-normal mt-6 text-white">
                        See more
                    </button>
                </div>
            </div>

            <div class="flex flex-row justify-between w-full mt-14">
                <div class="flex flex-col items-center">
                    <NuxtImg src="/Rectangle1.png" width="300" height="420"  loading="lazy" preload/>
                    <div class="text-sm mt-2 underline text-blue-500 ">Casa Bastillo</div>
                </div>
                <div class="flex flex-col items-center">
                    <NuxtImg src="/Rectangle2.png" width="300" height="420" loading="lazy" preload/>
                    <div class="text-sm mt-2 underline text-blue-500 ">Arc de Triumf</div>
                </div>
                <div class="flex flex-col items-center">
                    <NuxtImg src="/Rectangle3.png" width="300" height="420" loading="lazy" preload/>
                    <div class="text-sm mt-2 underline text-blue-500 ">Parc Guel</div>
                </div>
            </div>
        </div>
    <!-- Third Block -->

    <!-- Fourth Block -->
        <div id="Fourth" class="flex flex-row lg:w-5/6 lg:mt-32 mt-12 justify-around m-auto">
            <NuxtImg class="lg:block hidden" src="/Group2.png" width="500" height="370" loading="lazy" preload/>
            <div class="flex flex-col ml-6 lg:w-1/3 mt-12">
                <div class="text-2xl lg:text-start text-center lg:text-4xl font-bold">Want to get by in Spanish ? <b class="text-blue-500 font-bold">This</b> is the place !</div>
                <div class="text-gray-500 lg:text-start text-center mt-4">Discover the language and learn the basics to make yourself understood and live like a true Barcelonian</div>
                <button @click="$router.push('/tips-and-tricks')" class="h-12 w-32 bg-blue-600 hover:bg-blue-700 rounded-full font-normal lg:mx-0 mx-auto mt-6 text-white">
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