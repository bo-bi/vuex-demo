<template>
  <div class="summary-father">
    单价: <input type="text" v-model="price" />
    件数: <input type="text" v-model="number" />
    总价：{{sum}}
    <br>
    <button @click="getCountry">获取国家</button>
    <br>
    country: {{country}}
    <br>
    person: {{person}}
    <div class="summary">
      使用常量来替代mutation的事件类型
      <br>
      ①方便配合工具的使用
      <br>
      ②对store的mutation一幕撩人
      <br>
      mutation-type.js

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        price: '',
        number: '',
      }
    },
    computed: {
      sum() {
        return this.price*this.number;
      },
      country2() {
        return this.$store.state.person.country;
      },
      ...mapState({
        country: state => state.person.country,
        person: state => state.person
      })
    },
    methods: {
      getCountry() {
        this.$store.commit('SOME_MUTATION',{
          country: "America"
        });
      }
    }
  }
</script>

<style scoped>

</style>
