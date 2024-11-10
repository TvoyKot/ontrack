<script setup>
import { ref, provide, computed } from 'vue'

import {
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  generatePeriodSelectOptions
} from './functions'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants.js'
import TheHeader from './components/TheHeader.vue'

import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'
import TheActivities from './pages/TheActivities.vue'

import TheNav from './components/TheNav.vue'

import { currentPage, timelineRef, navigate } from './router.js'


const activities = ref(generateActivities())

const timelineItems = ref(generateTimelineItems(activities.value))

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))


provide(
  'updateTimelineItemActivitySeconds', updateTimelineItemActivitySeconds
)
provide(
  'setActivitySecondsToComplete', setActivitySecondsToComplete
)
provide(
  'createActivity', createActivity
)
provide(
  'deleteActivity', deleteActivity
)
provide (
  'activitySelectOptions', activitySelectOptions.value
)
provide(
  'setTimelineItemActivity', setTimelineItemActivity
)
provide(
  'periodSelectOptions', generatePeriodSelectOptions()
)
provide(
  'timelineItems', timelineItems.value
)


function createActivity(activity) {
  activities.value.push(activity)
}

function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function setTimelineItemActivity(timelineItem, activityId ) {
  timelineItem.activityId = activityId
}

function updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}
</script>

<template>
  <TheHeader @navigate="navigate($event)" />
  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :currentPage="currentPage"
      ref="timelineRef"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
    />
  </main>
  <TheNav :current-page="currentPage" @navigate="navigate($event)" />
</template>

<style scoped></style>
