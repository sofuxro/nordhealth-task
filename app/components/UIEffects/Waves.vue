<!-- https://codepen.io/cyrielle-vuillemin/pen/wOKdeY -->

<script setup lang="ts">
const { width = 600 } = defineProps<{
  width?: number
}>()

const waveWidth = computed(() => width * 2)
</script>

<template>
  <div class="wave-wrapper">
    <div class="wave one" />
    <div class="wave two" />
    <div class="wave three" />
  </div>
</template>

<style scoped>
.wave-wrapper{
  --half-width: v-bind(`${width}px`);
  --full-width: v-bind(`${waveWidth}px`);

  position: relative;
  height: var(--half-width);
  width: var(--half-width);
  overflow: hidden;
  border-radius: 50%;
  background-color: light-dark(#EFF1F6, #1F2937);
}

.wave{
  position: absolute;
  top: 70%;
  left: -50%;
  width: var(--full-width);
  height: var(--full-width);
  background-color: #2C4F86;
  border-radius: 35%;
  animation-name: waves;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  &.one{
    animation-duration: 30000ms;
    opacity: 0.4;
  }

  &.two{
    background-color: #70C7CB;
    animation-duration: 40000ms;
  }

  &.three{
    animation-duration: 50000ms;
  }
}

@keyframes waves{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
