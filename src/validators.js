import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHTHOUR, BUTTON_TYPES } from './constants.js'
import { ICONS } from './icons.js'
export function isPageValid(page) {
  // return Object.keys(NAV_ITEMS).includes(page)
  return NAV_ITEMS.some((navItem) => navItem.page === page)
}

export function isIconValid(icon) {
  return Object.keys(ICONS).includes(icon)
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

export function isNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isActivityValid({ id, name, secondsToComplete }) {
  if (isNull(id)) {
    return true
  }
  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHTHOUR, HOURS_IN_DAY - 1)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function isSelectOptionValid({ value, label }) {
  return (isString(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}
export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}
export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isUndefined(value) {
  return value === undefined
}

export function isNull(value) {
  return value === null
}
export function isNumber(value) {
  return value === 'number'
}
function isBetween(value, start, end) {
  return value >= start && value <= end
}
function isString(value) {
  return typeof value === 'string'
}
function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}
