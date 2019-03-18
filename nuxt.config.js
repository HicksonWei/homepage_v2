// import path from 'path'
// import fs from 'fs'

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
// 要裝 uglifyjs-webpack-plugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const pkg = require('./package')

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/homepage_v2/'
        }
      }
    : {}
// 部署靜態網頁至 Github Page 時，由於首頁路徑不是 / 而是專案名所以會出錯，但如果直接改 router base 在本地端就會出錯，所以要用 conditional 寫法，再灑到 module.exports 裡面

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Hank_homepage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hank 的個人簡介' },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '危建翰, Hank, Front-End Developer'
      },
      { property: 'og:title', content: `Hank's homepage` },
      { property: 'og:description', content: 'Hank 的個人簡介' },
      { property: 'og:image', content: '~/assets/img/homepage.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Acme|Audiowide|Fredericka+the+Great|Fugaz+One|Aldrich|Noto+Sans+TC:400,500,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/stylus/vuetify/app.styl',
    '~/assets/stylus/custom/reset.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify', '@/plugins/components', '@/plugins/directive'],

  /*
  ** Nuxt.js modules
  */
  // 用來將 custom variables 引入組件
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    stylus: ['~assets/stylus/custom/custom.styl']
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/stylus/vuetify/variables.styl']
      }
    },
    postcss: {
      preset: {
        autoprefixer: {
          browsers: ['IE 11', 'last 3 versions', '> 1%'],
          // 支援 IE 11 display: grid
          grid: true
        }
      }
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              // build 時去掉 console
              drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        })
      ]
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      // 這裡的 ESLint 是針對程式端，npm run dev 時，語法不合規定就會直接黑屏報錯
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  ...routerBase,
  // 設定 https 憑證
  server: {
    // port: 8000,
    // host: '0.0.0.0',
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'example.com+5-key.pem')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'example.com+5.pem'))
    // }
  }
}
