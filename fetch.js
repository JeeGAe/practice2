////////////////////////////////////////////////////////////////
// 의도 추측 : 외부 API를 사용할 수 있는지 알아보고자
// 개념 : fetch를 사용하면 url을 통해 외부와 통신이 가능합니다. 외부 api에서
// 지원하는 데이터를 받아와 필요한 곳에 사용이 가능합니다.

////////////////////////////////////////////////////////////////

async function fetchGoogle() {
  // fetch 함수 첫번째 인자에 요청할 url을 입력하여 사용합니다. 두번째 인자로는 요청시 필요한 옵션을 설정합니다.
  const response = await fetch('https://www.google.com');
  // fetch로 받은 데이터를 사용 할 수 있는 형태로 변환합니다. 보통은 json형태로 오는 경우가 많습니다.
  const text = await response.text();
  return text;
} 

fetchGoogle()
.then(res => console.log(res))
.catch(error => console.log(error));