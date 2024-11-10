import { ref } from 'vue'
import { normalizePageHash } from './functions.js'
import { PAGE_TIMELINE } from './constants.js'
export const currentPage = ref(normalizePageHash())

export const timelineRef = ref()

export function navigate(page) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    console.log(timelineRef.value)
    timelineRef.value.scrollToHour()
  } else if (page !== PAGE_TIMELINE) {
    document.body.scrollIntoView()
  }
  currentPage.value = page
}