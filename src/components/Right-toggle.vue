<template>
    <div class="right-toggle">
      <img src="@/assets/right-toggle-sidebar.png" @click="openSidebar"
      v-bind:class="{ opened: open }" alt="right toggle">
    </div>
</template>

<script>
export default {
  name: 'RightToggle',
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openSidebar() {
      this.open = !this.open;
      this.$parent.$emit('open-right');
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
.right-toggle {
  display: none;
}
@media (max-width: 768px) {
  img {
    width: 5vh;
    transition: all 0.5s;
  }
  .opened {
    transform: translateX(-40vw);
  }
  .right-toggle {
    display: block;
    position: fixed;
    z-index: 2;
    right: 2%;
    top: 10px;
    cursor: pointer;
  }
}
</style>
