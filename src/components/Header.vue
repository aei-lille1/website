<template>
    <div class="header">
        <a href="https://twitter.com/AEILille1" target="_blank">
            <img class="twitter" src="@/assets/twitter.png" alt="twitter">
        </a>
        <a href="https://www.facebook.com/aei.lille1/" target="_blank">
            <img class="fb" src="@/assets/fb.png" alt="facebook">
        </a>
        <a href="https://discordapp.com/invite/Jz96bUK" target="_blank">
            <img class="discord" src="@/assets/discord.jpg" alt="discord">
        </a>
    </div>
</template>

<script>
export default {
  name: 'Header',
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
a {
    position: absolute;
    right: 1%;
    top: 0;
}
.fb {
    top: 1vh;
    right: 6vh;
}
.discord {
    top: 1vh;
    right: 1vh;
}
.twitter {
    top: 1vh;
    right: 11vh;
}
@media (max-width: 768px) {
  .staff {
    margin-left: 7vh;
  }
  .fb,
  .discord,
  .twitter {
    margin-right: 7vh;
  }
}
</style>
