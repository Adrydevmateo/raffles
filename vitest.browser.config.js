import { defineConfig } from 'vitest/config'
import { webdriverio } from '@vitest/browser-webdriverio'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  test: {
    browser: {
      enabled: true,
      provider: webdriverio(),
      // https://vitest.dev/config/browser/webdriverio
      instances: [
        { browser: 'chrome' },
        { browser: 'firefox' },
        { browser: 'edge' },
        { browser: 'safari' },
      ],
    },
  },
})
