////////////////////////////////////////////////////////////////
// 의도 추측 : null가 undefined의 활용 방식을 알고 있는지 알아보고자
// 개념 : null은 개발자가 의도적인 없음을 나타내고 자 사용하기에 더 적합하고,
// undefined는 의도적으로 사용하기보다는 프로그램이 없음을 나타내기위해 
// 자동적으로 사용되는 경우가 많습니다.

////////////////////////////////////////////////////////////////

function nullAndUndefined() {
  const 널 = null;
  const 언디파인 = undefined;

  // null과 undefined를 숫자형으로 형변환 시 다르게 변환됩니다.
  const 변환널 = Number(널);
  const 변환언디파인 = Number(언디파인);

  console.log(변환널);
  console.log(변환언디파인);
}

nullAndUndefined();