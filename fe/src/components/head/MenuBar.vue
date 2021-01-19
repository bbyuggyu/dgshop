
<template>
  <v-container fluid>
    <v-row no-gutters>
     <v-spacer></v-spacer>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        @click="item.action"
        cols="12"
        sm="1"
      >
        <v-card
        tile
        flat
        >
        <!-- <v-card-title>{{item}}</v-card-title> -->
        <v-btn text x-large max-width>
            {{item.title}}
        </v-btn>
        </v-card>
      </v-col>
     <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: '아우터',
          action: this.handleClick
        },
        {
          title: '니트',
          action: this.handleClick
        },
        {
          title: '가디건',
          action: this.handleClick
        },
        {
          title: '티셔츠',
          action: this.handleClick
        },
        {
          title: '셔츠',
          action: this.handleClick
        },
        {
          title: '팬츠',
          action: this.handleClick
        },
        {
          title: '신발',
          action: this.handleClick
        },
        {
          title: '슈트',
          action: this.handleClick
        },
        {
          title: '트레이닝',
          action: this.handleClick
        },
        {
          title: '악세사리',
          action: this.handleClick
        }
      ]
    }
  },
  methods: {
    handleClick (i) {
      const name = i.target.innerText
      if (name === '아우터') {
        return this.$router.push('/shop?q=0')
      }
      if (name === '니트') {
        return this.$router.push('/shop?q=1')
      }
      if (name === '가디건') {
        return this.$router.push('/shop?q=2')
      }
      if (name === '티셔츠') {
        return this.$router.push('/shop?q=3')
      }
      if (name === '셔츠') {
        return this.$router.push('/shop?q=4')
      }
      if (name === '팬츠') {
        return this.$router.push('/shop?q=5')
      }
      if (name === '신발') {
        return this.$router.push('/shop?q=6')
      }
      if (name === '슈트') {
        return this.$router.push('/shop?q=7')
      }
      if (name === '트레이닝') {
        return this.$router.push('/shop?q=8')
      }
      if (name === '악세사리') {
        return this.$router.push('/shop?q=9')
      }
    }
  }
}
</script>

<style scoped>
</style>
