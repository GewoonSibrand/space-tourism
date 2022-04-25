<template>
  <div class="grid grid-cols-2 h-[calc(100%-7.5rem)] px-[165px]">
    <span class="sub-h1 col-span-2"><span>01</span>Pick your destination</span>
    <div class="col-span-1">
      <img src="~/assets/img/moon.webp">
    </div>
    <div class="col-span-1">
      <ul>
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <h2>{{ selectedPlanet.title }}</h2>
      <p class="body-text">{{ selectedPlanet.text }}</p>
      <div class="bg-white/25 h-[1px] w-full my-5"></div>
      <div class="grid grid-cols-2">
        <div class="flex flex-col">
          <span class="sub-h2">Avg. Distance</span>
          <span class="text-[28px] text-white uppercase">{{ `${selectedPlanet.distance}KM` }}</span>
        </div>
        <div class="flex flex-col">
          <span class="sub-h2">Est. Travel Time</span>
          <span class="text-[28px] text-white uppercase">{{ selectedPlanet.travelTime }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const planets = {
  moon: {
    title: 'Moon',
    text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400',
    travelTime: '3 Days',
  },
  mars: {

  },
  europa: {

  },
  titan: {

  }
}

const selectedPlanet = ref(planets.moon);

</script>
