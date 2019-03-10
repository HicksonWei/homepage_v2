<template>
  <v-content>
    <div class="hero__block">
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
          </div>
        </v-layout>
      </v-container>
    </div>
    
    <v-container id="profile" ref="profile" fluid class="profile">
      <v-layout column class="profile__layout">
        <h2 class="cyan--text text--lighten-4">
          Profile
        </h2>
        <div class="profile__content">
          <div class="profile__frame">
            <div class="profile__picture" />
            <p class="profile__name">
              <span>危建翰</span>
              <span>Hank</span>
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
              進入接案公司之後，接觸到許多與銀行相關的專案，對於區塊鏈、加密貨幣也略有涉獵。除此之外，也和各個領域的人才有了更多的交流，不論是與業主或 PM 溝通需求、與設計師協調網頁規劃，或是與後端工程師合作串接 API，都很大程度地拓展了我的視野。未來期勉自己繼續虛心學習，努力精進，為自己、公司乃至於社會，解決更多的難題。
            </p>
          </div>
        </div>
      </v-layout>
    </v-container>
    <v-container id="experience" fluid class="experience">
      123
    </v-container>
    <v-container id="skills" fluid class="skills">
      123
    </v-container>
    <v-container id="works" fluid class="works">
      123
    </v-container>
    <v-container id="life" fluid class="life">
      123
    </v-container>
  </v-content>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      heroShow: false,
      headerChange: false
    }
  },
  mounted() {
    this.heroShow = true
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
    ...mapActions(['setHeaderColor']),
    handleScroll(e) {
      const profilePos =
        this.$refs.profile.getBoundingClientRect().top + window.scrollY

      if (window.scrollY >= profilePos && this.headerChange === false) {
        this.setHeaderColor('red')
        this.headerChange = true
      }
      if (window.scrollY < profilePos && this.headerChange === true) {
        this.setHeaderColor('transparent')
        this.headerChange = false
      }
      // if (window.scrollY > 50) {
      //   this.$refs.hero.setAttribute(
      //     'style',
      //     'opacity: 1; transform: translate3d(0, -10px, 0)'
      //   )
      // }
      // return window.scrollY > 100
      if (window.scrollY > 0) {
        const rect = this.$refs.profile.getBoundingClientRect()
        console.log(rect)
        // console.log(this.$refs.hero.scrollTop)
        // console.log(this.$refs.abc.offsetTop)
        // console.log(this.$refs.hero.clientHeight)
        this.$refs.hero.setAttribute(
          'style',
          `background-position-x: -${window.scrollY / 5}px`
        )
      }
      // return window.scrollY > 100
    }
  }
}
</script>

<style lang="stylus" scoped>

.hero
  &__block
    width 100%
    height 100vh
    position relative
    overflow hidden
  &__background
    width 3000px
    height 100%
    background-image url('~assets/img/bg8.jpg')
    background-size cover
    background-position center
    filter blur(4px)
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
      // font-family 'Sniglet', cursive
      // font-family: 'Acme', sans-serif;
      font-family: 'Luckiest Guy', cursive;
      font-size 80px
      letter-spacing 20px
      +bp($be1200)
        font-size 60px
        letter-spacing 10px
      br 
        display none 
        +bp($be992)
          display block
    .sub
      font-family: 'Acme', sans-serif
      font-size 30px
      margin-top 20px
    &--show
      opacity 1
      transform: translate3d(0, -10px, 0)

    

.profile
  width 100%
  min-height 100vh
  height auto
  font-family $font-default
  color #fff
  background-image url('~assets/img/prism.png')
  /* Background pattern from Toptal Subtle Patterns */
  background-repeat repeat
  background-attachment fixed
  &__layout
    height 100%
    margin-bottom 50px
  h2 
    text-align center
    margin 90px 0 40px 0
    font-size 80px
    font-family 'Acme', sans-serif
    letter-spacing 5px
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
    font-size 28px
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
      

.box
  transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
  opacity 0
</style>
