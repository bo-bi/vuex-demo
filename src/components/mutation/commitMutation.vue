<template>
  <div class="summary-father">
    <button @click="commitMutation">commit mutation</button>
    <br>
    <button @click="increment">increment</button>
    <br>
    <button @click="incrementN(10)">incrementN</button>
    <br>
    <button @click="incrementObj({amount: 20})">incrementObj</button>
    <br>
    <button @click="SOME_MUTATION({country: 'Japan'})">SOME_MUTATION</button>
    <br>
    <button @click="getCountry({country: '乌克兰'})">getCountry</button>
    <br>
    {{person.country}}
    <div class="summary">
      提交Mutation的两种方式
      <br>
      1.调用store.commit();
      <br>
      this.$sore.commit('increment');
      <br>
      2. ...mapMutations
      <br>
      ①传递数组:直接可以调用mutation的事件类型作为method
      <br>
      methods: {
      <br>
        <span class="seat-10"></span>...mapMutations([
      <br>
      <span class="seat-50"></span>'increment', //将this.increment() 映射为 this.$store.commit('increment')
      <br>
      <span class="seat-50"></span>'incrementObj' //将this.incrementObj({amount: 10}) 映射为 this.$store.commit('increment',{amount: 10})
      <br>
        ])
      <br>
      ②传递对象:给mutation的事件类型起个别名，作为method
      <br>
      methods: {
      <br>
      <span class="seat-10"></span>...mapMutations({
      <br>
      <span class="seat-50"></span>getCountry: 'SOME_MUTATION'
      <br>
      <span class="seat-50"></span>//将this.getCountry({country: 'Japan'}) 映射为 this.$store.commit('SOME_MUTATION',{country: 'Japan'})
      <br>
      })
      <br>
      }
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    methods: {
      commitMutation() {
        this.$store.commit('increment');
      },
      //数组
      ...mapMutations([
        //将this.increment(); 映射为 this.$store.commit('increment');
        'increment',
        //将tthis.incrementN(n) 映射为 this.$store.commit('incrementN',n);
        'incrementN',
        //将this.incrementObj({amount: 10}) 映射为 this.$store.commit('incrementObj',payload) payload:对象
        'incrementObj',
        //将this.SOME_MUTATION({country: 'Japan'}) 映射为 this.$store.commit('SOME_MUTATION',payload) payload:对象
        'SOME_MUTATION'
      ]),
      //对象
      ...mapMutations({
        //将this.getCountry({country: '乌克兰'}) 映射为 this.$store.commit('SOME_MUTATION',{country: '乌克兰'})
        getCountry: 'SOME_MUTATION'
      })
    },
    computed: {
      ...mapState([
        'person'
      ])
    }
  }
</script>

<style scoped>

</style>
