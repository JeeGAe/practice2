////////////////////////////////////////////////////////////////
// 의도 추측 : 비동기적 처리를 Promise를 통해 할 수 있는지 알아보고자
// 개념 : Promise를 사용하면 어떠한 작업이 완료되었는지 실패하였는지 따라
// 다른 상태가 나오도록 할 수 있습니다. 그때 then, catch, finally를 이용하여
// 작업이 완료 및 실패 했을 경우 처리하는 callback과 같은 내용을 사용할수 있습니다.

////////////////////////////////////////////////////////////////

function promise(keyword) {
  // 프라미스는 시간이 소요되는 비동기적 작업에 사용합니다.
  return new Promise((resolve, reject) => {
    console.log('3초후에 입력한 값이 나옵니다.');
    setTimeout(() => {
      resolve(keyword);
  }, 3000);
    
  })
}


const result = promise("👍");

result
// 비동기적 작업이 완료되면 다음에 해야할 동작을 then을 통해 구현할수 있습니다.
.then(result => console.log(result))
// catch는 에러가 발생했을 경우 처리하는 방법을 구현합니다.
.catch(error => console.log(error))
// finally는 프라미스에서 resolve나 reject 어느 것이 반환되더라도 실행됩니다.
.finally(() => console.log('!!'));
