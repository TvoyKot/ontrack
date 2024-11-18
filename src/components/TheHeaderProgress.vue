<script setup>
import { navigate } from '@/router.js'
import { ICON_CHECK_CIRCLE } from '../icons.js'
import BaseIcon from './BaseIcon.vue';
import { PAGE_PROGRESS } from '../constants.js'
</script>

<template>
  <a :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_PROGRESS)" class="text-sm">
    <div v-if="true" class="flex items-center gap-1">
      <p>Day complete!</p>
      <BaseIcon :name="ICON_CHECK_CIRCLE" class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1">
      <p>Progress: <span class="font-mono">20%</span></p>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>