import { ref } from 'vue'
import { generateTimelineItems } from './functions.js'
import { activities } from './activities.js'

export const timelineItems = ref(generateTimelineItems(activities.value))

export function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

export function updateTimelineItemActivitySeconds(timelineItem, activitySeconds) {
  timelineItem.activitySeconds += activitySeconds
}