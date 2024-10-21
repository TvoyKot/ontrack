import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/solid'
import { generatePeriodSelectOptions } from './functions.js'

export const BUTTON_TYPE_PRIMARY = 'primary'
export const BUTTON_TYPE_NEUTRAL = 'neutral'
export const BUTTON_TYPE_DANGER = 'danger'
export const BUTTON_TYPE_SUCCESS = 'success'
export const BUTTON_TYPE_WARNING = 'warning'

export const BUTTON_TYPES = [
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
]

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
};

export const HOURS_IN_DAY = 24;
export const MIDNIGHTHOUR = 0;
export const SECONDS_IN_HOUR = 3600;
export const SECONDS_IN_MINUTE = 60;
export const MINUTES_IN_HOUR = SECONDS_IN_HOUR / SECONDS_IN_MINUTE;
export const MILLISECONDS_IN_SECOND = 1000;

export const NULLABLE_ACTIVITY = { id: null };

const PERIOD_IN_MINUTES = [
  15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180,
]

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions(PERIOD_IN_MINUTES)