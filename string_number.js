////////////////////////////////////////////////////////////////
// 의도 추측 : 자동형변환이 되는 요건에 대해 알고 있는 지 알아보고자
// 개념 : 숫자와 문자열을 합치게 되면 숫자가 문자열로 변환이 되어 
// 문자열과 문자열의 결합이 되는 형태가 됩니다.

////////////////////////////////////////////////////////////////

function stringNumber() {
  let string = "문자열";
  let number = 1;

  // 문자열과 숫자를 합치면 숫자가 문자열로 강제 변환되어 더해집니다.
  let result = number + number + string;
  console.log(result);

  // 문자열을 숫자로 해도 마찬가지입니다.
  let numString = "12";
  result = numString + number;
  console.log(result);

  // 소수점이 들어가도 마찬가지입니다.
  number = 1.5;
  numString = "2.5";
  result = number + numString;
  console.log(result);
}

stringNumber();