const state = {
  testProducts: [
    { name: '아우터', price: '10000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') },
    { name: '니트', price: '20000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') },
    { name: '가디건', price: '30000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') },
    { name: '티셔츠', price: '40000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') },
    { name: '셔츠', price: '50000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') },
    { name: '팬츠', price: '60000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') },
    { name: '신발', price: '70000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') },
    { name: '슈트', price: '80000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') },
    { name: '트레이닝', price: '90000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') },
    { name: '악세사리', price: '100000', description: '이 상품은 굉장히 진귀한 상품입니다.', image: require('@/../public/images/cloth.png') }
  ],
  products: []
}

const getters = {
  getProduct: state => id => state.products[id]
}

const mutations = {
  setProducts (state, products) {
    state.products = products
  }
}

const actions = {
  fetchProducts
}

function fetchProducts (store, q) {
  const items = []

  for (let i = 0; i < 30; i++) {
    items.push({ ...store.state.testProducts[q], id: i })
  }

  store.commit('setProducts', items)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
