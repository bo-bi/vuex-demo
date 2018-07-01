<template>
  <div>
    <router-link :to="{name: 'stateItem'}">一.state</router-link>
    <br>
    <br>
    <router-link :to="{name: 'mutationItem'}">二.mutation</router-link>
    <br>
    <hr>
    内容
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
