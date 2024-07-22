<script setup>
const props = defineProps(['timelineItem'])
const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 px-2 rounded font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
  ? 'bg-purple-900 font-black text-white'
  : 'bg-gray-100 text-gray-500'
]
</script>
<template>
  <li class="relative flex flex-col gap-2 border-gray-200 border-t py-10 px-4">
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
  </li>
</template>
