<script setup>
import { computed } from 'vue'
import { navigate, currentPage } from '../router.js'
import { isPageValid } from '../validators.js'
const props = defineProps({
  page: {
    required: true,
    type: String,
    validator: isPageValid
  }
})
const classes = computed(() => [
  'flex flex-col items-center p-2 capitalize text-sx',
  { 'bg-gray-300 pointer-events-none': props.page === currentPage.value }
])
</script>
<template>
  <li class="flex-1">
    <a :href="`#${page}`" :class="classes" @click="navigate(page)">
      <slot></slot>
    </a>
  </li>
</template>