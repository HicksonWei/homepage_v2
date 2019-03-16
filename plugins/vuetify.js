import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.accent1,
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    qq: colors.green.accent3
  },
  breakpoint: {
    thresholds: {
      xs: 320,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    },
    scrollbarWidth: 0
    // scrollbarWidth 會計入寬度，如果是 10 的話，例如原本預期 992 以下觸發的，會變成 982 以下才觸發
  }
})
