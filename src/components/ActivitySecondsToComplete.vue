<script setup>
import { computed } from 'vue'
import { isActivityValid } from '../validators.js'
import { formatSeconds } from '../functions.js'
import { getTotalActivitySeconds } from '../timeline-items.js'
const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const classes = computed(
  () =>
    `flex items-center gap-2 rounded text-xl px-2 font-mono ${colorClasses.value}`
)

const colorClasses = computed(() =>
  secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-200 text-green-600'
)

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)

const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'))

const secondsDiff = computed(
  () => getTotalActivitySeconds(props.activity) - props.activity.secondsToComplete
)
</script>
<template>
  <div v-if="activity.secondsToComplete" :class="classes">
    {{ seconds }}
  </div>
</template>
