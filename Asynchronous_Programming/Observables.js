import { from, catchError, map, of } from "rxjs";

const observable = from([1, 2, 3, 4]);

const srcObs = from([1, "A", 3, 4]);

srcObs
  .pipe(
    map((val) => {
      let res = val * 2;
      if (Number.isNaN(res)) {
        console.log("Error occurred in Stream");
        throw new Error("Result is NaN");
      }
      return res;
    }),
    catchError((err) => {
      console.log("caught in catch error : ", err);
      return of(0);
    })
  )
  .subscribe({
    next: (val) => console.log("Value emitted ", val),
  });
