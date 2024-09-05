<script setup>
import { ref } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import BaseSelect from '../components/BaseSelect.vue'
import { TrashIcon } from '@heroicons/vue/24/solid'

defineProps({
  activity: {
    type: String,
    required: true
  }
})
const periodSelectOptions = [
  {
    value: 15,
    label: '0:15'
  },
  {
    value: 30,
    label: '0:30'
  },
  {
    value: 45,
    label: '0:45'
  },
  {
    value: 60,
    label: '1:00'
  },
  {
    value: 75,
    label: '1:15'
  },
  {
    value: 90,
    label: '1:30'
  },
  {
    value: 105,
    label: '1:45'
  },
  {
    value: 120,
    label: '2:00'
  }
]

const secondsToComplete = ref(null)
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton>
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect class="font-mono" placeholder="h:mm" :selected="secondsToComplete" :options="periodSelectOptions" @select="secondsToComplete = $event"/>
    </div>
  </li>
</template>
