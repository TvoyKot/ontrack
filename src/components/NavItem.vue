<script setup>
import { computed } from 'vue'
import { navigate, currentPage } from '../router.js'
import { isNavItemValid } from '../validators.js'

const props = defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid
  }
})
const classes = computed(() => [
  'flex flex-col items-center p-2 capitalize text-sx',
  { 'bg-gray-300 pointer-events-none': props.navItem.page === currentPage.value }
])
</script>
<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="navigate(navItem.page)">
      <component :is="navItem.icon" class="h-6 w-6" /> {{ navItem.page }}
    </a>
  </li>
</template>
