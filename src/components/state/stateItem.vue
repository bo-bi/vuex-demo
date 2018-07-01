<template>
  <div>
    <div class="item-abstract">
      state(响应式) -> 获取state(computed)
    </div>

    <router-link :to="{name: 'stateItem.getStateOfcomponent'}">1.在 Vue 组件中获得 Vuex 状态</router-link>
    <router-link :to="{name: 'stateItem.mapState'}">2.mapState 辅助函数</router-link>
    <router-view class="children-content"></router-view>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
   a {
     display: block;
   }
   .children-content {
     width: 1000px;
     height: 600px;
     border: 1px solid #ccc;
   }
</style>
