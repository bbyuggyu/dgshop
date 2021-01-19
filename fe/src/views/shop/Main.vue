<template>
  <v-container fluid>
    <v-row fluid align="center" justify="center">
      <v-card v-for="item in items" :key="item.id" outlined class="shop_card" @click="goToDetailPage(item.id)">
        <v-col>
          <v-row>
            <v-img :src="item.image" class="shop_card_image"></v-img>
          </v-row>
        </v-col>
        <div class="shop_card_title">{{ item.name }}</div>
        <div class="shop_card_price">{{ numberToPrice(item.price) }}원</div>
        <div class="shop_card_price user_price">직원가: {{ numberToPrice((item.price / 3).toFixed(0)) }}원</div>
        <div class="shop_card_text">{{ item.description }}</div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  created () {
    this.fetchProducts()
  },
  computed: {
    items: function () { return this.$store.state.product.products }
  },
  watch: {
    '$route.query.q': {
      handler () {
        this.fetchProducts()
      }
    }
  },
  methods: {
    fetchProducts () {
      const q = parseInt(this.$route.query.q)
      this.$store.dispatch('product/fetchProducts', q)
    },
    numberToPrice (price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    goToDetailPage (id) {
      this.$router.push(`/shop/${id}`)
    }
  }
}
</script>

<style>
  .shop_card {
    width: 20%;
    margin: 10px;
    cursor: pointer;
  }

  .shop_card_image {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    height: 200px;
  }

  .shop_card_title {
    font-weight: bold;
    font-size: 30px;
  }

  .shop_card_price {
    color: #e32b2b;
    font-weight: bold;
    font-size: 20px;
  }

  .shop_card_price.user_price  {
    font-size: 12px;
  }

  .shop_card_text {
    font-size: 14px;
  }
</style>
