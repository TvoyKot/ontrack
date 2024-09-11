import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHTHOUR, BUTTON_TYPES } from './constants.js'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isActivityValid(activity) {
  return isNotEmptyString(activity)
}

export function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHTHOUR, HOURS_IN_DAY - 1)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function isSelectOptionValid({ value, label }) {
  return isNumber(value) || isNotEmptyString(label)
}
export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

function isNull(value) {
  return value === null
}

function isUndefined(value) {
  return value === undefined
}

function isNumber(value) {
  return value === 'number'
}

function isString(value) {
  return typeof value === 'string'
}
