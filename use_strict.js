////////////////////////////////////////////////////////////////
// 의도 추측 : 이전 버전의 방식과 최신 버전의 차이로 발생하는 문제들을 알고 있는 지를 알아보고자 
// 개념 : 'use strict'를 상단에서 사용하여 모던한 방식의 자바스크립트를 구현하도록 합니다.

////////////////////////////////////////////////////////////////

function nonStrictMode() {
  // var, let, const 를 앞에 사용하여 선언하지 않아도 변수에 넣을 수가 있습니다.
  선언하지않은변수 = "선언하지않는 변수에 문자열을 넣었습니다.";

  console.log(선언하지않은변수);

  // 변경이 되지않는 객체속성 값을 변경하거나 삭제하려고 해도 에러는 발생시키지 않습니다. 하지만 적용이 되지도 않습니다.
  let 얼리기전객체 = {a : 1, b : "문장", c : function () {return ;}}
  let 얼린객체 = Object.freeze(얼리기전객체);

  얼린객체.a = "값을 바꿨습니다.";
  delete 얼린객체.c;
  console.log(얼린객체);
  
  // 일반 함수에서 this가 전역 객체를 참조합니다.
  console.log(this);
}

nonStrictMode();

function useStriceMode() {
  'use strict'

  // 엄격모드 사용 시 하나하나 딴지걸며 에러를 발생시켜줍니다.

  선언하지않은변수 = "선언하지않는 변수에 문자열을 넣었습니다.";

  console.log(선언하지않은변수);

  let 얼리기전객체 = {a : 1, b : "문장", c : function () {return ;}}
  let 얼린객체 = Object.freeze(얼리기전객체);

  얼린객체.a = "값을 바꿨습니다.";
  delete 얼린객체.c;
  console.log(얼린객체);

  // 엄격 모드에서 일반 함수의 this는 undefined 입니다.
  console.log(this);
}

useStriceMode();
