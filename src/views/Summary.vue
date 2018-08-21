<template>
    <div class="summary">
        <h1>{{welcome}}</h1>
        <p>Qu'est ce qui court et qui se jette ?</p>
    </div>
</template>

<script>
export default {
  name: 'Summary',
  data() {
    return {
      welcome: 'Bienvenue !!',
    };
  },
};
</script>

<style scoped>
.summary {
    font-size: 2.5vh;
    height: 100%;
}
</style>
