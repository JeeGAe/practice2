////////////////////////////////////////////////////////////////
// 의도 추측 : 상속을 함으로써 어떤 유리한 점이 있는지 알아보고자
// 개념 : 상속을 하여 가장 유리한 점은 어떤 공통의 기능이나 데이터를 여러곳에
// 만들 때 중복하여 해주지 않아도 된다는 점입니다. 공통부분은 부모쪽에 두고
// 부모를 상속받게 하면 자식쪽에서 부모쪽의 프로퍼티를 사용 할 수 있게됩니다.

////////////////////////////////////////////////////////////////

// 챔피언의 공통특성 생성자 함수를 정의합니다.
function Champion () {
  this.move = function() {
    console.log("이동합니다.");
  }
  this.attack = function() {
    console.log("공격합니다.");
  }
};
// 이즈리얼에 스킬을 사용 수 있도록 정의합니다.
function Ezreal () {
  this.skill = function() {
    console.log("신비로운화살을 사용합니다.");
  }
}
// 챔피언 생성자를 이즈리얼 프로토타입으로 상속받도록 합니다.
Ezreal.prototype = new Champion();

function Yasuo () {
  this.skill = function() {
    console.log("하세기를 사용합니다.");
  }
}
// 챔피언 생성자를 야스오 프로토타입으로 상속받도록 합니다.
Yasuo.prototype = new Champion();

const ezreal = new Ezreal();
const yasuo = new Yasuo();
// 챔피언의 메소드를 모두 가지고 있고 각가의 스킬을 사용합니다.
ezreal.skill();
ezreal.attack();
ezreal.move();
yasuo.skill();
yasuo.attack();
yasuo.move();


// const champion = {
//   attack() { console.log("공격합니다.") },
//   move() { console.log("움직입니다.") }
// };

// const ezreal = {
//   skill() { console.log("스킬을 사용합니다.")}
// }

// ezreal.__proto__ = champion