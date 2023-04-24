async function f() {
  return 1;
}

f().then(alert);

async function f1() {
  return Promise.resolve(1);
}

f1().then(alert);

async function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
  });

  let result = await promise; //wait until promise resolves
  alert(result);
}

f2();

// function f3() {
//     let promise = Promise.resolve(1);
//     let result = await promise; // Syntax Error
// }
