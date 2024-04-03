////////////////////////////////////////////////////////////////
// 의도 추측 : 객체의 기본적 사용법을 알고 있는지 알아보고자
// 개념 : 객체를 속성을 추가 할때 객체에 .이나 []으로 키 값을 주고 값을 할당해 주면됩니다.
// 삭제는 여러 방법이 있겠지만 delete를 사용해도 속성에서 제거 할 수 있습니다.

////////////////////////////////////////////////////////////////

function objectAddDelete() {
  const newObject = { a : 'a의 값', b : 'b의 값', c : 'c의 값'};
  // delete를 사용하면 객체의 속성을 제거 할 수 있습니다.
  delete newObject.a;

  console.log(newObject);
  // 객체에 . 이나 []으로 접근하여 새로운 key 값을 주면 새로운 속성을 생성할수 있습니다.
  newObject.d = "d의 값";
  console.log(newObject);
  newObject["e"] = "e의 값";
  console.log(newObject);
}

objectAddDelete();
