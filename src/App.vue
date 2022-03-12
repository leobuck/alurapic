<template>
  <div>
    <h1>{{ titulo }}</h1>
  <img :src="foto.url" :alt="foto.titulo">
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      foto: {
        url: "https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/03/visa%CC%83o-do-cachorro-2.jpeg?resize=626%2C626&ssl=1",
        titulo: "cachorro"
      }
    }
  }
}
</script>

<style>

</style>
