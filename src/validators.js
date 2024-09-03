import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHTHOUR } from './constants.js'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHTHOUR, HOURS_IN_DAY - 1)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isString(label)
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
  return value === 'string'
}
