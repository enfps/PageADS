const botao = document.getElementById('btnMensagem');
const divMensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
  divMensagem.innerHTML = `
    <p class="latin">Ad astra per aspera</p>
    <p class="portugues">Para as Estrelas Através das Dificuldades.</p>
  `;
});
