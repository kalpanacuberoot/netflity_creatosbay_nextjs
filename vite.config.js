import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { createHtmlPlugin } from 'vite-plugin-html'

export default {
  plugins: [
    ViteImageOptimizer({}),
    createHtmlPlugin({
      minify: true,
    })
  ],
}
