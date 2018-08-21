<template>
    <div class="nav-left">
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
      select: 'event',
    };
  },
  methods: {
    home() {
      return this.$router.push('/');
    },
    selectPart(name) {
      this.select = name;
    },
  },
  mounted() {
    this.$parent.$on('section-changed', () => {
      this.select = 'event';
    });
  },
};
</script>

<style scoped>
.nav-left {
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20%;
    height: auto;
    background-color: #cdcdcd;
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
