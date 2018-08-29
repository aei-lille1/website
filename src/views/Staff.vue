<template>
    <div class="staff">
        <h1>Staff</h1>
        <div class="staff-list">
            <div v-for="(member, index) in staff" :key="index" class="member">
                <img src="@/assets/staff-icon.png" alt="Staff icône">
                <span class="bold">{{member.name}}</span>
                <span class="role">{{member.role}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Staff',
  data() {
    return {
      staff: [
        { name: 'Grégoire Philippot', role: 'Président' },
        { name: 'Zoé Canoen', role: 'Secrétaire' },
        { name: 'Pierre-Henri Chupin', role: 'Trésorier' },
        { name: 'Clément Scheirlinck', role: 'Trésorier Adjoint' },
        { name: 'Nina Santi', role: 'Community-Manager' },
        { name: 'Antoine Scliffet', role: 'VP Communication' },
        { name: 'Thibaut Martinet', role: 'Web Manager' },
        { name: 'Antonin Desaegher', role: 'Membre actif' },
      ],
    };
  },
};
</script>

<style scoped>
.staff {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.5vh;
    height: 100%;
}
.staff-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.member {
    margin: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12vw;
    height: 20vh;
    background-color: #ae2573;
    border-radius: 50%;
    font-size: 2vh;
    transition: all 0.1s;
    transform: rotateX(-180deg);
}
img {
    position: fixed;
    width: 12vw;
    height: 20vh;
    transform: rotateX(-180deg);
}
span {
    transform: rotateX(-180deg);
    opacity: 0;
}
.member:hover span {
    transform: rotateX(0deg);
    opacity: 1;
}
.member:hover img {
    opacity: 0;
}
.member:hover {
    transform: rotateX(0deg);
    background-color: #ae2573;
}
.bold {
    padding-top: 5%;
    font-weight: bold;
}
.role {
    padding-top: 10%;
}
@media (max-width: 768px) {
    .member {
        width: 40vw;
        min-height: 15vh;
        font-size: 1.5vh;
    }
    img {
        width: 40vw;
        min-height: 15vh;
    }
}
</style>
