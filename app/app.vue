<script setup lang="ts">
import '@nordhealth/css'
import '@nordhealth/components'
import type { ResolvableLink } from 'unhead/types'

useHead({
  link: [
    {
      id: 'nord-light', rel: 'stylesheet', href: '/css/vet.css',
      tagPosition: 'bodyOpen'
    } as ResolvableLink | { disabled: boolean },
    {
      id: 'nord-dark', rel: 'stylesheet', href: '/css/vet-dark.css',
      tagPosition: 'bodyOpen'
    } as ResolvableLink | { disabled: boolean },
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
  </NuxtLayout>
</template>
