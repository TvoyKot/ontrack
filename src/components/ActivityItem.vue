<script setup>
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import BaseIcon from './BaseIcon.vue'
import { isActivityValid } from '../validators.js'
import { deleteActivity, setActivitySecondsToComplete } from '../activities.js'
import {resetTimelineItemActivities } from '../timeline-items.js'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '../constants.js'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
}
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(activity)">
        <BaseIcon name="Trash" class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        @select="setActivitySecondsToComplete(activity, $event)"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
