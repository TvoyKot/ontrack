<script setup>
import { navigate, currentPage } from '@/router.js'
import { PAGE_TIMELINE } from '../constants.js'
import { scrollToCurrentHour } from '../timeline-items.js'

function handleClick() {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(): navigate(PAGE_TIMELINE)
}
</script>
<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="handleClick">
    <img src="../assets/img/logo.png" alt="logo" class="h-9" />
  </a>
</template>
