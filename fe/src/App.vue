<template>
  <div>
    <navigation-bar/>
    <v-divider></v-divider>
    <main-btn/>
    <v-divider></v-divider>
    <menu-bar/>
    <v-divider></v-divider>
    <main-image/>
    <v-main>
      <router-view/>
    </v-main>
  </div>
</template>

<script>
import MainBtn from './components/head/MainBtn'
import NavigationBar from './components/head/NavigationBar'
import MenuBar from './components/head/MenuBar'
import MainImage from './components/head/MainImage'
export default {
  name: 'App',
  components: { NavigationBar, MainBtn, MenuBar, MainImage },
  data () {
    return {
    }
  }
}
</script>
