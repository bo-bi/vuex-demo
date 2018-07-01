<template>
  <div>
       {{count}}
       <button @click="changeCount">改变计数</button>
  </div>
</template>

<script>
import store from 'store/store'

export default {
  name: 'startVuex',
  methods: {
    changeCount() {
      store.commit('increment')
    }
  },
  computed: {
    count() {
      return store.state.count
    }
  }
}
</script>


<style scoped>

</style>
