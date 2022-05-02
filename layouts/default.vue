<template>
  <div 
    class="h-screen flex flex-col bg-cover pt-10 bg-home-bg-desktop overflow-auto"
    :class="{
      'bg-destination-bg-desktop': route.name === 'destination',
      'bg-crew-bg-desktop': route.name === 'crew'
    }">
    <TheHeader />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute();
</script>
