<script setup>
import { inject } from 'vue'

import {
  isTimelineItemValid,
  isActivityValid,
  isHourValid,
} from '../validators.js'
import { NULLABLE_ACTIVITY } from '../constants.js'
import TimelineHour from './TimelineHour.vue'
import BaseSelect from './BaseSelect.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
})

const emit = defineEmits({
  selectActivity: isActivityValid,
  scrollToHour: isHourValid,
})

const activitySelectOptions = inject('activitySelectOptions')
const activities = inject('activities')

function selectActivity(id) {
  emit('selectActivity', findActivityById(id))
}

function findActivityById(id) {
  return activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
}
</script>
<template>
  <li class="relative flex flex-col gap-2 border-gray-200 border-t py-10 px-4">
    <TimelineHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectActivity"
    />
    <TimelineStopwatch
      :timeline-item="timelineItem"
    />
  </li>
</template>
