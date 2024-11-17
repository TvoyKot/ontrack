import { ref } from 'vue'
import { isPageValid } from './validators.js'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants.js'
import TheTimeline from './pages/TheTimeline.vue'
import TheProgress from './pages/TheProgress.vue'
import TheActivities from './pages/TheActivities.vue'

export const routes = {
  [PAGE_TIMELINE]: TheTimeline,
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress
}

export const currentPage = ref(normalizePageHash())

export function navigate(page) {
  document.body.scrollIntoView()
  currentPage.value = page
}

export function normalizePageHash() {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}
