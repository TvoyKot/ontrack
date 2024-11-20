import {
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
  LOW_PERCENT,
  MEDIUM_PERCENT,
  HUNDRED_PERCENT
} from './constants.js'
import { isNull } from './validators.js'

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function getProgressColorClass(percentage) {
  if (percentage < LOW_PERCENT) {
    return 'bg-red-500'
  } else if (percentage < MEDIUM_PERCENT) {
    return 'bg-yellow-500'
  } else if (percentage < HUNDRED_PERCENT) {
    return 'bg-blue-500'
  }
  return 'bg-green-500'
}
export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]
  return periodsInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * SECONDS_IN_MINUTE,
    label: generatePeriodSelectOptionsLabel(periodInMinutes)
  }))
}

function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hours = Math.floor(periodInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (periodInMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0)
  return `${hours}:${minutes}`
}

export function currentHour() {
  return new Date().getHours()
}

export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)
  const utc = date.toUTCString()
  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}
