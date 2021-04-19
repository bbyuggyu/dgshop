<template>
    <v-app-bar
      color="#FFFFFF"
      app
      dense
      flat
      height="30"
    >
      <v-btn text small>로그인</v-btn>
      <v-btn text small>회원가입</v-btn>
      <v-btn text small>마이패이지▼</v-btn>
      <v-btn text small>
        <v-icon left
        @click="ThemaChange"
        >mdi-brightness-6</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <template v-if="!$vuetify.breakpoint.xs">
        <v-btn text small>
        <v-icon left>mdi-cart</v-icon> 장바구니
        </v-btn>
        <v-btn text small>
        <v-icon left>mdi-truck-delivery</v-icon> 배송조회
        </v-btn>
        <v-btn text small>
        <v-icon left>mdi-gift</v-icon> 이벤트
        </v-btn>
        <v-btn text small>
        <v-icon left>mdi-magnify</v-icon> 구매후기
        </v-btn>
      </template>
      <template v-else>
        <div data-app>
         <v-menu close-on-click bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#000000"
              dark
              text
              v-bind="attrs"
              v-on="on"
            >
            <v-icon left>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
         </v-menu>
        </div>
      </template>
    </v-app-bar>

</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }
  },
  methods: {
    ThemaChange () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
