<template>
    <div class="left-toggle">
      <img src="@/assets/left-toggle-sidebar.png" @click="openSidebar"
      v-bind:class="{ opened: open }" alt="left toggle">
    </div>
</template>

<script>
export default {
  name: 'LeftToggle',
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openSidebar() {
      this.open = !this.open;
      this.$parent.$emit('open-left');
    },
  },
  mounted() {
    this.$parent.$on('click', () => {
      this.open = false;
    });
  },
};
</script>

<style scoped>
.left-toggle {
  display: none;
}
@media (max-width: 768px) {
  img {
    width: 5vh;
    transition: all 0.5s;
  }
  .opened {
    transform: translateX(49vw);
  }
  .left-toggle {
    display: block;
    position: fixed;
    z-index: 2;
    left: 2%;
    top: 10px;
    cursor: pointer;
  }
}
</style>
