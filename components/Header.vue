<template>
  <header>
    <!-- <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar fixed :color="headerColor" :dark="darkTheme">
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items class="header__items">
        <v-btn v-scroll-to="'#profile'" flat>
          Profile
        </v-btn>
        <v-btn v-scroll-to="'#experience'" flat>
          Experience
        </v-btn>
        <v-btn v-scroll-to="'#skills'" flat>
          Skills
        </v-btn>
        <v-btn v-scroll-to="'#works'" flat>
          Works
        </v-btn>
        <v-btn v-scroll-to="'#life'" flat>
          Life
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="header__burger" @click="drawer = !drawer" />
      <!-- btn attr 加 icon 才不會長得像 btn-->
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
        <v-list-tile v-scroll-to="'#life'" @click="drawer = !drawer">
          <v-list-tile-action>
            <v-icon light>
              photo_camera
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Life</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      clipped: true,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Hank'
    }
  },
  computed: {
    ...mapState(['headerColor']),
    ...mapGetters(['darkTheme'])
  }
}
</script>

<style lang="stylus" scoped>

.header
  &__items
    +bp($be992)
      display none 
  &__burger
    display none
    +bp($be992)
      display block


</style>
