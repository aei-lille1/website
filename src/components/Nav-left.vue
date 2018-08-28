<template>
    <div class="nav-left" v-bind:class="{ opened: open }">
        <img src="@/assets/aei_logo.jpg" alt="logo de l'AEI" @click="home">
        <ul v-if="this.$route.path !== '/Staff'">
            <li @click="selectPart('event')" v-bind:class="{ selected: select === 'event' }">
                Événements à venir
                <svg viewBox="0 0 20 20" class="icon">
                    <path d="M20 0 L10 10 L20 20"></path>
                </svg>
            </li>
            <li v-if="this.$route.path !== '/'" @click="selectPart('date')"
            v-bind:class="{ selected: select === 'date' }">
                Dates des examens
                <svg viewBox="0 0 20 20" class="icon">
                    <path d="M20 0 L10 10 L20 20"></path>
                </svg>
            </li>
            <li v-if="this.$route.path !== '/'" @click="selectPart('info')"
            v-bind:class="{ selected: select === 'info' }">
                Informations & fichiers
                <svg viewBox="0 0 20 20" class="icon">
                    <path d="M20 0 L10 10 L20 20"></path>
                </svg>
            </li>
            <li v-if="this.$route.path !== '/'" @click="selectPart('photo')"
            v-bind:class="{ selected: select === 'photo' }">
                Photos
                <svg viewBox="0 0 20 20" class="icon">
                    <path d="M20 0 L10 10 L20 20"></path>
                </svg>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'NavLeft',
  data() {
    return {
      open: false,
      select: 'event',
    };
  },
  methods: {
    home() {
      this.$parent.$emit('back-to-home');
      this.select = 'event';
      this.$parent.$emit('click');
      return this.$router.push('/');
    },
    selectPart(name) {
      this.select = name;
      this.$parent.$emit('click');
    },
  },
  mounted() {
    this.$parent.$on('section-changed', () => {
      this.select = 'event';
    });
    this.$parent.$on('open-left', () => {
      this.open = !this.open;
    });
    this.$parent.$on('click', () => {
      this.open = false;
    });
  },
};
</script>

<style scoped>
.nav-left {
    z-index: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20%;
    height: auto;
    background-color: #ae2573;
}
img {
    position: absolute;
    left: 0;
    top: 1vh;
    cursor: pointer;
    width: 60%;
    height: 20%;
    border-radius: 50%;
    margin-left: 20%;
}
ul {
    position: absolute;
    top: 25vh;
    left: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    background-color: rgb(255, 255, 255);
    font-size: 3vh;
    cursor: pointer;
    margin-top: 0.3vh;
}
li:hover {
    background-color: rgb(230, 230, 230);
}
.selected {
    background-color: rgb(230, 230, 230);
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
    .nav-left {
        width: 50%;
        top: 0;
        bottom: 0;
        transition: all 0.5s;
        transform: translateX(-100%);
    }
    .opened {
        transform: translateX(0%);
    }
}
</style>
