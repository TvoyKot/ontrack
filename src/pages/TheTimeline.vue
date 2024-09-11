<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { validateTimelineItems, validateSelectOptions } from '../validators'
defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
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
        :activity-select-options="activitySelectOptions"
      />
    </ul>
  </div>
</template>
