////////////////////////////////////////////////////////////////
// 의도 추측 : 클래스와 생성자 함수를 사용할수 있고 사용하는 방법의 차이를 알고 있는지 알아보고자
// 개념 : 클래스와 생성자 함수의 차이는 일단 만드는 방법과 상속등 문법에서는 많은 차이가
// 있습니다. 하지만 이를 활용하는 법과 의도하는 바는 거의 비슷하다고 볼수 있습니다.
// 각각은 개발자가 익숙한 것을 이용할 경우, class가 호환이 안되는 경우에는 
// 필요에 따라 사용되어 질 수 있습니다. 메모리나 성능의 차이도 있다고 합니다.

////////////////////////////////////////////////////////////////

// class에서의 상속 방법입니다.
class AttackUnit {
  attack() {
    console.log("공격합니다.");
  }
}

class MagicUnit extends AttackUnit {
  skill() {
    console.log("마법공격을 합니다.");
  }
}

class FlyUnit extends AttackUnit {
  constructor() {
    super();
    this.isFly = false;
  }

  fly() {
    this.isFly = true;
    console.log("비행합니다.");
  }

  attack() {
    if(this.isFly) {
      console.log("공중공격합니다.");
      return;
    }
    console.log("공격합니다.");
  }
}

const magicUnit1 = new MagicUnit();
const flyUnit1 = new FlyUnit();

magicUnit1.attack();
magicUnit1.skill();

flyUnit1.attack();
flyUnit1.fly();
flyUnit1.attack();

// 생성자 함수에서의 상속 방법입니다.
function SupportUnit() {
  this.support = function() {
    console.log("아군을 지원합니다.");
  }
}

function HealUnit() {
  this.heal = function() {
    console.log("아군을 회복시킵니다.");
  }
}

HealUnit.prototype = new SupportUnit();

function BuffUnit() {
  this.isBuff = false;

  this.buff = function() {
    this.isBuff = true;
    console.log("아군능력을 향상시킵니다.");
  }

  this.support = function() {
    if(this.isBuff) {
      console.log("버프중에 다른 유닛을 지원불가합니다.");
      return ;
    }

    console.log("아군을 지원합니다.");
  }
}

BuffUnit.prototype = new SupportUnit();

const healUnit1 = new HealUnit();
const buffUnit1 = new BuffUnit();

healUnit1.support();
healUnit1.heal();

buffUnit1.support();
buffUnit1.buff();
buffUnit1.support();