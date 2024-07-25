<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { isTimelineItemValid } from '../validators'
defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator(timelineItems) {
      return timelineItems.every(isTimelineItemValid)
    }
  }
})
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>
