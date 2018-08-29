<template>
  <div id="app">
    <NavLeft/>
    <LeftToggle/>
    <Body/>
    <RightToggle/>
    <NavRight/>
  </div>
</template>

<script>
import NavLeft from '@/components/Nav-left.vue';
import LeftToggle from '@/components/Left-toggle.vue';
import Body from '@/components/Body.vue';
import RightToggle from '@/components/Right-toggle.vue';
import NavRight from '@/components/Nav-right.vue';

export default {
  name: 'App',
  components: {
    NavLeft,
    LeftToggle,
    Body,
    RightToggle,
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
