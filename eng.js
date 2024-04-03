import { eng } from './hello_module.js';



const engButton = document.createElement('button');
engButton.innerText = 'eng';
engButton.style.fontSize = '20px';
engButton.style.padding = '0px 10px';
engButton.style.backgroundColor = 'orange';

root.append(engButton);

// hello_module의 만들어둔 eng 함수를 사용할수 있다.
engButton.addEventListener('click', eng);