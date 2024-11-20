<script setup>
import { ref, watch } from 'vue'
import {
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_WARNING,
  MILLISECONDS_IN_SECOND
} from '../constants.js'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '../icons.js'
import { updateTimelineItem } from '../timeline-items.js'
import { currentHour, formatSeconds } from '../functions.js'
import { isTimelineItemValid } from '../validators.js'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)
const temp = 120 

const isStartButtonDisabled = props.timelineItem.hour !== currentHour()

watch(
  () => props.timelineItem.activityId,
  () => {
    updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
  }
)

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItem(props.timelineItem, {
      activitySeconds: props.timelineItem.activitySeconds + temp
    })
    seconds.value++
  }, MILLISECONDS_IN_SECOND)
}
function stop() {
  clearInterval(isRunning.value)
  isRunning.value = false
}

function reset() {
  stop()
  updateTimelineItem(props.timelineItem, {
    activitySeconds: props.timelineItem.activitySeconds - seconds.value * temp
  })
  seconds.value = 0
}
</script>
<template>
  <div class="flex gap-2 w-full">
    <BaseButton :type="BUTTON_TYPE_DANGER" @click="reset" :disabled="!seconds">
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton v-else :type="BUTTON_TYPE_SUCCESS" @click="start" :disabled="isStartButtonDisabled">
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
