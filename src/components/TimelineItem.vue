<script setup>
import { ref } from 'vue'
import {  isTimelineItemValid, validateSelectOptions } from '../validators.js'

import TimelineHour from './TimelineHour.vue'
import BaseSelect from './BaseSelect.vue'

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  }
})

const selectedActivityId = ref(0)
</script>
<template>
  <li class="relative flex flex-col gap-2 border-gray-200 border-t py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
