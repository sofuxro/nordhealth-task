<script setup lang="ts">
import '@nordhealth/css'
import '@nordhealth/components'
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
  </div>
</template>
