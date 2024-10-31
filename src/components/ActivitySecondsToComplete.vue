<script setup>
import { computed } from 'vue'
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

const classes = computed(() => `flex items-center gap-2 rounded bg-purple-100 text-xl px-2 text-purple-600 font-mono ${colorClasses.value}`)

const colorClasses = computed(() => secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600')

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)

const sign = computed(() => secondsDiff.value >= 0 ? '+' : '-')

const secondsDiff = computed(
  () =>
    getTotalActivitySeconds(props.activity, props.timelineItems) - props.activity.secondsToComplete
)
</script>
<template>
  <div
    v-if="activity.secondsToComplete"
    :class="classes"
  >
    {{ seconds }}
  </div>
</template>
