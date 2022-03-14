<template>
  <div class="flex pl-[55px] mt-10 absolute items-center w-full h-24">
    <div class="shrink-0">
      <img src="~/assets/img/logo.svg">
    </div>
    <div class="ml-24 w-1/2 bg-white h-px z-10"></div>
    <nav class="flex -ml-8 pl-36 backdrop-blur-md bg-white/5 h-full w-full">
      <ul class="space-x-12 flex h-full">
        <NuxtLink to="/" class="flex h-full items-center hover:border-b-2 hover:border-white border-b-2 border-transparent">
          <li><span class="font-bold mr-2">00</span> Home</li>
        </NuxtLink>
        <NuxtLink to="/destination" class="flex h-full items-center hover:border-b-2 hover:border-white border-b-2 border-transparent">
          <li><span class="font-bold mr-2">01</span> Destination</li>
        </NuxtLink>
        <NuxtLink to="/crew" class="flex h-full items-center hover:border-b-2 hover:border-white border-b-2 border-transparent">
          <li><span class="font-bold mr-2">02</span> Crew</li>
        </NuxtLink>
        <NuxtLink to="/technology" class="flex h-full items-center hover:border-b-2 hover:border-white border-b-2 border-transparent">
          <li><span class="font-bold mr-2">03</span> Technology</li>
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<style>
.router-link-active {
 @apply border-b-2 border-white;
}
</style>