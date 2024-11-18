<script setup>
const props = defineProps(['index', 'activity'])

const color = ['red', 'yellow', 'blue', 'green'][props.index]
const progress = [10, 50, 70, 100][props.index]
const timeProgress = ['03/30', '15/30', '21/30', '30/30'][props.index]
</script>
<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="`bg-${color}-500`" :style="`width: ${progress}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ progress }}%</span><span>{{ timeProgress }}</span>
    </div>
  </li>
</template>
