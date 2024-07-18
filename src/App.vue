<script setup>
import { ref } from 'vue'

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants.js'

import TheHeader from './components/TheHeader.vue'

import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'
import TheActivities from './pages/TheActivities.vue'

import TheNav from './components/TheNav.vue'

const currentPage = ref(normalizePageHash())

function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash
  }
  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE"/>
    <TheProgress v-show="currentPage === PAGE_PROGRESS"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES"/>
  </main>
  <TheNav :current-page="currentPage" @navigate="currentPage = $event"/>
</template>

<style scoped></style>
