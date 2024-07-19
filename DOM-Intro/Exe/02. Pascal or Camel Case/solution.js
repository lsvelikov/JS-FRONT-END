function solve() {

  let text = document.getElementById('text').value.toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;
  let result = document.querySelector('#result');

  let sentence = [];
  text = text.split(' ');
  if(currentCase === 'Camel Case') {

    sentence.push(text[0]);

    for(let index = 1; index < text.length; index++) {
      sentence.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));
    }

    result.textContent = sentence.join('');

  } else if(currentCase === 'Pascal Case') {
    
    for(let i = 0; i < text.length; i++) {
      sentence.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
    }

    result.textContent = sentence.join('');

  } else {
    result.textContent = 'Error!';
  }
  
}