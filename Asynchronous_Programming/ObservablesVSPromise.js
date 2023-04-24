import { Observable } from "rxjs";

const obs = new Observable((observer) => {
  console.log("Inside the Observable");
  observer.next("1");
  observer.next("2");

  setTimeout(() => observer.next("3"), 1000);
});

console.log("Before Observable Execution");

obs.subscribe((val) => console.log("Obs emitted => ", val));

const promise = new Promise((resolve, reject) => {
  console.log("Inside the Promise");
  resolve("1");
  resolve("2");
});

console.log("Before calling then method on Promise");

promise.then((val) => console.log("Promise emitted => ", val));

console.log("After calling then method on Promise");
