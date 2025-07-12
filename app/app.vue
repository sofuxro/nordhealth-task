<script setup lang="ts">
import '@nordhealth/css'
import '@nordhealth/components'

if (useRoute().query?.theme === 'dark')
  import('@nordhealth/themes/lib/vet-dark.css')
else
  import('@nordhealth/themes/lib/vet.css')
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
  </NuxtLayout>
</template>
