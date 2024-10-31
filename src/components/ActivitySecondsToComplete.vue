<script setup>
import { isActivityValid, validateTimelineItems } from '../validators.js'
import { formatSeconds, getTotalActivitySeconds } from '../functions.js'
const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  },
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
  }
})

const seconds = formatSeconds(
  getTotalActivitySeconds(props.activity, props.timelineItems) - props.activity.secondsToComplete
)
</script>
<template>
  <div
    v-if="activity.secondsToComplete"
    class="flex items-center gap-2 rounded bg-purple-100 text-xl px-2 text-purple-600 font-mono"
  >
    {{ seconds }}
  </div>
</template>
