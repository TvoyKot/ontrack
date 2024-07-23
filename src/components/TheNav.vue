<script setup>
const emit = defineEmits(['navigate'])
import { NAV_ITEMS } from '../constants.js'

import NavItem from './NavItem.vue'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator(currentPage) {
      return Object.keys(NAV_ITEMS).includes(currentPage)
    }
  },
})
</script>
<template>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-300 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
