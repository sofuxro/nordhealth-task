<script setup lang="ts">
const showPassword = ref(false)

const { error } = defineProps<{
  error: string | undefined
}>()

const password = defineModel<string>()

</script>

<template>
  <div>
    <nord-input
      :value="password"
      :type="showPassword ? 'text' : 'password'"
      :error="error"
      label="Password"
      expand
      placeholder="Secret password 123"
      @input="password = ($event.target as HTMLInputElement).value"
    >
      <!-- eslint-disable vue/no-deprecated-slot-attribute -->
      <nord-button
        slot="end"
        aria-describedby="password-tooltip"
        square
        @click.prevent="showPassword = !showPassword"
      >
        <nord-icon v-if="showPassword" name="interface-edit-on" />
        <nord-icon v-else name="interface-edit-off" />
      </nord-button>
      <!-- eslint-enable -->
    </nord-input>
    <nord-tooltip id="password-tooltip">Show / hide password</nord-tooltip>
  </div>
</template>
