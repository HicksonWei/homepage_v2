<template>
  <v-app>
    <Header />
    <nuxt />
  </v-app> 
</template>

<script>
export default {
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
    }
  }
}
</script>
