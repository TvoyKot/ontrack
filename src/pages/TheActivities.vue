<script setup>
import ActivityItem from '../components/ActivityItem.vue'
import TheActivitiesEmptyState from '../components/TheActivitiesEmptyState.vue'
import TheActivityForm from '../components/TheActivityForm.vue'
import { validateActivities } from '../validators'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})
</script>
<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem v-for="activity in activities" :key="activity.id" :activity="activity" />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm />
  </div>
</template>
