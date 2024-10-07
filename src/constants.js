import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/solid'

export const BUTTON_TYPE_PRIMARY = 'primary'
export const BUTTON_TYPE_NEUTRAL = 'neutral'
export const BUTTON_TYPE_DANGER = 'danger'

export const BUTTON_TYPES = [
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_DANGER,
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

export const PERIOD_SELECT_OPTIONS = [
  {
    value: 15 * 60,
    label: '0:15'
  },
  {
    value: 30 * 60,
    label: '0:30'
  },
  {
    value: 45 * 60,
    label: '0:45'
  },
  {
    value: 60 * 60,
    label: '1:00'
  },
  {
    value: 75 * 60,
    label: '1:15'
  },
  {
    value: 90 * 60,
    label: '1:30'
  },
  {
    value: 105 * 60,
    label: '1:45'
  },
  {
    value: 120 * 60,
    label: '2:00'
  }
]

export const SECONDS_IN_HOUR = 1 * 3600 