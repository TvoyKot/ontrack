<script setup>
import { inject } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import { isActivityValid, isUndefined } from '../validators.js'
import { BUTTON_TYPE_DANGER } from '../constants.js'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const emit = defineEmits({
  delete: isUndefined
})

const setActivitySecondsToComplete = inject('setActivitySecondsToComplete')

const periodSelectOptions = inject('periodSelectOptions')
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
        :options="periodSelectOptions"
        @select="setActivitySecondsToComplete(activity, $event || 0)"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
