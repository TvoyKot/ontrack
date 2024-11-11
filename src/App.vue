<script setup>
import { ref, provide, computed, readonly } from 'vue'

import {
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  generatePeriodSelectOptions
} from './functions'
import { currentPage, timelineRef } from './router.js'
import * as keys from './keys.js'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants.js'
import TheHeader from './components/TheHeader.vue'

import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'
import TheActivities from './pages/TheActivities.vue'
import TheNav from './components/TheNav.vue'

const activities = ref(generateActivities())

const timelineItems = ref(generateTimelineItems(activities.value))

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

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

function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

function updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}

provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, deleteActivity)
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions.value))
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(keys.timelineItemsKey, readonly(timelineItems.value))
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      ref="timelineRef"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
  </main>
  <TheNav />
</template>

<style scoped></style>
