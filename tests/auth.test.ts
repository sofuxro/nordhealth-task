// @vitest-environment nuxt
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe, beforeEach } from 'vitest'


import Auth from '~~/app/pages/auth.vue'

describe('Auth page', () => {
  let component: ReturnType<typeof mountSuspended>
  let emailInput: ReturnType<typeof component.find>
  let passwordInput: ReturnType<typeof component.find>
  let form: ReturnType<typeof component.find>

  beforeEach(async () => {
    component = await mountSuspended(Auth)
    emailInput = component.find('nord-input')
    passwordInput = component.findAll('nord-input').at(1)
    form = component.find('form')
  })

  /* ================================== EMAIL ================================== */

  it('Email invalid - empty email', async() => {
    emailInput.element.value = ''
    await emailInput.trigger('input')
    await form.trigger('submit')

    expect(emailInput.element.error?.[0]).toBe('Invalid email address')
  })

  it('Email invalid  - wrong format email', async() => {
    emailInput.element.value = '@email.com'
    await emailInput.trigger('input')
    await form.trigger('submit')

    expect(emailInput.element.error?.[0]).toBe('Invalid email address')
  })

  it('Email valid', async() => {
    emailInput.element.value = 'example@email.com'
    await emailInput.trigger('input')
    await form.trigger('submit')

    expect(emailInput.element.error).toBe(undefined)
  })

  /* ================================== PASSWORD ================================== */

  it('Password invalid - too short', async() => {
    passwordInput.element.value = '123'
    await passwordInput.trigger('input')
    await form.trigger('submit')

    expect(passwordInput.element.error).toBe('Password must be at least 8 characters long')
  })

  it('Password invalid - too long', async() => {
    passwordInput.element.value = 'PASSWORd1!Flantergobulixandropelmatickurvostentraphaduglimorzenquast'
    await passwordInput.trigger('input')
    await form.trigger('submit')

    expect(passwordInput.element.error).toBe('Password must not exceed 64 characters')
  })

  it('Password invalid - at least one lower case', async() => {
    passwordInput.element.value = 'PASSWORD'
    await passwordInput.trigger('input')
    await form.trigger('submit')

    expect(passwordInput.element.error).toBe('Password must contain at least one lowercase letter')
  })

  it('Password invalid - at least one upper case', async() => {
    passwordInput.element.value = 'password'
    await passwordInput.trigger('input')
    await form.trigger('submit')

    expect(passwordInput.element.error).toBe('Password must contain at least one uppercase letter')
  })

  it('Password invalid - at least one number', async() => {
    passwordInput.element.value = 'PASSWORd'
    await passwordInput.trigger('input')
    await form.trigger('submit')

    expect(passwordInput.element.error).toBe('Password must contain at least one number')
  })

  it('Password invalid - at least one special character', async() => {
    passwordInput.element.value = 'PASSWORd1'
    await passwordInput.trigger('input')
    await form.trigger('submit')

    expect(passwordInput.element.error).toBe('Password must contain at least one special character')
  })

  it('Password valid', async() => {
    passwordInput.element.value = 'PASSWORd1!'
    await passwordInput.trigger('input')
    await form.trigger('submit')

    expect(passwordInput.element.error).toBe(undefined)
  })

  it('Password - show/hide text', async() => {
    passwordInput.element.value = 'PASSWORd1!'
    await passwordInput.trigger('input')

    expect(passwordInput.element.type).toBe('password') // Password hidden
    await component.find('nord-button').trigger('click')
    expect(passwordInput.element.type).toBe('text') //     Password visible
  })

  /* ================================== Checkbox ================================== */

  it('Checkbox', async() => {
    expect(component.vm.form.value.optIn).toBe(false) // Initially unchecked

    component.find('nord-checkbox').element.checked = true
    await component.find('nord-checkbox').trigger('change') // Trigger change event

    expect(component.vm.form.value.optIn).toBe(true) // Now checked
  })

  /* ================================== UI ================================== */

  it('Switch to signin', async() => {
    expect(component.findAll('nord-button')[1].text()).toBe('Sign up')

    await component.findAll('a')[0].trigger('click') // Click on the "Sign in" link
    await new Promise(resolve => setTimeout(resolve, 500)) // Wait for the animation to finish

    expect(component.findAll('nord-button')[1].text()).toBe('Sign in')
  })
})
