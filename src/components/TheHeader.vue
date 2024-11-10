<script setup>
import { PAGE_TIMELINE, PAGE_PROGRESS } from '../constants.js'
import { navigate } from '@/router.js'
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
</script>
<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
   <TheLogo
   @click="navigate(PAGE_TIMELINE)"/>
   <TheHeaderProgress
   @click="navigate(PAGE_PROGRESS)"/>
  </header>
</template>
  