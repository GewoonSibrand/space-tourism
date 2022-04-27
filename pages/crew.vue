<template>
  <div class="grid grid-cols-2 h-[calc(100%-7.5rem)] px-[165px]">
    <span class="sub-h1 col-span-2 mt-14"><span class="opacity-25 mr-2">02</span>Meet your crew</span>
    <div class="col-span-1">
      <!-- <ul class="space-x-10 flex">
        <template v-for="(planet, name) in planets" :key="planet.title">

          <li class="text-white uppercase hover:cursor-pointer hover:border-b-2 hover:border-white border-b-2 border-transparent" 
            :class="{ 'border-b-2 border-white':  selectedPlanet.title === planet.title}"
            @click="updatePlanet(planet)"
          >
            {{ name }}
          </li>
        </template>
      </ul> -->
      <h4>{{ selectedCrewMember.title }}</h4>
      <h3>{{ selectedCrewMember.name }} </h3>
      <p class="body-text">{{ selectedCrewMember.info }}</p>
    </div>
    <div class="col-span-1">
      <img :src="crewMemberSrc">
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
const crewMembers = {
  douglas: {
    title: 'Commander',
    name: 'Douglas Hurley',
    info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
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

const selectedCrewMember = ref(crewMembers.douglas);
function updateCrewMember(crewMember) {
  selectedCrewMember.value = crewMember;
}

const crewMemberSrc = computed(() => {
  switch(selectedCrewMember.value.title) {
    case 'Douglas':
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
