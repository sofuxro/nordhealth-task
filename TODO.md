* slot="header"
    `slot` attributes are deprecated. eslint vue/no-deprecated-slot-attribute

* documentation for components in nuxt
    Similar to https://nordhealth.design/web-components/#configuration
    ``` ts
    // nuxt.config.ts

    vue: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: tag => tag.startsWith('nord-'),
      },
    },
    ```

* Couldn't find the documentation to switch between light/dark themes