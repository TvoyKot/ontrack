import { ref } from 'vue'
// import { activities } from './activities.js'
import { HOURS_IN_DAY, MIDNIGHTHOUR } from './constants.js'
import { currentHour } from './functions.js'

export const timelineItems = ref(generateTimelineItems())
export const timelineItemRefs = ref([])

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineItemActivities(activity) {
  timelineItems.value
    .filter((timelineItem) => hasActivity(timelineItem, activity))
    .forEach((timelineItem) =>
      updateTimelineItem(timelineItem, {
        activityId: null,
        activitySeconds: timelineItem.hour === currentHour() ? timelineItem.activitySeconds : 0
      })
    )
}
export function calculateTrackedActivitySeconds(activity) {
  return timelineItems.value
    .filter((timelineItem) => hasActivity(timelineItem, activity))
    .reduce(
      (totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds),
      0
    )
}

// function filterTimelineItemsByActivity(activity) {
//   return timelineItems.value.filter((timelineItem) => timelineItem.activityId === activity.id)
// }

//  ДРУГОЙ ВАРИАНТ РЕШЕНИЯ


// function filterTimelineItemsByActivity({ id }) {
//   return timelineItems.value.filter(( activityId ) => activityId === id)
// }
export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(currentHour(), isSmooth)
}

export function scrollToHour(hour, isSmooth = true) {
  const el = hour === MIDNIGHTHOUR ? document.body : timelineItemRefs.value[hour - 1].$el
  el.scrollIntoView({
    behavior: isSmooth ? 'smooth' : 'instant'
  })
}

// *** ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ

function hasActivity(timelineItem, activity) {
  return timelineItem.activityId === activity.id
}

// *** ***

function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: null, //[0, 1, 2, 3, 4].includes(hour) ? activities.value[hour % 3].id : null,
    activitySeconds: 0 //[0, 1, 2, 3, 4].includes(hour) ? hour * 600 : 0
  }))
}
