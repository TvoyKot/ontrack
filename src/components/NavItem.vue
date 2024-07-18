<script>
export default {
  inheritAttrs: false
}
</script>
<template>
  <li class="flex-1">
    <a :style="$attrs" :href="$attrs" class="flex flex-col items-center p-2 capitalize text-sx">
      <slot></slot>
    </a>
  </li>
</template>