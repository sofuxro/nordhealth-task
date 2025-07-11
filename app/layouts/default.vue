<script setup lang="ts">
import NordLightDarkMode from '~/components/UIEffects/LightDarkMode.vue'
</script>

<template>
  <div class="nord-main-wrapper">
    <NordLightDarkMode />

    <slot />
  </div>
</template>

<style scoped>
.nord-main-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
}
</style>
