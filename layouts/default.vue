<template>
  <div 
    class="h-screen bg-cover pt-10 bg-home-bg-desktop"
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
