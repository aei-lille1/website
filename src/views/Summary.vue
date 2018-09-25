<template>
    <div class="summary">
        <h1>{{welcome}}</h1>
        <div class="iFrame">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com
                %2Faei.lille1&tabs=timeline&width=500&height=500&small_header=false&adapt_cont
                ainer_width=true&hide_cover=false&show_facepile=false&appId"
            width="500" height="500" style="border:none;overflow:hidden" scrolling="no"
            frameborder="0" allowTransparency="true" allow="encrypted-media">
          </iframe>
        </div>
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iFrame {
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;
  border-style: inset;
  border-color: #ae2573;
  border-width: 0.5rem;
}
iframe {
  max-height: 100%;
}
</style>
