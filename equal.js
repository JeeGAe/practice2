////////////////////////////////////////////////////////////////
// 의도 추측 : ==을 사용하지 않는 이유를 명확히 알고 있는지 알아보고자
// 개념 : ==은 ===는과 다르게 자료형과 같은 부분을 완벽히 비교하지는 않습니다.
// 그래서 의도치 않는 결과가 나오게 되는데 숫자 1과 문자열 "1"을 비교시 
// 문자열을 숫자형으로 바꾸어 비교하여 같게되는 경우가 있습니다.
// 그래서 자료형까지 비교해주는 ===을 사용하는게 좋습니다.

////////////////////////////////////////////////////////////////

function equal() {
  const stringOne = "1";
  const numberOne = 1;

  // == 연산자를 사용하는 경우 문자열과 숫자를 비교시 문자열을 숫자로 형변환하여 비교합니다.
  console.log(stringOne == numberOne);

  // === 연산자는 형변환을 하지않고 엄격한 비교를 합니다.
  console.log(stringOne === numberOne);

  // 0 과 ''은 false와 비교시 == 떄와 === 가 차이가 있습니다.
  // == 사용시 true가 나옵니다.
  console.log(0 == '');
  console.log(0 == false);
  console.log('' == false);

  // === 사용시 false가 나옵니다.
  console.log(0 === '');
  console.log(0 === false);
  console.log('' === false);

  // null과 undefined도 == 때와 === 가 차이가 있습니다.
  // == true가 나옵니다.
  console.log(null == undefined);

  // === false가 나옵니다.
  console.log(null === undefined);
}

equal();