import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/solid'

export const BUTTON_TYPE_DANGER = 'danger'
export const BUTTON_TYPE_NEUTRAL = 'neutral'

export const BUTTON_TYPES = [
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL
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
    value: 15,
    label: '0:15'
  },
  {
    value: 30,
    label: '0:30'
  },
  {
    value: 45,
    label: '0:45'
  },
  {
    value: 60,
    label: '1:00'
  },
  {
    value: 75,
    label: '1:15'
  },
  {
    value: 90,
    label: '1:30'
  },
  {
    value: 105,
    label: '1:45'
  },
  {
    value: 120,
    label: '2:00'
  }
]