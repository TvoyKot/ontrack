<script setup>
import { formatSeconds } from '../functions.js'
import { isActivityValid } from '../validators.js'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  }
})
</script>
<template>
  <div
    v-if="activity.secondsToComplete"
    class="flex items-center gap-2 rounded bg-purple-100 text-xl px-2 text-purple-600 font-mono"
  >
    {{ formatSeconds(activity.secondsToComplete) }}
  </div>
</template>
