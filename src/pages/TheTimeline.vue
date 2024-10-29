<script setup>
import { ref, watchPostEffect, nextTick } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import {
  validateTimelineItems,
  validateSelectOptions,
  validateActivities,
  isTimelineItemValid,
  isActivityValid,
  isPageValid
} from '../validators'
import { MIDNIGHTHOUR, PAGE_TIMELINE } from '../constants'

const props = defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
  },
  activities: {
    required: true,
    type: Object,
    validator: validateActivities
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})
const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [isTimelineItemValid(timelineItem), isActivityValid(activity)].every(Boolean)
  }
})

const timelineItemRefs = ref([])

watchPostEffect(async () => {
  if (props.currentPage === PAGE_TIMELINE) {
    await nextTick()
    scrollToHour(new Date().getHours())
  }
})

function scrollToHour(hour) {
  if (hour === MIDNIGHTHOUR) {
    document.body.scrollIntoView()
  } else {
    timelineItemRefs.value[hour - 1].$el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activities="activities"
        :activity-select-options="activitySelectOptions"
        ref="timelineItemRefs"
        @scroll-to-hour="scrollToHour"
        @select-activity="emit('setTimelineItemActivity', { timelineItem, activity: $event })"
      />
    </ul>
  </div>
</template>
