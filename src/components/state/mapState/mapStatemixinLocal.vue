<template>
  <div>
    <br>
    ①count(来自store,mapState传递对象获取): {{count}}
    <br>
    ③countPlusLocalState(mapState传递对象获取): {{countPlusLocalState}}
    <br>
    count加5(局部属性)：{{add5}}
    <br>
    name(mapState传递数组获取): {{name}}
    <br>
    <button @click="openObject">对象展开运算符</button>
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
    computed: {
      add5() {
        return this.localCount + 5;
      },
      ...mapState({
        count: state => state.count,
        countPlusLocalState(state) {
          return state.name + this.localCount
        }
      }),
      ...mapState([
        'name'
      ])
    },
    methods: {
      openObject() {
        let obj = {
          name: 'jack',
          age: 18
        }

        let array = [1,2,3]

        let objArray = [
          {
            count: 0
          },
          {
            name: 'store'
          }
        ]

        let person = {
          country: 'China',
          ...obj,
          ...array,
          ...objArray,
          local: '山西',
        }
        console.log(person,"person");
      }
    }
  }
</script>

<style scoped>

</style>
