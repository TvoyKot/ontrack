<script setup>
import { computed } from 'vue'
import { isActivityValid } from '../validators.js'
import { formatSecondsWithSign } from '../functions.js'
import { calculateTrackedActivitySeconds } from '../timeline-items.js'
const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const classes = computed(() => [
  `flex items-center gap-2 rounded text-xl px-2 font-mono`,
  remainingSeconds.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-200 text-green-600'
])

const remainingSeconds = computed(
  () => calculateTrackedActivitySeconds(props.activity) - props.activity.secondsToComplete
)
</script>
<template>
  <div v-if="activity.secondsToComplete" :class="classes">
    {{ formatSecondsWithSign(remainingSeconds) }}
  </div>
</template>
