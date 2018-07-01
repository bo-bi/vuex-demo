<template>
  <div>
    <br>
    ①count： {{count}}
    <br>
    ②name： {{name}}
    <br>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {

      }
    },
    //当映射的计算属性的名称与state的子节点名称相同时，可以给mapState传递一个数组
    computed: mapState([
      'count','name'
    ])
  }
</script>

<style scoped>

</style>
