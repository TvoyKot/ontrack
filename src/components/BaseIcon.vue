<script setup>
import { ICONS } from '../icons.js'
import { isIconValid, isNotEmptyString } from '../validators.js'
defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid,
  },
  classes: {
    default: 'h-8',
    type: String,
    validator: isNotEmptyString
  }
})
</script>
<template>
  <component :is="ICONS[name]" :class="classes"></component>
</template>
