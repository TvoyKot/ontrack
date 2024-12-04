<script setup>
import { watchEffect } from 'vue'
import { BUTTON_TYPE_SUCCESS, BUTTON_TYPE_DANGER, BUTTON_TYPE_WARNING } from '../constants.js'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '../icons.js'
import { currentHour, formatSeconds } from '../functions.js'
import { updateTimelineItem } from '../timeline-items.js'
import { isTimelineItemValid } from '../validators.js'
import { useStopwatch } from '../composables/stopwatch.js'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const { seconds, isRunning, start, stop, reset } = useStopwatch(props.timelineItem.activitySeconds)

watchEffect(() =>
  updateTimelineItem(props.timelineItem, {
    activitySeconds: seconds.value
  })
)
</script>
<template>
  <div class="flex gap-2 w-full">
    <BaseButton :type="BUTTON_TYPE_DANGER" @click="reset" :disabled="!timelineItem.activitySeconds">
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 text-3xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
      :disabled="timelineItem.hour !== currentHour()"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
