<template>
    <v-carousel
    v-if="!$vuetify.breakpoint.xs"
    cycle
    hide-delimiter-background
    :show-arrows="false">
        <v-carousel-item
          v-for="(item,i) in imageitems"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      imageitems: [
        {
          src: 'https://app-storage-edge-005.cafe24.com/bannermanage2/boom2004/2020/05/19/717f284d4a18f449e0ae8112a9c0925f.jpg'
        },
        {
          src: 'https://app-storage-edge-005.cafe24.com/bannermanage2/boom2004/2020/09/08/6344fe0e8d7e3af1b0e5baceda984af2.gif'
        },
        {
          src: 'https://app-storage-edge-005.cafe24.com/bannermanage2/boom2004/2020/09/08/2a66ca8148485c58252dfadfc2c8dc6c.gif'
        },
        {
          src: 'https://app-storage-edge-005.cafe24.com/bannermanage2/boom2004/2019/12/12/00eca1a15ce86bdea2e892d1f2b58b42.jpg'
        }
      ]
    }
  }
}
</script>
