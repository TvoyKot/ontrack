<script setup>
import { ICONS } from '../icons.js'
import { isIconValid } from '../validators.js'
defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid,
  }
})
</script>
<template>
  <component :is="ICONS[name]" :class="$attrs.class || 'h-8'"></component>
</template>
