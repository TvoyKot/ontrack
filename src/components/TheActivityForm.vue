<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import { isActivityValid } from '../validators.js'

const activity = ref('')

const emit = defineEmits({
  submit: isActivityValid,
})
function submit() {
    emit('submit', activity.value)
    activity.value = ''
}

</script>
<template>
  <form
    @submit.prevent="submit"
    class="sticky bottom-[77px] flex gap-2 border-t bg-white p-4"
  >
    <input
      v-model="activity"
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name..."
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
