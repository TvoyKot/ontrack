import { NAV_ITEMS, HOURS_IN_DAY } from './constants.js'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY
}
