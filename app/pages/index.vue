<script setup lang="ts">
import NordWaves from '~/components/UIEffects/Waves.vue'
import NordPasswordInput from '~/components/NordPasswordInput.vue'

import { signUp as signUpSEOMeta } from '~/assets/seo/index'
import { useCustomStyle } from '~/composables/useCustomStyle'

useHead(signUpSEOMeta)
useCustomStyle()

const form = ref({
  email: '',
  password: ''
})

const loading = ref(false)

const trySignup = async () => {
  loading.value = true

  const { error } = await useAsyncData(() => $fetch(
                      '/api/signup',
                      {method: 'POST', body: form.value }
                    ))
  if (error.value)
    console.log(error.value?.statusMessage, error)
  else
    console.log('Sign up successful')
  loading.value = false
}
</script>

<template>
  <ClientOnly>
    <div class="nord-signup-wrapper">
      <NordWaves />

      <div class="nord-form-wrapper">
        <nord-stack>
          <nord-card padding="l">
            <!-- eslint-disable vue/no-deprecated-slot-attribute -->
            <h1 slot="header">Sign up to Nord Pharmacy</h1>
            <!-- eslint-enable -->

            <form @submit.prevent="trySignup">
              <nord-stack>
                <nord-input
                  :value="form.email"
                  label="Email"
                  expand
                  required
                  hide-required
                  name="email"
                  type="email"
                  placeholder="funky.user@gmail.com"
                />

                <NordPasswordInput v-model="form.password" />

                <nord-button
                  type="submit"
                  expand
                  variant="primary"
                >
                  Sign up
                </nord-button>
              </nord-stack>
            </form>
          </nord-card>
          <nord-card class="n-align-center">Already have an account? <a href="#">Sign in</a>.</nord-card>
        </nord-stack>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.nord-signup-wrapper {
  position: relative;
}

.nord-form-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-items: center;
  align-items: center;
}

nord-stack {
  max-inline-size: 320px;
  margin: 0 auto;
}
</style>
