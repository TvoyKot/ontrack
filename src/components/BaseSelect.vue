<script setup>
import { computed } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { BUTTON_TYPE_NEUTRAL } from '../constants.js'
import BaseButton from './BaseButton.vue'
import { validateSelectOptions, isSelectValueValid, isUndefinedOrNull } from '../validators.js'


const props = defineProps({
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  placeholder: {
    required: true,
    type: String
  }
})
const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>
<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      @change="emit('select', +$event.target.value)"
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
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
