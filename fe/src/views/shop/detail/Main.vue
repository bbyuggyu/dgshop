<template>
  <v-container>
    <v-row fluid>
      <v-col cols="6">
        <v-col>
          <v-img :src="product.image" class="mb-2"></v-img>
          <v-row >
            <v-img :src="product.image"
                   v-for="i in [1, 2, 3, 4]"
                   :key = "i"
                   style="width:25%;"
            />
          </v-row>
        </v-col>
      </v-col>
      <v-col fluid cols="6">
        <v-card-title>{{product.name}}</v-card-title>
        <v-card-subtitle>{{numberToPrice(product.price)}}원</v-card-subtitle>
        <v-divider></v-divider>
        <v-row align="center">
          <v-col cols="6">
            <v-subheader>배송비:</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-select
                v-model="selectedCharge"
                :items="selectCharge"
                @change="onSelect"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-subheader>옵션선택:</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-select
                v-model="selectedOption"
                :items="selectOptions"
                @change="onSelect"
            ></v-select>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="1">
            <v-btn icon @click="editCount(-1)"><v-icon>mdi-minus</v-icon></v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn icon @click="editCount(1)"><v-icon>mdi-plus</v-icon></v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="3">구매수량:  </v-col>
          <v-col cols="2">{{productCount}}개</v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="6">총 가격:</v-col>
          <v-spacer></v-spacer>
          <v-col cols="3">{{numberToPrice(product.price * productCount)}}원</v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-img :src="product.image" class="ma-3"></v-img>
      <v-img :src="product.image" class="ma-3"></v-img>
      <v-img :src="product.image" class="ma-3"></v-img>
      <v-img :src="product.image" class="ma-3"></v-img>
      <v-img :src="product.image" class="ma-3"></v-img>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    product: function () {
      const id = this.$route.params.id
      return this.$store.getters['product/getProduct'](id)
    }
  },
  data () {
    return {
      isSelected: false,
      productCount: 0,
      selectedCharge: '',
      selectedOption: '',
      selectCharge: ['주문시 결제(선결제)', '수령시 결제(착불)'],
      selectOptions: ['빨강', '파랑', '초록', '노랑']
    }
  },
  methods: {
    numberToPrice,
    onSelect,
    editCount
  }
}

function numberToPrice (price) {
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function onSelect () {
  if (this.selectedCharge && this.selectedOption) {
    this.isSelected = true
  }
}

function editCount (value) {
  if (!(this.productCount + value < 0)) this.productCount += value
}
</script>

<style scoped>

</style>
