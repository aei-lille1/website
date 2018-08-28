<template>
    <div class="nav-right" v-bind:class="{ opened: open }">
        <img src="@/assets/univ_logo.jpeg" alt="Logo de l'Université">
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
      open: false,
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
  mounted() {
    this.$parent.$on('back-to-home', () => {
      this.select = 'Accueil';
    });
    this.$parent.$on('open-right', () => {
      this.open = !this.open;
    });
  },
};
</script>

<style scoped>
.nav-right {
    z-index: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 15%;
    height: auto;
    background-color: #ae2573;
}
img {
    position: absolute;
    right: 0;
    top: 1vh;
    cursor: pointer;
    width: 100%;
    height: 13%;
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
    stroke: #ae2573;
    stroke-width: 5px;
    fill: none;
}
li:hover .icon {
    opacity: 1;
    transform: translateX(0);
}
@media (max-width: 768px) {
    .nav-right {
        width: 40%;
        top: 0;
        bottom: 0;
        transition: all 0.5s;
        transform: translateX(100%);
    }
    .opened {
        transform: translateX(0%);
    }
}
</style>
