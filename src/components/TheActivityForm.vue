<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import { isActivityValid } from '../validators.js'

let activity = ref('')

const emit = defineEmits({
  submit: isActivityValid,
})
function submit() {
    emit('submit', activity.value)
}

</script>
<template>
  <form
    @submit.prevent="submit"
    class="sticky bottom-[77px] flex gap-2 border-t bg-white p-4"
  >
    <input
      @input="activity = $event.target.value"
      :value="activity"
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name..."
    />
    <BaseButton>
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
