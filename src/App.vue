<template>
  <div id="app">
    <NavLeft/>
    <Body/>
    <NavRight/>
  </div>
</template>

<script>
import NavLeft from '@/components/Nav-left.vue';
import Body from '@/components/Body.vue';
import NavRight from '@/components/Nav-right.vue';

export default {
  name: 'App',
  components: {
    NavLeft,
    Body,
    NavRight,
  },
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
h1 {
    text-align: center;
}
</style>
