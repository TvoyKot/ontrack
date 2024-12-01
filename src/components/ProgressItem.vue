<script setup>
import { computed } from 'vue'
import { calculateActivityCompletionPercantage } from '../activities'
import { calculateTrackedActivitySeconds } from '../timeline-items'
import { isActivityValid } from '../validators'
import { getProgressColorClass, formatSeconds } from '../functions'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const percentage = computed(() =>
  calculateActivityCompletionPercantage(
    props.activity,
    calculateTrackedActivitySeconds(props.activity)
  )
)
</script>
<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="getProgressColorClass(percentage)" :style="`width: ${percentage}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ percentage }}%</span>
      <span
        >{{ formatSeconds(calculateTrackedActivitySeconds(activity)) }}
        /
        {{ formatSeconds(activity.secondsToComplete) }}</span
      >
    </div>
  </li>
</template>
