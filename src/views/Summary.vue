<template>
    <div class="summary">
        <h1>{{welcome}}</h1>
        <p>Qu'est ce qui court et qui se jette ?</p>
        <div class="iFrame">
          <div class="iframe-border">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com
                  %2Faei.lille1&tabs=timeline&width=320&height=500&small_header=false&adapt_cont
                  ainer_width=true&hide_cover=false&show_facepile=false&appId"
              width="320" height="500" style="border:none;overflow:hidden" scrolling="no"
              frameborder="0" allowTransparency="true" allow="encrypted-media">
            </iframe>
          </div>
          <div class="iframe-border">
            <a class="twitter-timeline" data-width="320" data-height="500"
              data-lang="fr" data-theme="dark" href="https://twitter.com/AEILille1?ref_src=twsrc%5Etfw">
            </a>
          </div>
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
  width: 80%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
iframe {
  max-width: 100%;
}
.iframe-border {
  width: 320px;
  height: 500px;
  border-style: inset;
  border-color: #ae2573;
  border-width: 0.5rem;
}
</style>
