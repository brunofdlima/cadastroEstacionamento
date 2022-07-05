<template>
  <div class="estacioheader">
    <img src="../assets/img/logoEstacio.png">
    <a href="">Cadastro</a>
  </div>
</template>

<script>

export default {
  name: 'estacionaHeader',
}

</script>


<style scoped>

.estacioheader{
  display: flex;
  justify-content: space-between;
  background-color: #4da6ff;
  align-items: center;
  padding: 0 10%;
}

a {
  text-decoration: none;
  color: #463f57;
  font-size: 1.375rem;
  transition: .5s;
}

a:hover {
  color: aliceblue;
}

img{
  height: 5.9375rem;
}

</style>