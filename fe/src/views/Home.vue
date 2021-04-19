<template>
  <v-container
    align="center"
    justify="center">
    <v-row no-gutters>
      <v-col
        v-for="n in 6"
        :key="n"
        cols="12"
        sm="4"
        class="ma-1"
      >
        <v-card
          outlined
          tile
          flat
          class="ma-1"
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
