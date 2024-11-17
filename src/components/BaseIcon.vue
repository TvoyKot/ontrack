<script setup>
import {
  ArrowPathIcon as ArrowPath,
  PauseIcon as Pause,
  PlayIcon as Play,
  TrashIcon as Trash,
  XMarkIcon as XMark,
  ListBulletIcon as ListBullet,
  ChartBarIcon as ChartBar,
  ClockIcon as Clock,
  PlusIcon as Plus
} from '@heroicons/vue/24/solid'

const icons = {
  ArrowPath,
  Pause,
  Play,
  Trash,
  XMark,
  ListBullet,
  ChartBar,
  Clock,
  Plus
}

defineProps({
  name: {
    required: true,
    type: String,
  }
})
</script>
<template>
  <component :is="icons[name]"></component>
</template>
