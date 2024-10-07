<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import BaseSelect from '../components/BaseSelect.vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import { isActivityValid, isUndefined } from '../validators.js'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../constants.js'

defineProps({
  activity: {
    type: Object,
    required: true,
    validator: isActivityValid,
  },
})

const emit = defineEmits({
  delete: isUndefined
})

const secondsToComplete = ref(0)
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect class="font-mono" placeholder="h:mm" :selected="secondsToComplete" :options="PERIOD_SELECT_OPTIONS" @select="secondsToComplete = $event"/>
    </div>
  </li>
</template>
