import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHTHOUR } from './constants.js'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHTHOUR && hour < HOURS_IN_DAY
}
 