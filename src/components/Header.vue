<template>
    <div class="header">
        <img class="staff" @click="staff" src="@/assets/staff.jpeg" alt="staff">
        <img class="fb" src="@/assets/fb.png" alt="facebook">
        <img class="discord" src="@/assets/discord.jpg" alt="discord">
    </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    staff() {
      this.$parent.$parent.$emit('back-to-home');
      return this.$router.push('/Staff');
    },
  },
};
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    height: 6vh;
    border-bottom: #ae2573 solid 0.2vh;
}
img {
    position: absolute;
    width: 4vh;
    border-radius: 150px;
    cursor: pointer;
}
.staff {
    width: 7vh;
    border-radius: 0;
    left: 1vh;
}
.fb {
    right: 6vh;
}
.discord {
    right: 1vh;
}
</style>
