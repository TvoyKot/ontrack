<script setup>
import { provide, readonly } from 'vue'

import { generatePeriodSelectOptions } from './functions'
import { currentPage, timelineRef } from './router.js'
import * as keys from './keys.js'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants.js'
import {
  setActivitySecondsToComplete,
  activitySelectOptions,
  createActivity,
  deleteActivity,
} from './activities.js'
import {
  updateTimelineItemActivitySeconds,
  setTimelineItemActivity,
  resetTimelineItemActivities
} from './timeline-items.js'
import TheHeader from './components/TheHeader.vue'

import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'
import TheActivities from './pages/TheActivities.vue'
import TheNav from './components/TheNav.vue'

provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, (activity) => {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
})
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions))
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      ref="timelineRef"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>

<style scoped></style>
