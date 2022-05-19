<template>
  <div id="inscricao">
    <main>
      <Header />
      <div id="main">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.6964119745094!2d-49.23546958544957!3d-26.88138489837179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94defd7cd445dca1%3A0xc492fdaa13077b5c!2sCol%C3%A9gio%20Municipal%20de%20Indaial!5e0!3m2!1spt-BR!2sbr!4v1652928806711!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          class="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  </div>
</template>


<script lang="ts">
import Header from "./Header.vue";
export default {
  name: 'LocalizacaoADIC',
  components: {
    Header,
  }
}
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
  align-items: center;
}

@media (min-width: 1456px) {
    .map{
          width:2000px;
          height:900px;
    }
}
</style>