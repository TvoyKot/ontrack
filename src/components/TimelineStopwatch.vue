<script setup>
import { ref } from 'vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/solid'
import {
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_WARNING,
  MILLISECONDS_IN_SECOND
} from '../constants.js'
import { formatSeconds } from '../functions.js'
 import { isNumber } from '../validators.js'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  seconds: {
    default: 0,
    type: Number,
    validator: isNumber
  }
})

const seconds = ref(props.seconds)
const isRunning = ref(false)

function start() {
  isRunning.value = setInterval(() => {
    seconds.value++
  }, MILLISECONDS_IN_SECOND)
}
function stop() {
  clearInterval(isRunning.value)
  isRunning.value = false 
}

function reset() {
  stop()
  seconds.value = 0
}
</script>
<template>
  <div class="flex gap-2 w-full">
    <BaseButton :type="BUTTON_TYPE_DANGER" @click="reset">
      <ArrowPathIcon class="h-8" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <PauseIcon class="h-8" />
    </BaseButton>
    <BaseButton v-else :type="BUTTON_TYPE_SUCCESS" @click="start">
      <PlayIcon class="h-8" />
    </BaseButton>
  </div>
</template>
