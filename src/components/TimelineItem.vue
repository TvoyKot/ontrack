<script setup>
import {
  isTimelineItemValid,
  validateSelectOptions,
  isActivityValid,
  validateActivities
} from '../validators.js'

import TimelineHour from './TimelineHour.vue'
import BaseSelect from './BaseSelect.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activities: {
    required: true,
    type: Object,
    validator: validateActivities
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  selectActivity: isActivityValid
})
function selectActivity(id) {
  emit(
    'selectActivity',
    props.activities.find((activity) => activity.id === id)
  )
}
</script>
<template>
  <li class="relative flex flex-col gap-2 border-gray-200 border-t py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectActivity"
    />
  </li>
</template>
