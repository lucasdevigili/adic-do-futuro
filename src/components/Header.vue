<template>
  <nav id="nav">
    <div id="text">
      <h1 class="title">II ADIC</h1>
      <span class="span">do Futuro</span>
    </div>
    <ul>
      <router-link to="/" class="li">Home</router-link>
      <router-link to="/inscricoes" class="li">Inscrições</router-link>
      <router-link to="/localizacao" class="li">Localização</router-link>      
    </ul>
  </nav>
</template>

<script lang="ts">
export default{
    name: 'HeaderADIC'
}
</script>

<style scoped>
nav {
  height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(144, 31, 147);
  color: white;
}

#text {
  width: 30vw;
  text-align: center;
}

.title {
  font-size: 35px;
}

.span {
  font-size: 20px;
}

ul {
  width: 70vw;
  padding: 0%;
  display: flex;
  justify-content: space-evenly;
}
.li {
  list-style-type: none;
  font-size: 20px;
}

@media (max-width: 425px) {
  .title {
  font-size: 25px;
}

.span {
  font-size: 15px;
}

.li {
  font-size: 15px;
}
}

</style>