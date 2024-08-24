<script setup>
import BaseButton from './BaseButton.vue'
import { validateSelectOptions } from '../validators.js'

import { XMarkIcon } from '@heroicons/vue/24/solid'

defineProps({
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
  placeholder: {
    default: 'Rest',
    type: String,
  }
})
const emit = defineEmits({
  select(value) {
    return typeof value === 'number'
  }
})
</script>
<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select 
    @change="emit('select', +$event.target.value)" 
    class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
      <option selected disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
