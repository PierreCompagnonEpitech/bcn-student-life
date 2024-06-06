<template>
    <Header />
        <div class="flex flex-col w-5/6 m-auto mt-16">
            <div class="text-pink-600 font-semibold">Tips ans Tricks</div>

            <div class="text-4xl mt-4 font-bold">Spanish Essentials for your Trip</div>

            <div class="mt-8 text-gray-500">
                No prior Spanish knowledge is necessary! This section is designed for complete beginners, providing a
                step-by-step approach to mastering the building blocks of Spanish conversation.This section is your
                gateway to navigating everyday conversations in Spanish. We'll equip you with the essential phrases,
                vocabulary, and cultural insights you need to confidently interact with locals, order food, ask for
                directions, and make your trip to Barcelona a breeze.
            </div>

            <div class="text-lg underlin mt-14 text-pink-500 ">Hover the card to see translation</div>

            <div class= "flex flex-wrap mb-12 justify-between">
                <div class="flex items-center flex-col">
                    <p class="font-semibold flex text-pink-500 mb-5 mt-12 text-xl">Greetings</p>
                    <FlipCard class
                        :-front-side-content1="'1. Hello'"
                        :-front-side-content2="'2. Good Morning'"
                        :-front-side-content3="'3. Good Afternoon'"
                        :-front-side-content4="'4. Good Evening'"
                        :-back-side-content1="'1. Hola'"
                        :-back-side-content2="'2. Buenos Dias'"
                        :-back-side-content3="'3. Buenos Tardes'"
                        :-back-side-content4="'4. Buenos Noches'"
                    />
                </div>

                <div class="flex items-center flex-col">
                    <p class="font-semibold text-pink-500 mb-5 mt-12 text-xl">Basics</p>
                    <FlipCard class
                        :-front-side-content1="'1. My name is'"
                        :-front-side-content2="'2. I am ... years old'"
                        :-front-side-content3="'3. I come from ...'"
                        :-front-side-content4="'4. Thanks you - Thanks you very much'"
                        :-front-side-content5="'5. Please'"
                        :-front-side-content6="'6. Excuse me'"
                        :-front-side-content7="'7. I don\'t speak Spanish'"
                        :-front-side-content8="'8. You\'re welcome'"
                        :-back-side-content1="'1.Me llamo'"
                        :-back-side-content2="'2. Yo tengo ... años'"
                        :-back-side-content3="'3. (Yo) soy de ...'"
                        :-back-side-content4="'4. Gracias - Muchas Gracias'"
                        :-back-side-content5="'5. Por favor'"
                        :-back-side-content6="'6. iPerdon'"
                        :-back-side-content7="'7. No hablo español'"
                        :-back-side-content8="'8. De nada'"
                    />
                </div>

                <div class="flex items-center flex-col">
                    <p class="font-semibold text-pink-500 mb-5 mt-12 text-xl">Common Questions</p>
                    <FlipCard class
                        :-front-side-content1="'1. Where is ...?'"
                        :-front-side-content2="'2. How much is it?'"
                        :-front-side-content3="'3. What time is it?'"
                        :-front-side-content4="'4. Can you help me?'"
                        :-front-side-content5="'5. Do you speak English?'"
                        :-back-side-content1="'1. ¿Dónde está ...?'"
                        :-back-side-content2="'2. ¿Cuánto cuesta?'"
                        :-back-side-content3="'3. ¿Qué hora es?'"
                        :-back-side-content4="'4. ¿Puede ayudarme?'"
                        :-back-side-content5="'5. ¿Habla inglés?'"
                    />
                </div>

                <div class="flex items-center mt-12 flex-col">
                    <p class="font-semibold text-pink-500 mb-5 mt-12 text-xl">Introductions and Personal Information</p>
                    <FlipCard class
                        :-front-side-content1="'1. Nice to meet you'"
                        :-front-side-content2="'2. How are you?'"
                        :-front-side-content3="'3. I am fine, thank you'"
                        :-front-side-content4="'4. Where do you live?'"
                        :-front-side-content5="'5. I live in ...'"
                        :-back-side-content1="'1. Mucho gusto'"
                        :-back-side-content2="'2. ¿Cómo estás?'"
                        :-back-side-content3="'3. Estoy bien, gracias'"
                        :-back-side-content4="'4.¿Dónde vives?'"
                        :-back-side-content5="'5. : Vivo en ...'"
                    />
                </div>

                <div class="flex items-center mt-12 flex-col">
                    <p class="font-semibold text-pink-500 mb-5 mt-12 text-xl">Shopping</p>
                    <FlipCard class
                        :-front-side-content1="'1. I\'m looking for ...'"
                        :-front-side-content2="'2. Do you have ...?'"
                        :-front-side-content3="'3. How much does this cost?'"
                        :-front-side-content4="'4. Where can I find ...?'"
                        :-front-side-content5="'5. I live in ...'"
                        :-back-side-content1="'1. Estoy buscando ...'"
                        :-back-side-content2="'2. ¿Tienes ...?(informal) - ¿Tiene ...?(formal)'"
                        :-back-side-content3="'3. ¿Cuánto cuesta esto?'"
                        :-back-side-content4="'4. ¿Dónde puedo encontrar ...?'"
                    />
                </div>

                <div class="flex items-center mt-12 flex-col">
                    <p class="font-semibold text-pink-500 mb-5 mt-12 text-xl">Directions</p>
                    <FlipCard class
                        :-front-side-content1="'1. Left'"
                        :-front-side-content2="'2. Right'"
                        :-front-side-content3="'3. Straight ahead'"
                        :-front-side-content4="'4. Near'"
                        :-front-side-content5="'5. Far'"
                        :-back-side-content1="'1. Izquierda'"
                        :-back-side-content2="'2. Derecha'"
                        :-back-side-content3="'3. Todo recto'"
                        :-back-side-content4="'4. Cerca'"
                        :-back-side-content5="'5. Lejos'"
                    />
                </div>
            </div>

            <!-- <li class="text-pink-600 text-lg mt-6 ml-2">
                Greetings:
            </li>
            <div class="mt-4">
                <li class="ml-12">
                    Hello: <strong> Hola </strong>
                </li>
                <li class="ml-12">
                    Good Morning: <strong> Buenos Dias </strong>
                </li>
                <li class="ml-12">
                    Good Afternoon: <strong> Buenas Tardes </strong>
                </li>
                <li class="ml-12">
                    Good Evening: <strong> Buenas noches </strong>
                </li>
            </div>
 -->

            <!-- <li class="text-pink-600 text-lg mt-6 ml-2">
                Basics:
            </li>
            <div class="mt-4">
                <li class="ml-12">
                    My name is: <strong> Me llamo </strong>
                </li>
                <li class="ml-12">
                    I am ... years old: <strong> Yo tengo ... años </strong>
                </li>
                <li class="ml-12">
                    I come from ... : <strong> (Yo) soy de ... </strong>
                </li>
                <li class="ml-12">
                   Thanks you: <strong> Gracias </strong>
                </li>
                <li class="ml-12">
                   Thanks you very much: <strong> Muchas Gracias </strong>
                </li>
                <li class="ml-12">
                   You're welcome / No problem: <strong> De nada </strong>
                </li>
                <li class="ml-12">
                   Please: <strong> Por favor </strong>
                </li>
                <li class="ml-12">
                   Excuse me: <strong> iPerdon </strong>
                </li>
                <li class="ml-12">
                   Sorry: <strong> iLo Siento </strong>
                </li>
                <li class="ml-12">
                   I don't speak Spanish: <strong> No hablo español </strong>
                </li>
                <li class="ml-12">
                    I don’t understand: <strong> No entiendo l </strong>
                </li>
                <li class="ml-12">
                    I don’t understand: <strong> No entiendo l </strong>
                </li>
            </div> -->

        </div>
    <Footer />
</template>

<script setup>
</script>