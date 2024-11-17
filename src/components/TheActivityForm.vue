<script setup>
import { ref, nextTick } from 'vue'
import { id } from '../functions.js'
import { createActivity } from '../activities.js'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

const name = ref('')

async function submit() {
  createActivity({
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
      <BaseIcon name="Plus" class="h-8" />
    </BaseButton>
  </form>
</template>
