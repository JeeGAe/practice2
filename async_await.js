////////////////////////////////////////////////////////////////
// 의도 추측 : async await을 이용하여 비동기적 처리를 할 수 있는지 알아보고자
// 개념 : 함수 앞에 async를 붙이는 것으로 사용할 수 있는데 이 함수가 pormise로 반환되도록 합니다.
// 그럼 promise를 함수를 처리 한것과 마찬가지로 then, catch, finally등을 사용해 
// 후에 처리 할일을 만들수 있습니다.
// await은 async 함수 안에서 사용할 수 있습니다. 시간이 걸리는 promise화된 비동기적 동작을 await으로
// 동작이 완료 될때까지 기다린 후 다음 동작이 될 수 있도록 합니다.

////////////////////////////////////////////////////////////////

// async로 promise를 반환하는 함수를 만들 수 있습니다.
async function asyncFunc(keyword) {
  // async await 문법을 사용할땐 try catch로 에러처리가 가능합니다. 또는 함수 사용한곳에서 catch를 사용해도 됩니다.
  try {
    // await으로 promise 동작을 기다리고 반환값을 받을 수 있습니다. 이 때 다음 명령은 실행되지않고 기다립니다.
    const showingThreeSecond = await new Promise((resolve, reject) => {
      console.log("또 3초뒤에 입력한 값이 보여질 겁니다.");
      setTimeout(() => resolve(keyword), 3000)
    });
    
    console.log("await 끝!");
    return showingThreeSecond;
  } catch (error) {
    console.log(error);
  }
  
}

asyncFunc("🤢").then(result => console.log(result));