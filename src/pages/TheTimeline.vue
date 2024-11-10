<script setup>
import { ref, watchPostEffect, nextTick } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import { validateTimelineItems } from '../validators'
import { MIDNIGHTHOUR, PAGE_TIMELINE } from '../constants'
import { currentPage } from '../router'

defineProps({
  timelineItems: {
    type: Array,
    required: true,
    validator: validateTimelineItems
  }
})

defineExpose({ scrollToHour })

const timelineItemRefs = ref([])

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()
    scrollToHour(null, false)
  }
})

function scrollToHour(hour = null, isSmooth = true) {
  hour ??= new Date().getHours()
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
        @scroll-to-hour="scrollToHour"
      />
    </ul>
  </div>
</template>
