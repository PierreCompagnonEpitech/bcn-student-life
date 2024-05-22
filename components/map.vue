<template>
    <LMap style="height: 350px; width: 70vw;" class="m-auto" :zoom="12" :center="[41.40384315492906, 2.1743826220896665]">
        <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
        />
        
        <LMarker @click="redirect('https://www.google.es/maps/place/La+Sagrada+Fam%C3%ADlia/@41.4036339,2.1717755,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2dcd83dfb93:0x9bd8aac21bc3c950!8m2!3d41.4036299!4d2.1743558!16zL20vMGc2bjM?hl=ca&entry=ttu')"
         :lat-lng="[41.40384315492906, 2.1743826220896665]">
            <LTooltip> Sagrada Familia </LTooltip>
        </LMarker>

        <LMarker @click="redirect('https://www.google.es/maps/place/Parc+de+la+Ciutadella/@41.388127,2.1834349,16z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2fd439609e1:0x42386118e65a3d70!8m2!3d41.388123!4d2.1860152!16s%2Fm%2F09v6y7q?hl=ca&entry=ttu')" 
        :lat-lng="[41.38847311432106, 2.185956187010078]">
            <LTooltip> Park Ciutadella </LTooltip>
        </LMarker>

        <LMarker @click="redirect('https://www.google.es/maps/place/Montju%C3%AFc/@41.36403,2.1468505,14z/data=!3m1!4b1!4m6!3m5!1s0x12a4a24230e2aebd:0x116c63ebef94b50!8m2!3d41.3640002!4d2.1674931!16zL20vMGtjN2M?hl=ca&entry=ttu')" 
         :lat-lng="[41.36891080136071, 2.153380953277895]">
            <LTooltip> Mont-Juic National Palace </LTooltip>
        </LMarker>

        <LMarker :lat-lng="[41.41469592145573, 2.152673037937232]">
            <LTooltip> Park Guell </LTooltip>
        </LMarker>

        <LMarker @click="redirect('https://www.google.es/maps/place/Barri+Gotic,+Ciutat+Vella,+Barcelona/@41.3814081,2.1671569,15z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2f8901e0681:0xb7e57ec538cda7af!8m2!3d41.3819247!4d2.1773052!16zL20vMDNxODlj?hl=ca&entry=ttu')"
         :lat-lng="[41.38258344619682, 2.1765768080669443]">
            <LTooltip> Gothic Quarter </LTooltip>
        </LMarker>

        <LMarker @click="redirect('https://www.google.es/maps/place/Spotify+Camp+Nou/@41.3809,2.1202395,16z/data=!3m2!4b1!5s0x12a498f5c19b248d:0x3333a570c673257c!4m6!3m5!1s0x12a498f576297baf:0x44f65330fe1b04b9!8m2!3d41.380896!4d2.1228198!16zL20vMDFnZ2ps?hl=ca&entry=ttu')"
         :lat-lng="[41.381278353793896, 2.1228466176965823]">
            <LTooltip> Spotify Camp Nou </LTooltip>
        </LMarker>

        <LMarker @click="redirect('https://www.google.es/maps/place/Tibidabo/@41.4261766,1.9752559,12z/data=!4m6!3m5!1s0x12a49789cff3db45:0xdb92ebc64b4e2a63!8m2!3d41.4225!4d2.118611!16zL20vMGtjNjI?hl=ca&entry=ttu')"
         :lat-lng="[41.426047872703656, 2.120653076506498]">
            <LTooltip>Mount Tibidabo </LTooltip>
        </LMarker>

        <LMarker @click="redirect('https://www.google.fr/maps/place/La+Rambla,+Barcelona/@41.3856127,2.1672417,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a258081714c9:0x24bef7ac8842bdc4!8m2!3d41.3856087!4d2.1698166!16zL20vMDNxODRr?hl=ca&entry=ttu')"
         :lat-lng="[41.3857777126956, 2.1697951378723634]">
            <LTooltip> La Rambla </LTooltip>
        </LMarker>
    </LMap>
</template>

<script setup lang="ts">
const redirect = (redirectUrl: string ) => {
    window.open(redirectUrl, '_blank');
}
</script>