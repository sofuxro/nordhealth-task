// @ts-check
import plugin from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.vue'],
  rules: {
    ...plugin.configs['flat/recommended'].map(c => c.rules).reduce((acc, c) => ({ ...acc, ...c }), {}),
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [2, { singleline: 3 }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'import/order': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-len': ['error', { code: 110 }],
    'quotes': ['error', 'single', { 'avoidEscape': true }],

    /**
     * Disable rules that conflict with web components
     *
     * @example
     *    <my-element>
     *       <div slot="named">hello</div>
     *    </my-element>
     */
    'vue/no-deprecated-slot-attribute': 'off',
  },
})
