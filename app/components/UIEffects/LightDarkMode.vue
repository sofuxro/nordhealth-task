<script setup lang="ts">
const isDark = ref(false);

const switchColorScheme = async (isDark: boolean) => {
  // We need to use page reload because of how nord vet light/dark themes are loaded.
  await navigateTo({
    ...(isDark && { query: { theme: 'dark' }}),
  }, { external: true });
}

onMounted(() => {
  isDark.value = useRoute().query?.theme === 'dark'
                 || window.matchMedia('(prefers-color-scheme: dark)').matches;

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => switchColorScheme(event.matches));
})
</script>

<template>
  <div class="nord-light-dark-wrapper">
    <nord-button
      square
      size="s"
      aria-describedby="tooltip"
      @click="switchColorScheme(!isDark)"
    >
      <nord-icon :name="isDark ? 'interface-mode-dark' : 'interface-mode-light'" label="Copy" />
    </nord-button>
    <nord-tooltip id="tooltip">{{ isDark ? 'Switch to light mode' : 'Switch to dark mode' }}</nord-tooltip>
  </div>
</template>

