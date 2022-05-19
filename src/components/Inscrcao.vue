<template>
  <div id="inscricao">
    <main>
      <Header />
      <div id="main">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfyQ3VckLAMhhZDvARr8wCKiYxasHrW08Yflb1pP8zO-X4T1A/viewform?embedded=true"
          width="900"
          height="500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >Carregando…</iframe>
      </div>
    </main>
  </div>
</template>


<script lang="ts">
import Header from "./Header.vue";
export default {
  name: "InscricaoADIC",
  components: {
    Header
  }
};
</script>

<style scoped>
* {
  margin: 0%;
  background-color: rgb(241, 232, 232);
}

.title {
  margin: 0px;
   
}

#main {
  height: 85vh;
  display: flex;
  justify-content: center;  
  }
</style>