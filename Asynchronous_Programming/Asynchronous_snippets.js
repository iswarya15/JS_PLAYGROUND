console.log("Start");

function importantAction(username, callbackFun) {
  setTimeout(() => callbackFun("Subscribe to " + username), 1000);
}

const message = importantAction("JavaScript", (val) => console.log(val));

console.log("Finish");
