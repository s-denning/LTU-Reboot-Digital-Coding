let div = document.querySelectorAll('div')[0];

let newParagaph = document.createElement('p');
let newTextNode = document.createTextNode('This is the new text node');
    newParagaph.appendChild(newTextNode);
    div.appendChild(newParagaph);
    newParagaph.style.color = 'red'

