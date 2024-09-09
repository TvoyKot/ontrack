<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import BaseSelect from '../components/BaseSelect.vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import { isActivityValid } from '../validators.js'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../constants.js'

defineProps({
  activity: {
    type: String,
    required: true,
    validator: isActivityValid,
  },
})

const minutesToComplete = ref(null)
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect class="font-mono" placeholder="h:mm" :selected="minutesToComplete" :options="PERIOD_SELECT_OPTIONS" @select="minutesToComplete = $event"/>
    </div>
  </li>
</template>
