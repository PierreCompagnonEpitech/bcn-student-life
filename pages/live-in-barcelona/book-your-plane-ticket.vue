<template>
    <Header />

    <div class="flex flex-col w-5/6 m-auto mt-16">
        
        <div class="text-blue-600 font-semibold">LIVE IN BARCELONA</div>
        
        <div class="text-4xl mt-4 font-bold">Book your plane ticket</div>

        <div class="text-gray-500  text-xl mt-12 w-2/3">We've put together a selection of airlines serving the city, to help you find the flight that best suits your needs and budget.</div>

        <div class="flex flex-row justify-between w-3/4 mt-12">
            <div>
                <div class="text-2xl">Low cost Airlines</div>
                <div class="ml-12">
                    <li class="mt-4 text-lg">Ryanair : <a href='https://www.ryanair.com/gb/en' class="text-blue-500 underline">Ryanair.com</a></li>
                    <li class="text-lg">Vuelling : <a href='https://www.vueling.com/en' class="text-blue-500 underline">Vueling.com</a></li>
                    <li class="text-lg">EasyJet : <a href='https://www.easyjet.com/en' class="text-blue-500 underline">Easyjet.com</a></li>
                    <li class="text-lg">Transavia : <a href='https://www.transavia.com/destinations/en-eu' class="text-blue-500 underline">Transavia.com</a></li>
                    <li class="text-lg">Volotea : <a href='https://www.volotea.com/en/flight-offers/' class="text-blue-500 underline">Volotea.com</a></li>
                </div>
                <div class="text-2xl mt-10">Traditional Airlines</div>
                <div class="ml-12">
                    <li class="mt-4 text-lg">AirFrance : <a href='https://wwws.airfrance.es/en' class="text-blue-500 underline">AirFrance.com</a></li>
                    <li class="text-lg">Iberia : <a href='https://www.vueling.com/en' class="text-blue-500 underline">Vueling.com</a></li>
                    <li class="text-lg">Lufthansa : <a href='https://www.easyjet.com/en' class="text-blue-500 underline">Easyjet.com</a></li>
                    <li class="text-lg">KLM : <a href='https://www.klm.es/en' class="text-blue-500 underline">KLM.com</a></li>
                </div>
            </div>
            <NuxtImg src="/pic1.png" width="470" height="440" loading="lazy" preload/>
        </div>

        <div class="text-xl mt-6">Tips for finding a cheap flight:</div>

        <div class="ml-12">
            <li>Compare prices on several websites as : Skyscanner, Kayak, Google Flights, etc.</li>
            <li>Book your flight in advance: The earlier you book, the better your chances of getting a good price.</li>
            <li>Sign up for airline price alerts: this will keep you informed of promotions and price cuts.</li>
        </div>

        <div class="text-xl font-bold mt-10">If you follow these tips, you should be able to find a flight to Barcelona at a great price!</div>


    </div>

    <Footer />
</template>