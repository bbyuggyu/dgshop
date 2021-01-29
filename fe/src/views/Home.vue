<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 6"
        :key="n"
        cols="12"
        sm="4"
        class="ma-15"
      >
        <v-card
          class="ma-15"
          outlined
          tile
          flat
        >
          One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
