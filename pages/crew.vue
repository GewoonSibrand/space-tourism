<template>
  <div class="grid grid-cols-2 h-[calc(100%-6rem)] px-[165px]">
    <span class="sub-h1 col-span-2 mt-14"><span class="opacity-25 mr-2">02</span>Meet your crew</span>
    <div class="col-span-1">
      <h4>{{ selectedCrewMember.title }}</h4>
      <h3>{{ selectedCrewMember.name }} </h3>
      <p class="body-text">{{ selectedCrewMember.info }}</p>
      <ul class="space-x-10 flex mt-40">
        <template v-for="(crewMember) in crewMembers" :key="crewMember.title">

          <li class="text-white uppercase hover:cursor-pointer" 
            @click="updateCrewMember(crewMember)"
          >
            <div class="h-4 w-4 rounded-full bg-white/80 hover:bg-white" :class="{ 'bg-white':  selectedCrewMember.title === crewMember.title}"></div>
          </li>
        </template>
      </ul>
    </div>
    <div class="col-span-1">
      <img class="h-full" :src="crewMemberSrc">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// Glob import
import hurley from '@/assets/img/hurley.webp';
import mark from '@/assets/img/mark.webp';
import victor from '@/assets/img/victor.webp';
import anousheh from '@/assets/img/anousheh.webp';
const crewMembers = {
  douglas: {
    title: 'Commander',
    name: 'Douglas Hurley',
    info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  mark: {
    title: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
  },
  victor: {
    title: 'Pilot',
    name: 'Victor Glover',
    info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
  },
  tugce: {
    title: 'Flight Engineer',
    name: 'Tugce Gunes',
    info: 'Tugce Gunes is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
  }
}

const selectedCrewMember = ref(crewMembers.douglas);
function updateCrewMember(crewMember) {
  selectedCrewMember.value = crewMember;
}

const crewMemberSrc = computed(() => {
  switch(selectedCrewMember.value.name) {
    case 'Douglas Hurley':
      return hurley;
    case 'Mark Shuttleworth':
      return mark;
    case 'Victor Glover':
    return victor;
    default:
      return anousheh;
  }
});

</script>
