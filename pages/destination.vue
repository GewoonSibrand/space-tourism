<template>
  <div class="grid grid-cols-2 h-full px-[165px]">
    <span class="sub-h1 col-span-2 mt-14"><span class="opacity-25 mr-2">01</span>Pick your destination</span>
    <div class="col-span-1">
      <img :src="planetSrc">
    </div>
    <div class="col-span-1">
      <ul class="space-x-10 flex">
        <template v-for="(planet, name) in planets" :key="planet.title">

          <li class="text-white uppercase hover:cursor-pointer hover:border-b-2 hover:border-white border-b-2 border-transparent" 
            :class="{ 'border-b-2 border-white':  selectedPlanet.title === planet.title}"
            @click="updatePlanet(planet)"
          >
            {{ name }}
          </li>
        </template>
      </ul>
      <h2>{{ selectedPlanet.title }}</h2>
      <p class="body-text">{{ selectedPlanet.text }}</p>
      <div class="bg-white/25 h-[1px] w-full my-5"></div>
      <div class="grid grid-cols-2">
        <div class="flex flex-col">
          <span class="sub-h2">Avg. Distance</span>
          <span class="text-[28px] text-white uppercase">{{ selectedPlanet.distance }}</span>
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
import { ref, computed } from 'vue'
// Glob import
import moon from '@/assets/img/moon.webp';
import mars from '@/assets/img/mars.webp';
import europa from '@/assets/img/europa.webp';
import titan from '@/assets/img/titan.webp';
const planets = {
  moon: {
    title: 'Moon',
    text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 KM',
    travelTime: '3 Days',
  },
  mars: {
    title: 'Mars',
    text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 Mil. KM',
    travelTime: '9 Months'
  },
  europa: {
    title: 'Europa',
    text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 Mil. KM',
    travelTime: '3 Years'
  },
  titan: {
    title: 'Titan',
    text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 Bil. KM',
    travelTime: '7 Years'
  }
}

const selectedPlanet = ref(planets.europa);
function updatePlanet(planet) {
  selectedPlanet.value = planet;
}

const planetSrc = computed(() => {
  switch(selectedPlanet.value.title) {
    case 'Moon':
      return moon;
    case 'Mars':
      return mars;
    case 'Europa':
    return europa;
    default:
      return titan;
  }
});

</script>
