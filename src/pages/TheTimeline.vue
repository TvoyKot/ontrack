<script setup>
import { ref, onMounted } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import {
  validateTimelineItems,
  validateSelectOptions,
  validateActivities,
  isTimelineItemValid,
  isActivityValid
} from '../validators'
import { MIDNIGHTHOUR } from '../constants'

defineProps({
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
  }
})
const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [isTimelineItemValid(timelineItem), isActivityValid(activity)].every(Boolean)
  }
})

const timelineItemRefs = ref([])

onMounted(scrollToCurrentTimelineItem)

function scrollToCurrentTimelineItem() {
  const currentHour = new Date().getHours()
  if (currentHour === MIDNIGHTHOUR) {
    document.body.scrollIntoView()
  } else {
    timelineItemRefs.value[currentHour - 1].$el.scrollIntoView({ behavior: 'smooth' })
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
        @select-activity="emit('setTimelineItemActivity', { timelineItem, activity: $event })"
      />
    </ul>
  </div>
</template>
