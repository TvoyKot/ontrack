<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

import { PAGE_PROGRESS } from '../constants.js'
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm">
    <div v-if="true" class="flex items-center gap-1">
      <p>Day complete!</p>
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1">
      <p>Progress: <span class="font-mono">20%</span></p>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>
