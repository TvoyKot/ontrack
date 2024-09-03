<script setup>
import { ref } from 'vue'
import { isHourValid } from '../validators.js'

import TimelineHour from './TimelineHour.vue'
import BaseSelect from './BaseSelect.vue'


defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isHourValid,
  }
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const selectedActivityId = ref(1)

</script>
<template>
  <li class="relative flex flex-col gap-2 border-gray-200 border-t py-10 px-4">
    <TimelineHour :hour="timelineItem.hour"/>
    <BaseSelect :selected="selectedActivityId" :options="options" placeholder="Rest" @select="selectedActivityId = $event"/>
  </li>
</template>
