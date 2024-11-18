<script setup>
import { currentPage, routes } from './router.js'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <KeepAlive>
      <component :is="routes[currentPage]" />
    </KeepAlive>
    <!-- <TheTimeline v-show="currentPage === PAGE_TIMELINE" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" /> -->
  </main>
  <TheNav />
</template>