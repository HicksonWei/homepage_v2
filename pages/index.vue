<template>
  <v-content class="base">
    <div class="top" :class="{ 'show':topBtnShow }">
      <v-btn
        v-scroll-to="'#hero'"
        color="blue lighten-2"
        dark
        fab
        small
      >
        <v-icon>
          navigation
        </v-icon>
      </v-btn>
    </div>
    <div id="hero" class="hero__block">
      <div ref="hero" class="hero__background" />
      <v-container fluid class="hero__container">
        <v-layout column justify-center align-center class="hero__layout">
          <div class="hero__text" :class="{ 'hero__text--show': heroShow }">
            <h1 class="main">
              Hi, I'm <br><span class="blue--text text--darken-4">H</span><span class="blue--text text--darken-3">a</span><span class="blue--text text--darken-2">n</span><span class="blue--text text--darken-1">k</span> <span class="blue--text text--darken-2">W</span><span class="blue--text text--darken-3">e</span><span class="blue--text text--darken-4">i</span>
            </h1>
            <p class="sub">
              Front-End Developer
            </p>
            <div class="media">
              <v-btn
                color="green lighten-2"
                dark
                fab
                href="https://github.com/HicksonWei/About_me"
                target="_blank"
              >
                <v-icon>
                  fab fa-github
                </v-icon>
              </v-btn>
              <v-btn
                color="green lighten-2"
                dark
                fab
                href="https://www.facebook.com/profile.php?id=100001463909234"
                target="_blank"
              >
                <v-icon>
                  fab fa-facebook
                </v-icon>
              </v-btn>
              <v-btn
                color="green lighten-2"
                dark
                fab
                href="https://www.instagram.com/hank199021/?hl=zh-tw"
                target="_blank"
              >
                <v-icon>
                  fab fa-instagram
                </v-icon>
              </v-btn>
            </div>
          </div>
        </v-layout>
      </v-container>
    </div>
    
    <v-container id="profile" ref="profile" fluid class="profile">
      <v-layout column class="profile__layout" :class="{ 'profile__layout--show': profileShow }">
        <h2>
          Profile
        </h2>
        <div class="profile__content">
          <div class="profile__frame">
            <div class="profile__picture" />
            <p class="profile__name">
              <span>危建翰</span>
              <span><span class="light-blue--text text--accent-1">H</span><span class="light-blue--text text--accent-2">a</span><span class="light-blue--text text--accent-3">n</span><span class="light-blue--text text--accent-4">k</span></span>
            </p>
          </div>
          <div class="profile__intro">
            <p>
              我是危建翰，海洋大學食品科學系碩畢。論文主題與生質能源和酵素表現有關，攻讀碩士期間聚焦於醣類發酵及基因轉殖等相關實驗。由於這些實驗和微生物領域密不可分，故對於微生物培養及檢測技術也算頗有心得，並曾擔任微生物實驗課助教。
            </p>
            <br>
            <p>
              正式投入職場後，曾在小公司當個產品研發人員，也在大公司做過化學分析師，雖然工作表現尚屬穩健、與同事相處融洽，但同時也對於一成不變的工作內容感到苦惱。維持現狀固然舒適而不費力，但我仍想有所突破，不想畫地自限。躑躅間偶然接觸到程式設計，在初步投入後覺得十分感興趣。寫程式給了我一個不斷學習的契機，在 coding 的過程中會遭遇許多困難，所以必須攝取更多的新知來解決問題，在跨越障礙的過程當中，我確實感覺到自己的進步與成長。遂決定辭去職務，透過自學及線上課程，從前端相關技術著手，並順利取得前端工程師的職位。
            </p>
            <br>
            <p>
              進入接案公司之後，接觸到許多與銀行相關的專案，對於區塊鏈、加密貨幣也略有涉獵。除此之外，也和各個領域的人才有了更多的交流，不論是與客戶或 PM 溝通需求、與設計師協調網頁規劃，或是與後端工程師合作串接 API，都很大程度地拓展了我的視野。未來期勉自己繼續虛心學習，努力精進，為自己、公司乃至於社會，解決更多的難題。
            </p>
          </div>
        </div>
      </v-layout>
    </v-container>
    <v-container id="experience" ref="experience" fluid class="experience">
      <h2 class="red--text text--lighten-1" :class="{ 'show': experienceShow }">
        Experience
      </h2>
      <v-timeline align-top :dense="$vuetify.breakpoint.mdAndDown" class="experience__timeline" :class="{ 'experience__timeline--show': experienceShow }">
        <v-timeline-item color="blue lighten-2" icon="fas fa-user-graduate" fill-dot large>
          <v-card color="blue lighten-2 experience__card" dark>
            <v-card-title class="experience__company">
              國立台灣海洋大學食品科學系
            </v-card-title>
            <v-card-text class="white text--primary">
              <p class="experience__title">
                碩士
              </p>
              <p class="experience__year">
                2012 - 2014
              </p>
              <p class="experience__content">
                除具備食品科學基礎知識外，論文主題圍繞分子生物學與生質能源等範疇，故亦對基因轉殖、蛋白質表現與藻類發酵等相關實驗有所涉獵。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="pink lighten-2 experience__card" icon="fas fa-spray-can" fill-dot large>
          <v-card color="pink lighten-2" dark>
            <v-card-title class="experience__company">
              泰鈞生物科技股份有限公司
            </v-card-title>
            <v-card-text class="white text--primary">
              <p class="experience__title">
                研發人員
              </p>
              <p class="experience__year">
                2014 - 2015
              </p>
              <p class="experience__content">
                職責內容為化妝品研發、生產及品管等各個面向，對於化妝品原料特性、製作及檢驗方式有一定程度的理解。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="cyan lighten-2 experience__card" icon="fas fa-flask" fill-dot large>
          <v-card color="cyan lighten-2" dark>
            <v-card-title class="experience__company">
              SGS 台灣檢驗科技股份有限公司
            </v-card-title>
            <v-card-text class="white text--primary">
              <p class="experience__title">
                化學分析師
              </p>
              <p class="experience__year">
                2016 - 2017
              </p>
              <p class="experience__content">
                主司食品微生物檢驗，擅長各種食品中病原菌的培養與分析技術。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="purple lighten-2 experience__card" icon="fas fa-code" fill-dot large>
          <v-card color="purple lighten-2" dark>
            <v-card-title class="experience__company">
              巧禾數位設計股份有限公司
            </v-card-title>
            <v-card-text class="white text--primary">
              <p class="experience__title">
                前端工程師
              </p>
              <p class="experience__year">
                2018 ~
              </p>
              <p class="experience__content">
                具備銀行、加密貨幣等網頁開發經驗，能與客戶或 PM 溝通需求，並和設計師及後端工程師協調作業。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>

    <v-container id="skills" ref="skills" fluid class="skills">
      <div class="twinkle" />
      <h2 :class="{ 'show': skillsShow }">
        Skills
      </h2>
      <v-layout wrap class="skills__layout" :class="{ 'skills__layout--show': skillsShow }">
        <v-flex class="skills__flex__block">
          <v-flex class="skills__flex">
            <v-hover :disabled="$vuetify.breakpoint.lgAndDown">
              <v-card
                slot-scope="{ hover }"
                class="ma-3 skills__card"
                color="grey lighten-4"
              >
                <div class="skills__thumbnail">
                  <div class="programming html5" />
                  <div class="programming css3" />
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out orange darken-3 v-card--reveal white--text"
                      style="height: 100%;"
                    >
                      <p>具備 HTML5、CSS3 基礎知識，並能使用 SCSS、Stylus 等 CSS preprocessor 進行開發。</p>
                    </div>
                  </v-expand-transition>
                </div>
                <v-card-text
                  class="pt-4 skills__text"
                  style="position: relative;"
                >
                  <h3 class="font-weight-light orange--text text--darken-4 text-xs-center mb-3">
                    HTML5 / CSS3
                  </h3>
                  <p v-show="$vuetify.breakpoint.lgAndDown" class="grey--text text--darken-3">
                    具備 HTML5、CSS3 基礎知識，並能使用 SCSS、Stylus 等 CSS preprocessor 進行開發。
                  </p>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex class="skills__flex">
            <v-hover :disabled="$vuetify.breakpoint.lgAndDown">
              <v-card
                slot-scope="{ hover }"
                class="ma-3 skills__card"
                color="grey lighten-4"
              >
                <div class="skills__thumbnail">
                  <div class="programming js" />
                  <div class="programming jquery" />
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out yellow darken-3 v-card--reveal white--text"
                      style="height: 100%;"
                    >
                      <p>能使用 JavaScript 或 jQuery 設計網頁動畫效果、串接 API 等。</p> 
                    </div>
                  </v-expand-transition>
                </div>
                <v-card-text
                  class="pt-4 skills__text"
                  style="position: relative;"
                >
                  <h3 class="font-weight-light yellow--text text--darken-4 text-xs-center mb-3">
                    JavaScript / jQuery
                  </h3>
                  <p v-show="$vuetify.breakpoint.lgAndDown" class="grey--text text--darken-3">
                    能使用 JavaScript 或 jQuery 設計網頁動畫效果、串接 API 等。
                  </p>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-flex>
        <v-flex class="skills__flex__block">
          <v-flex class="skills__flex">
            <v-hover :disabled="$vuetify.breakpoint.lgAndDown">
              <v-card
                slot-scope="{ hover }"
                class="ma-3 skills__card"
                color="grey lighten-4"
              >
                <div class="skills__thumbnail">
                  <div class="programming vue" />
                  <div class="programming nuxt" />
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal white--text"
                      style="height: 100%;"
                    >
                      <p>能使用 Vue、Nuxt (Vue SSR Framework) 框架開發網站，具備銀行業、加密貨幣等網站開發經驗。</p> 
                    </div>
                  </v-expand-transition>
                </div>
                <v-card-text
                  class="pt-4 skills__text"
                  style="position: relative;"
                >
                  <h3 class="font-weight-light green--text text--darken-4 text-xs-center mb-3">
                    Vue / Nuxt
                  </h3>
                  <p v-show="$vuetify.breakpoint.lgAndDown" class="grey--text text--darken-3">
                    能使用 Vue、Nuxt (Vue SSR Framework) 框架開發網站，具備銀行業、加密貨幣等網站開發經驗。
                  </p>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex class="skills__flex">
            <v-hover :disabled="$vuetify.breakpoint.lgAndDown">
              <v-card
                slot-scope="{ hover }"
                class="ma-3 skills__card"
                color="grey lighten-4"
              >
                <div class="skills__thumbnail">
                  <div class="programming bootstrap" />
                  <div class="programming vuetify" />
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out purple darken-2 v-card--reveal white--text"
                      style="height: 100%;"
                    >
                      <p>能善用 Bootstrap 4、Vuetify 等 library 的 grid system 及 UI components 來加速網站開發。</p>
                    </div>
                  </v-expand-transition>
                </div>
                <v-card-text
                  class="pt-4 skills__text"
                  style="position: relative;"
                >
                  <h3 class="font-weight-light purple--text text--darken-4 text-xs-center mb-3">
                    Bootstrap / Vuetify
                  </h3>
                  <p v-show="$vuetify.breakpoint.lgAndDown" class="grey--text text--darken-3">
                    能善用 Bootstrap 4、Vuetify 等 library 的 grid system 及 UI components 來加速網站開發。
                  </p>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container id="works" ref="works" fluid class="works">
      <div class="works__bgbox">
        <span />
        <span />
        <span />
        <span />
      </div>
      <h2 :class="{ 'show': worksShow }">
        Works
      </h2>
      <Carousel :show="worksShow" />
    </v-container>
  </v-content>
</template>

<script>
import Carousel from '~/components/Carousel'
import { mapActions } from 'vuex'

export default {
  components: {
    Carousel
  },
  data() {
    return {
      topBtnShow: false,
      heroShow: false,
      profileShow: false,
      experienceShow: false,
      skillsShow: false,
      worksShow: false
    }
  },
  mounted() {
    this.heroShow = true
    this.setHeaderTheme('top')
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    ...mapActions(['setHeaderTheme']),
    handleScroll(e) {
      const screenHeight = window.innerHeight
      const profilePos =
        this.$refs.profile.getBoundingClientRect().top + window.scrollY
      const experiencePos =
        this.$refs.experience.getBoundingClientRect().top + window.scrollY
      const skillsPos =
        this.$refs.skills.getBoundingClientRect().top + window.scrollY
      const worksPos =
        this.$refs.works.getBoundingClientRect().top + window.scrollY
      if (window.scrollY <= (screenHeight * 2) / 3) {
        this.topBtnShow = false
      }
      if (window.scrollY > (screenHeight * 2) / 3) {
        this.topBtnShow = true
      }
      if (window.scrollY === 0) {
        this.setHeaderTheme('top')
      }
      if (window.scrollY < profilePos && window.scrollY !== 0) {
        this.setHeaderTheme('hero')
      }
      if (window.scrollY + (screenHeight * 2) / 3 >= profilePos) {
        this.profileShow = true
      }
      if (window.scrollY + 50 >= profilePos) {
        this.setHeaderTheme('profile')
      }
      if (window.scrollY + (screenHeight * 2) / 3 >= experiencePos) {
        this.experienceShow = true
      }
      if (window.scrollY + 50 >= experiencePos) {
        this.setHeaderTheme('experience')
      }
      if (window.scrollY + (screenHeight * 2) / 3 >= skillsPos) {
        this.skillsShow = true
      }
      if (window.scrollY + 50 >= skillsPos) {
        this.setHeaderTheme('skills')
      }
      if (window.scrollY + (screenHeight * 2) / 3 >= worksPos) {
        this.worksShow = true
      }
      if (window.scrollY + 50 >= worksPos) {
        this.setHeaderTheme('works')
      }
      if (window.scrollY > 0) {
        // const rect = this.$refs.profile.getBoundingClientRect()
        // console.log(rect)
        this.$refs.hero.setAttribute(
          'style',
          `background-position-x: -${window.scrollY / 5}px`
        )
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.top
  position fixed
  right 50px
  bottom 50px
  z-index 10
  opacity 0
  transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
  pointer-events none
  +bp($be768)
    right 30px
    bottom 30px
  +bp($be576)
    right 20px
    bottom 20px
  &.show
    opacity 1
    transform: translate3d(0, -10px, 0)
    pointer-events auto

.hero
  &__block
    width 100%
    height 100vh
    position relative
    overflow hidden
  &__background
    width 3000px
    height 100%
    background url('~assets/img/bg/congruent_pentagon.jpg') repeat
    /* Background pattern from Toptal Subtle Patterns */
    background-position center
  &__container
    position absolute
    top 0
    bottom 0
  &__layout
    height 100%
  &__text
    display flex
    flex-direction column
    align-items center
    justify-content center
    // background-color #fff
    height 300px
    width 80%
    opacity 0
    transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
    h1
      font-family 'Fugaz One', cursive;
      font-weight bold
      font-size 80px
      letter-spacing 10px
      +bp($be1200)
        font-size 60px
        letter-spacing 10px
      +bp($be576)
        font-size 44px
        letter-spacing 2px
      br 
        display none 
        +bp($be992)
          display block
    .sub
      font-family 'Acme', sans-serif
      font-size 36px
      margin 10px 0 30px 0
      +bp($be1200)
        font-size 30px
      +bp($be576)
        font-size 20px
    .media
      display flex
      width 250px
      justify-content space-between
    &--show
      opacity 1
      transform: translate3d(0, -10px, 0)

.profile
  width 100%
  min-height calc(100vh + 64px)
  height auto
  font-family $font-default
  color #fff
  background-image url('~assets/img/bg/what-the-hex-dark.jpg')
  /* Background pattern from Toptal Subtle Patterns */
  background-repeat repeat
  background-attachment fixed
  &__layout
    height 100%
    margin-bottom 50px
    opacity 0
    transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
    &--show
      opacity 1
      transform: translate3d(0, -10px, 0)
  h2 
    text-align center
    margin 90px 0 40px 0
    font-size 80px
    font-family 'Audiowide', cursive
    letter-spacing 5px
    color #23b6ff
    +bp($be576)
      font-size 50px
  &__content
    display flex
    width 100%
    height 100%
    +bp($be1200)
      flex-direction column
  &__frame
    display flex
    flex-direction column
    justify-content center
    align-items center
    flex 3
    height 100%
  &__picture
    width 300px
    height 400px
    background-image url('~assets/img/photo.jpg')
    background-size cover
    background-position center
    border-radius 20px
    margin-bottom 20px
    +bp($be1200)
      margin-bottom 40px
    +bp($be576)
      width 250px
      height 350px
  &__name
    font-family 'Audiowide', 'Microsoft JhengHei', cursive 
    width 250px
    text-align center
    font-size 40px
    display flex
    flex-direction column
    +bp($be1200)
      margin-bottom 40px
  &__intro
    flex 5
    height 100%
    padding-right 100px
    font-size 24px
    text-align justify
    +bp($be1400)
      padding-right 50px
    +bp($be1200)
      font-size 24px
      padding-left 50px
      line-height 1.8
    +bp($be576)
      font-size 20px
      padding-right 10px
      padding-left 10px
      
.experience
  width 100%
  min-height calc(100vh + 64px)
  height auto
  font-family 'Noto Sans TC', sans-serif
  color #fff
  background-image url('~assets/img/bg/wood_pattern.jpg')
  /* Background pattern from Toptal Subtle Patterns */
  background-repeat repeat
  padding-bottom 74px
  overflow hidden
  h2 
    text-align center
    margin 90px 0 40px 0
    font-size 80px
    font-family 'Fredericka the Great', cursive;
    letter-spacing 5px
    opacity 0
    transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
    &.show
      opacity 1
      transform: translate3d(0, -10px, 0)
    +bp($be576)
      font-size 50px
  &__timeline
    opacity 0
    transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
    &--show
      opacity 1
      transform: translate3d(0, -10px, 0)
  &__company
    font-weight bold
    letter-spacing 2px
    font-size 18px
  &__title
    font-weight bold
    letter-spacing 2px
    font-size 16px
  &__year
    margin-bottom 10px
    color gray
    font-size 14px

@keyframes move-twink-back
  from 
    background-position 0 0
  to 
    background-position -1000px 500px

.skills
  width 100%
  min-height calc(100vh + 64px)
  height auto
  position relative
  background url('~assets/img/bg/darkness.png') repeat
  /* Background pattern from Toptal Subtle Patterns */
  background-size cover
  background-position center
  padding-bottom 74px
  overflow hidden
  font-family $font-default
  .twinkle
    background transparent url('~assets/img/twinkling.png') repeat
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    animation move-twink-back 25s linear infinite
  h2
    text-align center
    margin 90px 0 40px 0
    font-size 80px
    font-family 'Aldrich', sans-serif
    letter-spacing 5px
    color #fff
    position relative
    opacity 0
    transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
    &.show
      opacity 1
      transform: translate3d(0, -10px, 0)
    +bp($be576)
      font-size 50px
  &__layout
    flex-wrap wrap
    opacity 0
    transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
    &--show
      opacity 1
      transform: translate3d(0, -10px, 0)
  &__flex__block
    display flex
    +bp($be768)
      flex-direction column
  &__flex
    display flex
    justify-content center
  &__card
    min-width 350px
    +bp($be992)
      min-width 300px
      max-width 350px
  &__thumbnail
    height 300px
    position relative
    +bp($be992)
      background-color #ffcdd2
    .v-card--reveal
      opacity 0.9
      position absolute
      bottom 0
      width 100%
      z-index 3
      p
        margin 10px
        font-size 24px
        text-shadow 2px 2px 2px #000
    .programming
      background-size contain
      position absolute
      z-index 1
    .html5
      width 180px
      height 180px
      background-image url('~assets/img/programming/html5.svg')
      top 35%
      left 12%
      z-index 2
      +bp($be576)
        width 160px
        height 160px
    .css3
      width 180px
      height 180px
      background-image url('~assets/img/programming/css3.svg')
      top 15% 
      left 45%
      opacity 0.6
      +bp($be576)
        width 160px
        height 160px
    .js
      width 160px
      height 160px
      background-image url('~assets/img/programming/js.svg')
      top 40%
      left 15%
      z-index 2
      +bp($be576)
        width 140px
        height 140px
    .jquery
      width 220px
      height 250px
      background-image url('~assets/img/programming/jquery.svg')
      top 25% 
      left 30%
      opacity 0.5
      +bp($be576)
        width 200px
        height 220px
    .vue
      width 180px
      height 180px
      background-image url('~assets/img/programming/vue.svg')
      top 45%
      left 15%
      z-index 2
      +bp($be576)
        width 160px
        height 160px
    .nuxt
      width 180px
      height 180px
      background-image url('~assets/img/programming/nuxt.svg')
      top 15% 
      left 35%
      opacity 0.6
      +bp($be576)
        width 160px
        height 160px
    .bootstrap
      width 160px
      height 160px
      background-image url('~assets/img/programming/bootstrap.svg')
      top 40%
      left 18%
      z-index 2
      +bp($be576)
        width 140px
        height 140px
    .vuetify
      width 180px
      height 180px
      background-image url('~assets/img/programming/vuetify.svg')
      top 15% 
      left 45%
      opacity 0.7
      +bp($be576)
        width 160px
        height 160px
  &__text
    font-size 20px
    +bp($be992)
      height auto
    h3
      font-family 'Aldrich', sans-serif
      font-size 34px
      line-height 40px
      +bp($be992)
        font-size 28px
      +bp($be576)
        font-size 26px

@keyframes imageAnimation 
  0
    opacity 0
    animation-timing-function(ease-in)
  12.5% 
    opacity 0.8
    animation-timing-function(ease-out)
  25%
    opacity 0.6
  37.5%
    opacity: 0
  100% 
    opacity: 0
  

.works
  width 100%
  min-height calc(100vh + 64px)
  height auto 
  position relative
  overflow hidden
  &__bgbox
    span 
      position absolute 
      top 0
      bottom 0
      left 0
      right 0
      background-size cover
      background-position center
      opacity 0
      z-index 0
      backface-visibility hidden
      animation imageAnimation 6s * 4 linear infinite
      &:nth-child(1)
        background-image url('~assets/img/bg/carousel1.jpg')
      &:nth-child(2)
        background-image url('~assets/img/bg/carousel2.jpg')
        animation-delay 6s
      &:nth-child(3)
        background-image url('~assets/img/bg/carousel3.jpg')
        animation-delay 6s * 2
      &:nth-child(4)
        background-image url('~assets/img/bg/carousel4.jpg')
        animation-delay 6s * 3
  h2
    text-align center
    margin 90px 0
    font-size 80px
    font-family 'Acme', sans-serif
    letter-spacing 5px
    color rgb(141, 110, 99)
    position relative
    z-index 1
    text-shadow 2px 2px 2px rgba(0, 0, 0, 0.7)
    opacity 0
    transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
    &.show
      opacity 1
      transform: translate3d(0, -10px, 0)
    +bp($be768)
      margin 90px 0 70px 0
    +bp($be576)
      font-size 60px
</style>
