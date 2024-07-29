import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import unocss from "unocss/vite";
import { presetIcons, presetAttributify, presetUno } from "unocss";
import { VitePWA } from "vite-plugin-pwa";
import viteSSR from "vite-ssr/plugin.js";

import path from "path";
// https://vitejs.dev/config/
const api = require("./server/api");

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(
      { reactivityTransform: true } //响应式语法糖
    ),
    viteSSR(),
    {
      // Mock API during development
      configureServer({ middlewares }) {
        api.forEach(({ route, handler }) => middlewares.use(route, handler));
      },
    },
    // VitePWA({
    //   workbox: {
    //     cacheId: "XIaoman", //缓存名称
    //     runtimeCaching: [
    //       {
    //         urlPattern: /.*\.js.*/, //缓存文件
    //         handler: "StaleWhileRevalidate", //重新验证时失效
    //         options: {
    //           cacheName: "XiaoMan-js", //缓存js，名称
    //           expiration: {
    //             maxEntries: 30, //缓存文件数量 LRU算法
    //             maxAgeSeconds: 30 * 24 * 60 * 60, //缓存有效期
    //           },
    //         },
    //       },
    //     ],
    //   },
    // }),
    vueJsx(),
    AutoImport({
      dts: "src/auto-import.d.ts",
      imports: ["vue", "vue-router"], //自动引入vue的ref、toRefs、onmounted等，无需在页面中再次引入
    }),
    unocss({
      presets: [presetIcons(), presetAttributify(), presetUno()], //图标预设，类名美化，集成tailwindcss可以直接使用
      rules: [
        ["flex", { display: "flex" }],
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })], //m-1 : margin:10px
      ],
      shortcuts: {
        btn: "m-1 flex",
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true, //css 拆分
    sourcemap: false, //不生成sourcemap
    minify: false, //是否禁用最小化混淆，esbuild打包速度最快，terser打包体积最小。
    assetsInlineLimit: 5000, //小于该值 图片将打包成Base64
  },
});

//如果要在vite.config.ts中使用环境变量
// import {loadEnv} from 'vite'
// export default ({mode}:any) => {

//   console.log(loadEnv(mode,process.cwd()))

//   return defineConfig({
//     plugins: [vue(), vueJsx()],
//     resolve: {
//       alias: {
//         '@': fileURLToPath(new URL('./src', import.meta.url))
//       }
//     }
//   })
