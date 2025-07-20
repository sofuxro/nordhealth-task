<script setup lang="ts">
const isDark = ref(false)
const darkLink = ref<HTMLLinkElement | null>(null)
const lightLink = ref<HTMLLinkElement | null>(null)

const switchColorScheme = async (value: boolean) => {
  isDark.value = value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')

  lightLink.value!.disabled = isDark.value
  darkLink.value!.disabled = !isDark.value
}

const init = async () => {
  if (localStorage.getItem('theme'))
    isDark.value = localStorage.getItem('theme') === 'dark'
  else
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches

  // We use link placed at the top of the <body> with disabled attribute to switch themes.
  darkLink.value = document.getElementById('nord-dark') as HTMLLinkElement
  lightLink.value = document.getElementById('nord-light') as HTMLLinkElement

  switchColorScheme(isDark.value)
}

onMounted(() => {
  init();

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

