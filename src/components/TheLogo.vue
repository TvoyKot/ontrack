<script setup>
import { navigate } from '@/router.js'
import { PAGE_TIMELINE } from '../constants.js'
</script>
<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="navigate(PAGE_TIMELINE)">
    <img src="../assets/img/logo.png" alt="logo" class="h-9" />
  </a>
</template>
