import Vue from "vue";

Vue.directive('meu-transform', {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener('dblclick', function() {
      let incremento = 90;
      let animacao = false;

      if (binding.value) {
        incremento = binding.value.incremento;
        animacao = binding.value.animacao;
      }

      current += incremento;
      el.style.transform = `rotate(${current}deg)`;

      if (animacao) {
        el.style.transition = 'transform 0.5s';
      }
    });
  }
});
