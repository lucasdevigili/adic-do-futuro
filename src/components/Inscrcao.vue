<template>
  <div id="inscricao">
    <main>
      <Header />
      <div id="main">
        <iframe
         src="https://docs.google.com/forms/d/e/1FAIpQLSfxQ_r4ZyfD9_oj5lT2OuzSg6VXZhz-UkvAFmpb5GrKzlYAFA/viewform?embedded=true"
          width="900"
          height="500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          class="form"
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

@media (min-width: 1456px) {
  .form {
    width: 2000px;
    height: 900px;
  }
}
</style>