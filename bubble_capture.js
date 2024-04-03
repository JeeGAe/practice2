////////////////////////////////////////////////////////////////
// 의도 추측 : 버블링과 캡쳐링을 인해 생길 수 있는 문제와 활용방법을 알아보고자 
// 개념 : 버블링은 타겟 요소부터 부모 요소를 계속 거쳐 올라가면서 이벤트를 발생시키는 현상을 말합니다.
// 캡쳐링은 반대로 상위 요소로 부터 타겟 요소까지 내려오며 이벤트를 발생시키는 현상입니다.
// 캡쳐링은 문제가 되는 경우가 별로 없지만 버블링에서는 타겟 요소와 상위 요소에 같은 이벤트 트리거가 있다면
// 그 이벤트까지 발생시키기 때문에 이를 잘 처리하여야 합니다.

////////////////////////////////////////////////////////////////

const divTag = document.createElement('div');
divTag.style.backgroundColor = 'gray';


const buttonTag = document.createElement('button');
buttonTag.innerText = "button";
divTag.append(buttonTag);
root.append(divTag);

// 캡처링 때 발생하는 이벤트입니다. root는 렌더링 되는 태그들의 상단에 위치합니다.
root.addEventListener('click', () => alert("캡처링 root"), true);

// div 태그 안에있는 버튼을 클릭 시 버블링 되어 div태그의 이벤트까지 발생합니다.
divTag.addEventListener('click', () => alert("div"));
buttonTag.addEventListener('click', () => alert('button'));