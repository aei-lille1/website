<template>
    <div class="body">
        <Header/>
        <router-view/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Body',
  components: {
    Header,
  },
};
</script>

<style scoped>
.body {
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 20%;
    right: 15%;
    bottom: 0;
    width: 65%;
    height: auto;
    background-color: white;
}
</style>
