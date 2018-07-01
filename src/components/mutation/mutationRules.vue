<template>
  <div class="summary-father">
    <button @click="addNewPropByVueset">添加新属性(通过Vue.set(obj|array,属性名,值))</button>
    <br>
    <br>
    <button @click="addNewPropByObjOpen">添加新属性(通过对象展开运算符)</button>
    <br>
    <br>
    {{count}}
    <br>
    {{newProp}}
    <br>
    {{age}}

    <div class="summary">
      Mutation需遵守的一些注意事项
      <br>
      1.最好提前在你的store中初始化好所有所需属性
      <br>
      2.当需要在对象上添加新属性时，你应该
      <br>
      ①Vue.set(obj,'newProp',123);
      <br>
      ②state.obj={...state.obj,newProp: 123};

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapState} from 'vuex'
    export default {
      data() {
          return {
            str: '我是新添加的属性'
          }
      },
      methods: {
        //通过Vue.set给state添加属性
        addNewPropByVueset() {
          Vue.set(this.$store.state,'newProp',this.str);
        },
        addNewPropByObjOpen() {
          this.$store.state.person = {
            ...this.$store.state.person,
            age: 19
          }
        }

      },
      computed: {
        ...mapState({
          count: state => state.count,
          newProp: state => state.newProp,
          age: state => state.person.age
        })
      }
    }
</script>

<style scoped>

</style>
