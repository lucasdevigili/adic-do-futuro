<template>
  <div id="home">
    <main>
      <Header />
      <div id="contens">
        <div id="left">
          <img src="../assets/adicFoto.jpg" alt="Divulgação ADIC" class="photo" />
        </div>
        <div id="right">
          <div id="box">
            <div class="text">
              <p class="p">II ADIC</p>
              <br />
              <br />
              <p class="p">04/05 em Indaial - SC</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- <div id="footer">
        <h1>oi</h1>
        <h1>oi</h1>
    </div>-->
  </div>
</template>

<script lang="ts">
import Header from "./Header.vue";
export default {
  name: "HomeADIC",
  components: {
    Header
  }
};
</script>

<style scoped>
* {
  margin: 0%;
  width: auto;
  height: auto;
}

#left {
  height: 85vh;
  width: 50vw;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgb(241, 232, 232);
}

#right {
  height: 85vh;
  width: 50vw;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(241, 232, 232);
}

#box {
  height: 350px;
  width: 400px;
  background-color: rgb(1, 151, 57);
  border-radius: 0px 20px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  max-width: 350px;
  text-align: center;
}

.p {
  font-size: 35px;
  font-weight: bold;
  color: white;
}

.photo {
  height: 400px;
  width: auto;
}

@media (max-width: 850px) {
  #box {
    height: 250px;
    width: 300px;
  }
  .p {
    font-size: 25px;
  }

  .photo {
    height: 300px;
    width: auto;
  }
}

@media (max-width: 610px) {
  #contens {
    display: flex;
  }

  #left {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  #right {
    height: 34ch;
    width: 100vw;
    margin-top: 85vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .photo {
    height: 350px;
  }

  #box {
    border-radius: 0px 0px 20px 20px;
    height: 250px;
    width: 300px;
  }
}

@media (min-width: 1456px) {
    #box {
    height: 700px;
    width: 750px;
  }
.text {
  max-width: 900px;
}

  .p {
    font-size: 70px;
  }

  .photo {
    height: 800px;
  }
}
</style>