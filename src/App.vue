<script setup>
import { ref } from 'vue'

import { normalizePageHash, generateTimelineItems, generateActivitySelectOptions } from './functions'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants.js'

import TheHeader from './components/TheHeader.vue'

import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'
import TheActivities from './pages/TheActivities.vue'

import TheNav from './components/TheNav.vue'

const timelineItems = generateTimelineItems()

const activities = ['Coding', 'Reading', 'Training']

const activitySelectOptions = generateActivitySelectOptions(activities)

const currentPage = ref(normalizePageHash())

function goTo(page) {
  currentPage.value = page
}

</script>

<template>
  <TheHeader 
  @navigate= "goTo($event)"
  />
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" :activity-select-options="activitySelectOptions"/>
    <TheProgress v-show="currentPage === PAGE_PROGRESS"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities"/>
  </main>
  <TheNav :current-page="currentPage" @navigate = "goTo($event)"/>
</template>

<style scoped></style>
