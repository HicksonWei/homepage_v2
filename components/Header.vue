<template>
  <header class="header" :class="theme">
    <v-toolbar fixed class="header__toolbar">
      <v-toolbar-title class="header__title" v-text="title" />
      <v-spacer />
      <v-toolbar-items class="header__items">
        <v-btn v-scroll-to="'#profile'" flat class="header__btn">
          Profile
        </v-btn>
        <v-btn v-scroll-to="'#experience'" flat class="header__btn">
          Experience
        </v-btn>
        <v-btn v-scroll-to="'#skills'" flat class="header__btn">
          Skills
        </v-btn>
        <v-btn v-scroll-to="'#works'" flat class="header__btn">
          Works
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="header__burger" @click="drawer = !drawer" />
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" right temporary fixed>
      <v-list>
        <v-list-tile v-scroll-to="'#profile'" @click="drawer = !drawer">
          <v-list-tile-action>
            <v-icon light>
              account_circle
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Profile</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-scroll-to="'#experience'" @click="drawer = !drawer">
          <v-list-tile-action>
            <v-icon light>
              computer
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Experience</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-scroll-to="'#skills'" @click="drawer = !drawer">
          <v-list-tile-action>
            <v-icon light>
              build
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Skills</v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-scroll-to="'#works'" @click="drawer = !drawer">
          <v-list-tile-action>
            <v-icon light>
              folder
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Works</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      title: 'Hank'
    }
  },
  computed: {
    ...mapState(['headerTheme']),
    theme() {
      if (this.headerTheme === 'hero') {
        return 'theme__hero'
      }
      if (this.headerTheme === 'profile') {
        return 'theme__profile'
      }
      if (this.headerTheme === 'experience') {
        return 'theme__experience'
      }
      if (this.headerTheme === 'skills') {
        return 'theme__skills'
      }
      if (this.headerTheme === 'works') {
        return 'theme__works'
      }
      return ''
    }
  }
}
</script>

<style lang="stylus" scoped>

.header
  position relative
  z-index 5
  &__items
    +bp($be992)
      display none 
  &__burger
    display none
    +bp($be992)
      display block

.theme
  &__hero
    .header
      &__toolbar
        background-color transparent
        font-family: 'Fugaz One', cursive;
      &__title
        font-size 24px
        color #000
      &__items
        & ^[2..-2]__btn
          color #1E88E5
          font-size 16px
      &__burger
        color #1E88E5
  &__profile
    .header
      &__toolbar
        background-color transparent
        font-family: 'Audiowide', cursive;
      &__title
        font-size 24px
        color #B3E5FC
      &__items
        & ^[2..-2]__btn
          font-size 16px
          color #B3E5FC
      &__burger
        color #B3E5FC
  &__experience
    .header
      &__toolbar
        background-color #FFD180
        font-family: 'Fredericka the Great', cursive
      &__title
        font-size 24px
        color red
      &__items
        & ^[2..-2]__btn
          font-size 16px
          color red
      &__burger
        color red
  &__skills
    .header
      &__toolbar
        background-color transparent
        font-family 'Aldrich', sans-serif
      &__title
        font-size 24px
        color #fff
      &__items
        & ^[2..-2]__btn
          font-size 16px
          color #fff
      &__burger
        color #fff
  &__works
    .header
      &__toolbar
        background-color rgba(141, 110, 99, 0.5)
        font-family 'Acme', sans-serif
      &__title
        font-size 24px
        color #fff
      &__items
        & ^[2..-2]__btn
          font-size 16px
          color #fff
      &__burger
        color #fff

</style>
