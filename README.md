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
<a href="https://www.storyblok.com/" target="_blank" alt="Storyblok"><img width="120px" src="https://nordhealth.com/assets/images/sharing/home.png" alt="Nordhealth" /></a>
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
