<h1 align="center">Nordhealth task</h1>
<br/><br/><br/>

<p align="center">Built with
<br/><br/>
<p align="center">
<a href="https://nuxt.com/" target="_blank" alt="Nuxt"><img width="40" src="https://nuxt.com/assets/design-kit/icon-green.svg" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://vuejs.org/" target="_blank" alt="Vue" height="40" width="40"><img width="40" src="https://vuejs.org/images/logo.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://supabase.com/" target="_blank" alt="Supabase"><img height="40" src="https://cdn.prod.website-files.com/66842e04d18971242a294872/669e87d174d190a8ba60b861_supabase-TAiY.png"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.typescriptlang.org/" target="_blank" alt="Typescript"><img width="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://vitest.dev/" target="_blank" alt="Vitest"><img height="40" src="https://vitest.dev/logo.svg" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.netlify.com/" target="_blank" alt="Netlify"><img height="40" src="https://logosandtypes.com/wp-content/uploads/2023/03/netlify.svg" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<p align="center">as a task for</p>

<br/>

<p align="center">
<a href="https://www.storyblok.com/" target="_blank" alt="Storyblok"><svg class="n-logomark" fill="none" height="60" viewBox="0 0 150 150" width="60" xmlns="http://www.w3.org/2000/svg"><rect fill="rgb(53, 89, 199)" height="150" rx="33" width="150"></rect><g fill="white"><path d="m104.46 121.081c-4.137 0-8.0751-1.591-11.0187-4.535l-.0795-.079c-.0796-.04-.1194-.12-.1989-.16l-41.4886-41.9257 6.7623-6.7623 41.409 40.255.0796.08c.0798.04.1188.119.1988.199 1.154 1.154 2.705 1.83 4.336 1.83 3.381 0 6.563-2.785 6.563-6.245v-58.355c0-3.4607-3.142-6.2451-6.563-6.2451-1.551 0-3.103.6364-4.256 1.7502l-.12.1193-19.5706 17.9798-6.7622-6.7623 19.3719-19.372c.0398-.0397.0796-.1193.1591-.1591 2.9834-2.9833 7.0408-4.6938 11.1778-4.6938 8.592 0 15.991 6.9612 16.11 15.5532v62.0138c-.159 8.592-7.558 15.514-16.11 15.514z"></path><path d="m44.7124 28c4.1369 0 8.0749 1.5911 11.0185 4.5347l.0795.0796c.0796.0397.1194.1193.1989.1591l41.8864 41.5283-6.7623 6.7623-41.8068-39.8577-.0795-.0795c-.0796-.0398-.1194-.1194-.1989-.1989-1.1536-1.1536-2.7049-1.8298-4.3358-1.8298-3.3812 0-6.1657 2.7845-6.1657 6.2452v58.3547c0 3.46 2.7447 6.245 6.1657 6.245 1.5513 0 3.1026-.636 4.2562-1.75l.1193-.12 19.5709-17.9793 6.7623 6.7622-19.372 19.3721c-.0398.04-.0795.119-.1591.159-2.9833 2.983-7.0407 4.694-11.1776 4.694-8.5921 0-15.5931-6.961-15.7124-15.553v-62.0145c.1591-8.5921 7.1601-15.5135 15.7124-15.5135z"></path></g></svg></a>
</p>
<br/><br/><br/>

<h3 align="center">
  <a href="https://nordhealth-task.netlify.app/" target="_blank" alt="Nordhealth task">https://nordhealth-task.netlify.app/</a>
</h3>
<p align="center">( live demo )</p>
<br/><br/><br/>

## Features

* Auth page
  * Form
    * Email and password field validated with error messages
      * Tested for required
      * Password strength
      * Even for existence of the email ('User already exists')
    * Checkbox to receive occasional product updates and announcements
  * Ability to sign in (can switch between Sign up and Login)
* Profile page
  * Showing email used for Sign up and if the user opted in or not for the updates
  * Ability to logout
* Overall pages
  * Main page protected by authentication
  * Light / dark mode (implemented in the url and with page reload because of how the theme css are imported)
* Integration tests
* Frameworks and flows
  * Built with Nuxt 4 and Vue 3
  * Tested with vitest & test-utils
  * Hosted on Netlify
  * DB profiles and authentication on Supabase
  * Written in Typescript
* ... anything else I've may missed out for sure would not come up during the interview :P


## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

## Testing

```bash
# npm
npm run test
```

## Linting

```bash
# npm
npm run lint
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
