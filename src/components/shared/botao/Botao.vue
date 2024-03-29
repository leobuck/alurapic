<template>
  <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: ['tipo', 'rotulo', 'confirmacao', 'estilo'],
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm('Confirma operação?')) {
          this.$emit('botaoAtivado', new Date());
        }
      } else {
        this.$emit('botaoAtivado', new Date());
      }
    }
  },
  computed: {
    estiloDoBotao() {
      if (this.estilo == 'perigo') return 'botao-perigo';
      else return 'botao-padrao';
    }
  }
}
</script>

<style>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
  cursor: pointer;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
