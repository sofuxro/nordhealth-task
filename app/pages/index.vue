<script setup lang="ts">
import NordLightDarkMode from '~/components/UIEffects/LightDarkMode.vue'

import { profile as profileSEOMeta } from '~/assets/seo/index'
import type { AuthForm } from '~~/shared/types/auth'

definePageMeta({ middleware: ['auth'] })
useHead(profileSEOMeta)

/* ====================== Vars =========================== */

const { user, clear: clearSession } = useUserSession()

const localUser = user.value as Partial<AuthForm>

/* ====================== Functions ====================== */

const logout = async () => {
  await clearSession()
  await navigateTo({ path: '/auth', query: useRoute().query })
}
</script>

<!-- ============================================ Template ============================================ -->

<template>
  <div>
    <!-- eslint-disable vue/no-deprecated-slot-attribute -->
    <nord-layout ref="nord-layout">
      <nord-navigation ref="nord-navigation" slot="nav">
        <nord-dropdown slot="header" expand>
          <nord-button slot="toggle" expand>
            <nord-avatar slot="start" name="Oradea Pharmacy" variant="square">OP</nord-avatar>
            Oradea Pharmacy
          </nord-button>
          <nord-dropdown-group heading="laura.williams@nordhealth.com">
            <nord-dropdown-item>
              <nord-avatar
                slot="start"
                name="Bath Clinic"
                size="s"
                variant="square"
              >
                B
              </nord-avatar>
              Bolton Clinic
              <nord-icon slot="end" name="interface-checked" />
            </nord-dropdown-item>
            <nord-dropdown-item>
              <nord-avatar
                slot="start"
                name="Ocean Beach Clinic"
                size="s"
                variant="square"
                style="--n-avatar-color: var(--n-color-status-success)"
              >
                O
              </nord-avatar>
              Ocean Beach Clinic
            </nord-dropdown-item>
            <nord-dropdown-item>
              <nord-avatar
                slot="start"
                name="Park Animal Hospital"
                size="s"
                variant="square"
                style="--n-avatar-color: var(--n-color-status-info)"
              >
                P
              </nord-avatar>
              Park Animal Hospital
            </nord-dropdown-item>
            <nord-dropdown-item>
              <nord-avatar
                slot="start"
                name="Balboa Pet Hospital"
                size="s"
                variant="square"
                style="--n-avatar-color: var(--n-color-status-danger)"
              >
                B
              </nord-avatar>
              Balboa Pet Hospital
            </nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>Add another clinic</nord-dropdown-item>
            <nord-dropdown-item>Customize style</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item>Sign out from all clinics</nord-dropdown-item>
        </nord-dropdown>

        <nord-nav-group heading="Workspace">
          <nord-nav-item href="#" icon="navigation-dashboard">Dashboard</nord-nav-item>
          <nord-nav-item icon="navigation-payments">
            Payments
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#">All transactions</nord-nav-item>
              <nord-nav-item href="#">Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item icon="navigation-reports">
            Reports
            <nord-nav-group slot="subnav">
              <nord-nav-item href="#" active>Payments</nord-nav-item>
              <nord-nav-item href="#">Disputes</nord-nav-item>
              <nord-nav-item href="#">Payouts</nord-nav-item>
            </nord-nav-group>
          </nord-nav-item>
          <nord-nav-item href="#" icon="navigation-settings">Settings</nord-nav-item>
        </nord-nav-group>
      </nord-navigation>

      <nord-top-bar slot="top-bar">
        <nord-input
          expand
          label="Search"
          hide-label
          type="search"
          placeholder="Search"
        />

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="notifications-tooltip">
            <nord-icon name="navigation-notifications" size="m" color="rgba(255,255,255,0.85)" />
            <div class="n-counter" aria-hidden="true" style="position: absolute">12</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">
            Notifications <span class="n-font-weight n-color-text-weaker">(12)</span>
          </h2>
          <nord-button slot="header-end" size="s" autofocus>Mark all as read</nord-button>
          <nord-message unread highlight>
            Ariel Salminen arrived to clinic with Pixie cat.
            <span slot="footer">Just now at Nord Clinic</span>
          </nord-message>
          <nord-message unread>
            New feature available! We’ve introduced a quick way to navigate between app views, actions,
            and more using a new command menu.
            <span slot="footer">12 minutes ago</span>
          </nord-message>
          <nord-message unread>
            Nina Hallikainen arrived to clinic with Durante dog.
            <span slot="footer">20 minutes ago at Nord Clinic</span>
          </nord-message>
          <nord-message unread>
            David Darnes arrived to clinic with Norfryd cat.
            <span slot="footer">2 hours ago at Nord Clinic</span>
          </nord-message>
          <nord-message unread>
            Nick Williams arrived to clinic with Moog cat.
            <span slot="footer">2 hours ago at Nord Clinic</span>
          </nord-message>
          <nord-message unread>
            Eric Habich arrived to clinic with Zero cat.
            <span slot="footer">4 hours ago at Nord Clinic</span>
          </nord-message>
          <nord-message unread>
            Elvin van Eede arrived to clinic with Amoeba cat.
            <span slot="footer">12 hours ago at Nord Clinic</span>
          </nord-message>
          <nord-dropdown-item>
            See all notifications<nord-icon slot="end" name="arrow-right-long" />
          </nord-dropdown-item>
        </nord-dropdown>
        <nord-tooltip id="notifications-tooltip">12 unread notifications</nord-tooltip>

        <nord-dropdown slot="end" align="start" position="block-end">
          <nord-button slot="toggle" variant="plain" aria-describedby="tasks-tooltip">
            <nord-icon name="navigation-tasks" size="m" color="rgba(255,255,255,0.85)" />
            <div class="n-counter" aria-hidden="true" style="position: absolute">4</div>
          </nord-button>
          <h2 slot="header" class="n-typescale-l">
            My tasks <span class="n-font-weight n-color-text-weaker">(4)</span>
          </h2>
          <nord-button slot="header-end" size="s" autofocus>
            <nord-icon slot="start" size="xxs" name="interface-add-small" />
            Create task
          </nord-button>
          <nord-message unread>
            Make sure to ask details from John regarding yesterday’s patient who arrived late.
            <span slot="footer">Finish by Wednesday, March 8</span>
          </nord-message>
          <nord-message unread>
            Import new patients from Ocean Beach Clinic into the system.
            <span slot="footer">Finish by Thursday, March 9</span>
          </nord-message>
          <nord-message unread>
            Call David and ask about his cat’s wellbeing.
            <span slot="footer">Finish by Thursday, March 9</span>
          </nord-message>
          <nord-message unread>
            Call Anne and reschedule their visit.
            <span slot="footer">Finish by Friday, March 10</span>
          </nord-message>
          <nord-dropdown-item>
            See all tasks<nord-icon slot="end" name="arrow-right-long" />
          </nord-dropdown-item>
        </nord-dropdown>
        <nord-tooltip id="tasks-tooltip">4 unfinished tasks</nord-tooltip>

        <NordLightDarkMode slot="end" />

        <nord-dropdown slot="end">
          <nord-button slot="toggle" variant="plain" aria-describedby="user-tooltip">
            <nord-avatar style="transform: translateY(-1px)" :name="localUser?.email">OP</nord-avatar>
          </nord-button>
          <nord-avatar slot="header" size="s" :name="localUser?.email">OP</nord-avatar>
          <p slot="header" class="n-color-text-weak n-font-size-s">
            Signed in as <span class="n-font-weight-active">{{ localUser?.email }}</span>
          </p>
          <nord-dropdown-group>
            <nord-dropdown-item>My profile</nord-dropdown-item>
            <nord-dropdown-item>Account Settings</nord-dropdown-item>
            <nord-dropdown-item>Change password</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-group>
            <nord-dropdown-item>
              Keyboard commands
              <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
            </nord-dropdown-item>
            <nord-dropdown-item>Help & Support</nord-dropdown-item>
          </nord-dropdown-group>
          <nord-dropdown-item @click="logout">
            Sign out
            <nord-icon slot="end" name="interface-logout" />
          </nord-dropdown-item>
        </nord-dropdown>
        <nord-tooltip id="user-tooltip">{{ localUser?.email }}</nord-tooltip>
      </nord-top-bar>

      <nord-header slot="header">
        <h1 class="n-typescale-l">Dashboard</h1>
        <nord-button slot="end" variant="primary" size="s">
          <nord-icon slot="start" name="interface-add-small" />
          Create new
        </nord-button>
        <nord-tooltip id="export" position="block-end"> Export data as Spreadsheet </nord-tooltip>
      </nord-header>

      <nord-card class="full-height">
        <div class="scrollable">
          <h1>Welcome, {{ localUser?.email?.split('@')[0] }}</h1>
          <p>We're thrilled to have you on board.</p>
          <p>
            Easily manage prescriptions, explore health products, and enjoy fast, reliable service.
            All in one place.
          </p>
          <p>Your journey to better health starts here!</p>
          <br>
          <h3 v-if="localUser?.optIn">Thank you for opting in to our newsletter!</h3>
        </div>
      </nord-card>
    </nord-layout>
    <nord-command-menu ref="nord-command-menu" />
  <!-- eslint-enable -->
  </div>
</template>

<!-- ============================================= Styles ============================================= -->

<style scoped>
.full-height {
  position: absolute;
  inset-block-start: calc(var(--n-size-top-bar) + var(--n-space-l));
  inset-block-end: calc(var(--n-space-l));
  inset-inline-start: var(--n-space-l);
  inset-inline-end: var(--n-space-l);
  min-block-size: 100px;
  inline-size: auto;
}
</style>
