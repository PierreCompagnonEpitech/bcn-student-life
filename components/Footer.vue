
<template>
    <footer class="bg-pink-100 rounded-lg shadow-xl  m-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center ">© 2024 BCN Student Life. Your guide to life and study in Barcelona
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
            <li>
                <a @click="$router.push('/')" class="hover:underline cursor-pointer hover:text-pink-500 me-4 md:me-6">Home</a>
            </li>
            <li>
                <a @click="$router.push('/live-in-barcelona')" class="hover:underline cursor-pointer hover:text-pink-500 me-4 md:me-6">Live in Barcelona</a>
            </li>
            <li>
                <a @click="$router.push('/explore-barcelona')" class="hover:underline cursor-pointer hover:text-pink-500 me-4 md:me-6">Explore Barcelona</a>
            </li>
            <li>
                <a @click="$router.push('/tips-and-tricks')" class="hover:underline cursor-pointer hover:text-pink-500">Tips and Tricks</a>
            </li>
        </ul>
        </div>
    </footer>
</template>