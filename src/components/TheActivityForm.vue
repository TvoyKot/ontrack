<script setup>
import { ref, nextTick } from 'vue'
import { id } from '../functions.js'
import BaseButton from './BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import { isActivityValid } from '../validators.js'

const name = ref('')

const emit = defineEmits({
  submit: isActivityValid
})
async function submit() {
  emit('submit', {
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })
  name.value = ''
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}
</script>
<template>
  <form @submit.prevent="submit" class="sticky bottom-[77px] flex gap-2 border-t bg-white p-4">
    <input
      v-model="name"
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name..."
    />
    <BaseButton :disabled="name.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
