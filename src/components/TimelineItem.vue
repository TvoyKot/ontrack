<script setup>
import { ref } from 'vue'
import BaseSelect from './BaseSelect.vue'
const props = defineProps({
  timelineItem: {
    type: Object,
    required: true
  }
})
const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 px-2 rounded font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const selectedActivityId = ref(1)
</script>
<template>
  <li class="relative flex flex-col gap-2 border-gray-200 border-t py-10 px-4">
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
    <BaseSelect :selected="selectedActivityId" :options="options" placeholder="Rest" />
  </li>
</template>
