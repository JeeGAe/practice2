import { kor } from './hello_module.js';

const korButton = document.createElement('button');
korButton.innerText = 'kor';
korButton.style.fontSize = '20px';
korButton.style.padding = '0px 10px';
korButton.style.backgroundColor = 'skyblue';

root.append(korButton);

// hello_module의 만들어둔 kor 함수를 사용할수 있다.
korButton.addEventListener('click', kor);