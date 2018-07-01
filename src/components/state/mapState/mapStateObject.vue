<template>
  <div>
    <br>
    ①count: {{count}}
    <br>
    ②countAlias: {{countAlias}}
    <br>
    ③countPlusLocalState: {{countPlusLocalState}}
    <br>
    ④countPlusLocalStateArrow: {{countPlusLocalStateArrow}}
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        localCount: 5
      }
    },
    computed: mapState({
      count: state => state.count,
      countAlias: 'count',
      //为了使 this 能够获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.localCount;
      },
      //箭头函数不能获取局部状态
      countPlusLocalStateArrow: state =>
        state.count + this.localCount,

    })
  }
</script>

<style scoped>

</style>
