<template>
    <div class="nav-right">
        <img src="@/assets/univ_logo.png" alt="Logo de l'Université">
        <ul>
            <router-link v-for="(lvl, index) in section" :key="index"
            :to="`${lvl.path}`" tag="li" @click.native="selectSection(lvl.name)"
            v-bind:class="{ selected: select === lvl.name }">
                <svg viewBox="0 0 20 20" class="icon">
                    <path d="M0 0 L10 10 L0 20"></path>
                </svg>
                {{ lvl.name }}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'NavRight',
  data() {
    return {
      select: 'Accueil',
      section: [
        { path: '/', name: 'Accueil' },
        { path: '/L1', name: 'Licence 1' },
        { path: '/L2', name: 'Licence 2' },
        { path: '/L3', name: 'Licence 3' },
        { path: '/M1', name: 'Master 1' },
        { path: '/M2', name: 'Master 2' },
      ],
    };
  },
  methods: {
    selectSection(name) {
      this.$parent.$emit('section-changed');
      this.select = name;
    },
  },
};
</script>

<style scoped>
.nav-right {
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 15%;
    height: auto;
    background-color: #cdcdcd;
}
img {
    position: absolute;
    right: 0;
    top: 1vh;
    cursor: pointer;
    width: 100%;
    margin: 0;
}
ul {
    position: absolute;
    top: 13vh;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
}
li {
    text-align: left;
    background-color: rgb(255, 255, 255);
    font-size: 3vh;
    cursor: pointer;
    margin: 0.1vh 0 0 0;
}
.selected .icon {
    opacity: 1;
    transform: translateX(0);
}
.icon {
    width: 8%;
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(-100%);
}
.icon path {
    stroke: #cdcdcd;
    stroke-width: 5px;
    fill: none;
}
li:hover .icon {
    opacity: 1;
    transform: translateX(0);
}
</style>
