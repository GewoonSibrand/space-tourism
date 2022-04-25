<template>
  <div 
    class="h-screen bg-cover pt-10 bg-home-bg-desktop"
    :class="{
      'bg-destination-bg-desktop': route.name === 'destination'
    }">
    <TheHeader />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute();
</script>
