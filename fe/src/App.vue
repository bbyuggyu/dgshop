<template>
  <div>
    <v-app>
    <navigation-bar/>
    <v-divider></v-divider>
    <main-btn/>
    <v-divider></v-divider>
    <menu-bar/>
    <v-divider></v-divider>
    <main-image v-if="!$route.params.id && !$route.query.q"></main-image>
    <v-main>
      <router-view/>
    </v-main>
    </v-app>
    <Footer/>
  </div>
</template>

<script>
import MainBtn from './components/head/MainBtn'
import NavigationBar from './components/head/NavigationBar'
import MenuBar from './components/head/MenuBar'
import MainImage from './components/head/MainImage'
import Footer from './components/foot/Footer'
export default {
  name: 'App',
  components: { NavigationBar, MainBtn, MenuBar, MainImage, Footer },
  data () {
    return {
    }
  }
}
</script>
