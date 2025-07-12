<script setup lang="ts">
const isDark = ref(false);

const switchColorScheme = async (isDark: boolean) => {
  // We need to use page reload because of how nord vet light/dark themes are loaded.
  await navigateTo({
    query: { theme: isDark ? 'dark' : 'light' },
  }, { external: true });
}

onMounted(() => {
  if (useRoute().query?.theme === undefined)
    // If the theme is not set in the query, we check the user's system preference.
    // This will only run once until we set the theme in the query.
    switchColorScheme(window.matchMedia('(prefers-color-scheme: dark)').matches)

  else
    // If the theme is already set in the query, we use that value.
    isDark.value = useRoute().query?.theme === 'dark'

  // Listen for changes in the user's system preference and switch the theme accordingly.
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

