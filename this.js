////////////////////////////////////////////////////////////////
// 의도 추측 : this를 어떤 상황에 무엇을 의미하고 활용할 수 있는지 알아보고자
// 개념 : 자바스크립트의 this는 객체를 카리킵니다. 함수전역이나 일반 전역에서는 
// 글로벌 객체 윈도우 객체를 가리키게되고 객체안에서는 객체 자신또는 다른 객체를
// 생성자 함수에서는 생성자 함수나 인스턴스화 된 객체를 가리키기도 합니다.

////////////////////////////////////////////////////////////////

// this 위치 별 this의 컨텍스트
console.dir(this);

function whatIsThis() { 
  console.dir(this);
}

whatIsThis();

function strictWhatIsThis() {
  'use strict'
  console.dir(this)
}

strictWhatIsThis();

function NewThis(name) {
  this.name = name
}

NewThis.prototype.getThis = function () {
  console.dir(this);
}

const newthis1 = new NewThis("지훈");
newthis1.getThis();

const newthis2 = new NewThis("지훈아님");
newthis2.getThis();

const objectThis = {
  getThis() {
    console.dir(this)
  }
}

objectThis.getThis();