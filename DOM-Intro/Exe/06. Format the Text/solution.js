function solve() {
  
  let textElement = document.querySelector('#input').value;
  let outputTextElement = document.querySelector('#output');
  
  let sentences = textElement.split('.');

  sentences = sentences.filter(s => s.length > 0)
  .map(s => s += '.');

  while(sentences.length > 0) {

    let pElement = document.createElement('p');
    pElement.textContent = sentences.splice(0, 3).join('');

    outputTextElement.appendChild(pElement);
  }
}