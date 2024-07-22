<script setup>
const $emit = defineEmits(['goToTimeline', 'goToProgress'])

import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'

</script>
<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
   <TheLogo
   @click="$emit('goToTimeline')"/>
   <TheHeaderProgress
   @click="$emit('goToProgress')"/>
  </header>
</template>
