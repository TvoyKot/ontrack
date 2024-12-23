import { computed, ref } from 'vue'
import { id } from './functions.js'
import {  SECONDS_IN_MINUTE, SECONDS_IN_HOUR, HUNDRED_PERCENT } from './constants.js'

export const activities = ref(generateActivities())

export const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete)
)

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function createActivity(activity) {
  activities.value.push(activity)
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function calculateActivityCompletionPercantage({ secondsToComplete }, trackedSeconds) {
  return Math.floor(
    (trackedSeconds * HUNDRED_PERCENT) / secondsToComplete
  )
}

export function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete || 0
}

function generateActivities() {
  return ['Coding', 'Reading', 'Training'].map((name, hours) => ({
    id: id(),
    name: name,
    secondsToComplete:  SECONDS_IN_MINUTE * 15 // hours * SECONDS_IN_HOUR
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ value: activity.id, label: activity.name }))
}
