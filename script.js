const imagemModelo = document.querySelector('.imagem img');
const area1Input = document.querySelector('.area-1 input');
const area2Input = document.querySelector('.area-2 input');
const area3Input = document.querySelector('.area-3 input');
const fotoModeloInput = document.querySelector('#foto-modelo-input');
let fotoModelo = null;
const gerarImagemBtn = document.querySelector('#gerar-imagem');

gerarImagemBtn.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = imagemModelo.width;
  canvas.height = imagemModelo.height;
  context.drawImage(imagemModelo, 0, 0);
  context.font = '24px sans-serif';
  context.fillStyle = '#fff';
  context.fillText(area1Input.value, 100, 100);
  context.fillText(area2Input.value, 200, 200);
  context.fillText(area3Input.value, 300, 300);
  const novaImagem = canvas.toDataURL();
  const novaImagemElemento = document.createElement('img');
  novaImagemElemento.src = novaImagem;
  document.body.appendChild(novaImagemElemento);
});