<template>
  <div v-resize="onResize" class="carousel__container" :class="{ 'carousel__container--show': show }">
    <div class="carousel__scene">
      <div ref="carousel" class="carousel__body">
        <a
          v-for="(item, index) in works"
          :key="index"
          :class="setClass(index)"
          target="_blank"
          :href="item.link"
        >
          <div class="carousel__img" :style="{ backgroundImage: 'url(' + require(`~/assets/img/works/${item.img}`) + ')' }" />
          <div class="carousel__text">
            <p class="carousel__title">{{ item.title }}</p>
            <p class="carousel__content">{{ item.content }}</p>
          </div>
        </a>
      </div>
    </div>
    <div class="carousel__options">
      <v-btn
        class="previous"
        color="green darken-3"
        dark
        :large="$vuetify.breakpoint.lgAndUp"
        fab
        @click="previousPage" 
      >
        <!-- 這裡的斷點控制有點奇怪 -->
        <v-icon x-large>
          {{ isHorizontal ? 'arrow_left' : 'arrow_drop_down' }}
        </v-icon>
      </v-btn>
      <v-btn
        class="change"
        color="green lighten-1"
        dark
        :large="$vuetify.breakpoint.lgAndUp"
        fab
        @click="clickOrientationChange" 
      >
        <v-icon x-large>
          {{ isHorizontal ? 'swap_horiz' : 'swap_vert' }}
        </v-icon>
      </v-btn>
      <v-btn
        class="next"
        color="green darken-3"
        dark
        :large="$vuetify.breakpoint.lgAndUp"
        fab
        @click="nextPage"
      >
        <v-icon x-large>
          {{ isHorizontal ? 'arrow_right' : 'arrow_drop_up' }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { worksList } from '~/static/worksData.js'
export default {
  props: {
    show: {
      type: Boolean
    }
  },
  data() {
    return {
      works: worksList.data,
      selectedIndex: 0,
      cellCount: 0,
      isHorizontal: true,
      theta: null,
      radius: null,
      winWidth: 0
    }
  },
  computed: {
    rotateFn() {
      return this.isHorizontal ? 'rotateY' : 'rotateX'
    }
  },
  mounted() {
    this.onResize()
    this.initialOrientationChange()
  },
  methods: {
    setClass(index) {
      if (this.selectedIndex >= 0) {
        if (this.selectedIndex % 6 === index) {
          return 'carousel__cell selected'
        } else {
          return 'carousel__cell'
        }
      } else if (
        (this.selectedIndex % 6) + 6 === index ||
        (this.selectedIndex % 6) + 6 === index + 6
      ) {
        return 'carousel__cell selected'
      } else {
        return 'carousel__cell'
      }
    },
    onResize() {
      if (process.browser) {
        if (window.innerWidth !== this.winWidth) {
          this.isHorizontal = true
          this.winWidth = window.innerWidth
          this.changeCarousel()
        }
      }
    },
    rotateCarousel() {
      const angle = this.theta * this.selectedIndex * -1
      this.$refs.carousel.style.transform = `translateZ(-${this.radius}px) ${
        this.rotateFn
      }(${angle}deg)`
    },
    previousPage() {
      this.selectedIndex--
      this.rotateCarousel()
    },
    nextPage() {
      this.selectedIndex++
      this.rotateCarousel()
    },
    changeCarousel() {
      const cellWidth = this.$refs.carousel.offsetWidth
      const cellHeight = this.$refs.carousel.offsetHeight
      const cells = this.$refs.carousel.querySelectorAll('.carousel__cell')
      this.cellCount = this.works.length
      this.theta = 360 / this.cellCount
      const cellSize = this.isHorizontal ? cellWidth : cellHeight
      this.radius = Math.round(
        cellSize / 2 / Math.tan(Math.PI / this.cellCount)
      )
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i]
        const cellAngle = this.theta * i
        cell.style.transform = `${this.rotateFn}(${cellAngle}deg) translateZ(${
          this.radius
        }px)`
      }
      this.rotateCarousel()
    },
    initialOrientationChange() {
      this.changeCarousel()
    },
    clickOrientationChange() {
      this.isHorizontal = !this.isHorizontal
      this.changeCarousel()
    }
  }
}
</script>

<style lang="stylus" scoped>

.carousel
  &__container
    font-family $font-default
    opacity 0
    transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)
    &--show
      opacity 1
      transform: translate3d(0, -10px, 0)
  &__scene 
    border 1px solid #CCC
    position relative
    background-color rgba(0, 0, 0, 0.7)
    width 720px
    height 520px
    margin 40px auto 0 auto
    perspective 1000px
    +bp($be1200)
      width 620px
      height 420px
    +bp($be768)
      width 520px
      height 320px
    +bp($be576)
      width 100%
  &__body
    width 100%
    height 100%
    position absolute
    transform translateZ(-500px)
    transform-style preserve-3d
    transition transform 1s
  &__cell
    display flex
    flex-direction column
    position absolute
    width 700px
    height 500px
    left 10px
    top 10px
    font-size 24px
    text-align center
    transition transform 1s, opacity 1s
    background-color #C8E6C9
    opacity 0.4
    pointer-events none
    &.selected
      opacity 1
      pointer-events auto
    +bp($be1200)
      width 600px
      height 400px
    +bp($be768)
      width 500px
      height 300px
    +bp($be576)
      width calc(100% - 20px)
  &__img
    flex 3
    width 100%
    background-size cover
    background-position center top
    +bp($be768)
      flex 7
  &__text
    display flex
    flex-direction column
    justify-content center
    flex 1
    padding 2px
    +bp($be768)
      flex 3
  &__title
    color #000
    font-size 28px
    font-weight bold
    +bp($be576)
      font-size 22px
  &__content
    color #424242
    +bp($be576)
      font-size 18px
  &__options
    display flex
    justify-content space-around
    align-items center
    width 720px
    height 100px
    margin 0 auto 50px auto
    position relative
    z-index 2
    background transparent
    +bp($be1200)
      width 620px
    +bp($be768)
      width 420px
    +bp($be576)
      width 100%

</style>
