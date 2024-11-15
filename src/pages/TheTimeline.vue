<script setup>
import { ref, watchPostEffect, nextTick } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import { timelineItems } from '../timeline-items.js'
import { currentHour } from '../functions'
import { MIDNIGHTHOUR, PAGE_TIMELINE } from '../constants.js'
import { currentPage } from '../router'

defineExpose({ scrollToHour })

const timelineItemRefs = ref([])

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()
    scrollToHour(null, false)
  }
})

function scrollToHour(hour = null, isSmooth = true) {
  hour ??= currentHour()
  const el = hour === MIDNIGHTHOUR ? document.body : timelineItemRefs.value[hour - 1].$el
  el.scrollIntoView({
    behavior: isSmooth ? 'smooth' : 'instant'
  })
}
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>
