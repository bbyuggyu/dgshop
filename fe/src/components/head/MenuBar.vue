<template>
    <v-app-bar
      color="#FFFFFF"
      dense
      flat
      height="30"
    >
      <v-spacer></v-spacer>
      <v-btn @click="$router.push('/shop?q=0')" text>기획상품</v-btn>
      <v-btn @click="$router.push('/shop?q=1')" text>마스크/세정제</v-btn>
      <v-btn @click="$router.push('/shop?q=2')" text>차포트</v-btn>
      <v-btn @click="$router.push('/shop?q=3')" text>물병/주전</v-btn>
      <v-btn @click="$router.push('/shop?q=4')" text>컵/잔</v-btn>
      <v-btn @click="$router.push('/shop?q=5')" text>텀블러/보틀</v-btn>
      <v-btn @click="$router.push('/shop?q=6')" text>워머/트레이/보관함</v-btn>
      <v-btn @click="$router.push('/shop?q=7')" text>플로이</v-btn>
      <v-btn @click="$router.push('/shop?q=8')" text>차류</v-btn>
      <v-btn @click="$router.push('/shop?q=9')" text>세트 상품</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
