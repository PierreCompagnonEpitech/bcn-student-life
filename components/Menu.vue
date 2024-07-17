<template>
    <div class="flex flex-col">
        <div class=" py-3 flex gap1">
         
            <div class="group relative px-4 cursor-pointer">    
                <div class="flex h-6 w-6 items-center justify-center rounded-full hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                  </svg>
                </div>
                <span @click="$router.push('/live-in-barcelona')" class="absolute -top- left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    Live in Barcelona
                </span>
            </div>

            <div class="group relative px-4 cursor-pointer">
                <div class="flex h-6 w-6 items-center justify-center rounded-full hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <span @click="$router.push('/explore-barcelona')" class="absolute -top- left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    Explore Barcelona
                </span>
            </div>

            <div class="group relative px-4 cursor-pointer">
                <div class="flex h-6 w-6 items-center justify-center rounded-full hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                </div>
                <span @click="$router.push('/tips-and-tricks')" class="absolute -top- left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    Tip and Tricks
                </span>
            </div>

            <div class="group relative px-4 cursor-pointer">
                <div class="flex h-6 w-6 items-center justify-center rounded-full hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>

                </div>
                <span @click="$router.push('/epitech-barcelona')" class="absolute -top- left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-2 py-1 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    Epitech Barcelona
                </span>
            </div>

        </div>
    </div>
</template>