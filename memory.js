// object 변수에 객체를 참조하도록 하였습니다.
let object = { name : "지훈", age : 30 };
// object 변수를 null로 만들어서 이전에 참조하던 객체를 참조하지 않도록 했습니다. 결국 객체는 아무도 참조하지 않게되어 가비지 컬렉터가 동작하여 메모리에서 제거 됩니다.
object = null;

// 이번엔 두 변수가 하나의 객체를 참조하고 있습니다.
let newObject1 = {name : "지훈", age : 30 };
let newObject2 = newObject1;
// 하나의 변수에서 더이상 객체를 참조하지 않더라도 다른 하나가 참조하고 있으므로 가비지 컬렉터가 작동되더라도 메모리에서 살아남았습니다.
newObject1 = null;
