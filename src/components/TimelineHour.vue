<script setup>
import { currentHour } from '../functions.js'
import { isHourValid, isUndefined } from '../validators.js'
import { scrollToHour } from '../timeline-items.js'

const props = defineProps({
  hour: {
    type: Number,
    required: true,
    validator: isHourValid
  }
})

defineEmits({
  scrollToHour: {
    click: true,
    validator: isUndefined
  }
})
const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 px-2 rounded font-mono text-lg',
  props.hour === currentHour() ? 'bg-purple-900 font-black text-white' : 'bg-gray-100 text-gray-500'
]

const formattedHour = `${props.hour.toString().padStart(2, 0)}`
</script>
<template>
  <a href="#" :class="classes" @click.prevent="scrollToHour(props.hour)">{{ formattedHour }}:00</a>
</template>
