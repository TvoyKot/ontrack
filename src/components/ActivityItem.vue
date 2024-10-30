<script setup>
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import { isActivityValid, isUndefined, isNumber } from '../validators.js'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../constants.js'

defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid
  }
})

const emit = defineEmits({
  setSecondsToComplete: isNumber,
  delete: isUndefined
})
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        @select="emit('setSecondsToComplete', $event || 0)"
      />
     <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity"/>
    </div>
  </li>
</template>
