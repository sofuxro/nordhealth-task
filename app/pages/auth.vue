<script setup lang="ts">
import NordWaves from '~/components/UIEffects/Waves.vue'
import NordPasswordInput from '~/components/NordPasswordInput.vue'

import type { AuthForm } from '~~/shared/types/auth'
import type { formSchemaType } from '~/api/auth'

import { signIn as signInSEOMeta } from '~/assets/seo/index'
import { useCustomStyle } from '~/composables/useCustomStyle'
import AuthApi from '~/api/auth'
import { isEmptyObject } from '~~/shared/utils/helpers'

definePageMeta({ layout: 'auth' })
useHead(signInSEOMeta)
useCustomStyle()
const { fetch: refreshSession } = useUserSession()

/* ====================== Vars ====================== */

const formWrapper = useTemplateRef<HTMLDivElement>('formWrapper')
const isSignup = ref(true)

const form = ref<AuthForm>({
  email: '',
  password: '',
  optIn: false,
})

const errorMessages = ref<Partial<formSchemaType>>({})

const loading = ref(false)

/* ====================== Functions ====================== */

const tryAuth = async () => {
  loading.value = true

  errorMessages.value = await AuthApi(isSignup.value, form.value)

  if (isEmptyObject(errorMessages.value)) {
    // Refresh the session on client-side and redirect to the default page
    await refreshSession()
    await navigateTo({ path: '/', query: useRoute().query })
  }

  loading.value = false
}

const resetForm = () => {
  form.value.email = ''
  form.value.password = ''
  form.value.optIn = false
  errorMessages.value = {}
}

const toggleAuth = () => {
  // Animation for toggling auth state
  formWrapper.value?.classList.toggle('is-flip')

  setTimeout(() => {
    resetForm()

    isSignup.value = !isSignup.value

    formWrapper.value?.classList.toggle('is-flip')
  }, 400) // Match the duration of the CSS transition
}

const inputEmail = (event: Event) => {
  form.value.email = (event.target as HTMLInputElement).value
  // Reset email error message
  if (errorMessages.value)
    errorMessages.value.email = undefined
}

/* ====================== Hooks ====================== */

watch(() => form.value.password, () => {
  // Reset password error message
  if (errorMessages.value)
    errorMessages.value.password = undefined
})
</script>

<!-- ============================================ Template ============================================ -->

<template>
  <div class="nord-signup-wrapper">
    <NordWaves />

    <div ref="formWrapper" class="nord-form-wrapper">
      <nord-stack>
        <nord-card padding="l">
          <!-- eslint-disable vue/no-deprecated-slot-attribute -->
          <h1 slot="header">Sign {{ isSignup ? 'up' : 'in' }} to Nord Pharmacy</h1>
          <!-- eslint-enable -->

          <form @submit.prevent="tryAuth">
            <nord-stack>
              <nord-input
                :value="form.email"
                label="Email"
                expand
                type="email"
                placeholder="funky.user@gmail.com"
                :error="errorMessages?.email"
                @input="inputEmail"
              />

              <NordPasswordInput v-model="form.password" :error="errorMessages?.password?.[0]" />

              <nord-checkbox
                v-if="isSignup"
                label="Receive occasional product updates and announcements"
                @change="form.optIn = ($event.target as HTMLInputElement).checked"
              />

              <nord-button
                type="submit"
                expand
                variant="primary"
                :loading="loading"
              >
                Sign {{ isSignup ? 'up' : 'in' }}
              </nord-button>
            </nord-stack>
          </form>
        </nord-card>

        <nord-card class="n-align-center">
          <template v-if="isSignup">Already have an account? <a @click="toggleAuth">Sign in</a>.</template>
          <template v-else>Don't have an account? <a @click="toggleAuth">Sign up</a>.</template>
        </nord-card>
      </nord-stack>
    </div>
  </div>
</template>

<!-- ============================================= Styles ============================================= -->

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
  transition: transform 0.4s ease;
}
.nord-form-wrapper.is-flip {
  transform: rotateY(90deg);
}

nord-stack {
  max-inline-size: 320px;
  margin: 0 auto;
}

nord-card a {
  cursor: pointer;
}
</style>
