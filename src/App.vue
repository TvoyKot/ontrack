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

const activities = ref(['Coding', 'Reading', 'Training'])

const activitySelectOptions = generateActivitySelectOptions(activities.value)

const currentPage = ref(normalizePageHash())

function goTo(page) {
  currentPage.value = page
}

function createActivity(activity) {
  activities.value.push(activity)
}

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1) 
}
</script>

<template>
  <TheHeader 
  @navigate= "goTo($event)"
  />
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" :activity-select-options="activitySelectOptions"/>
    <TheProgress v-show="currentPage === PAGE_PROGRESS"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" @create-activity="createActivity" @delete-activity="deleteActivity"/>
  </main>
  <TheNav :current-page="currentPage" @navigate = "goTo($event)"/>
</template>

<style scoped></style>
