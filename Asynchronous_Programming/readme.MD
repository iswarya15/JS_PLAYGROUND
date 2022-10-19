## How browser understands JS?

JS → JS Engine ( v8, SpiderMonkey, Chakra) → Computer (Machine code). There are many JS Engines created by the `browser Vendors`.

### JS Execution

JS Engine consists of 2 major parts:

- **Memory Heap** → assigns memory to `variables/functions`. All functions and variables stored as **key-value pairs** in Variable Environment.

- **Call stack** : Call stack maintains the **order of executions of execution context**. Anytime a new EC is created, it is pushed on _top of existing EC_. Once the execution is complete, the EC is popped out of Call stack. At the `bottom` we have the `Global Execution Context(GLE)` which will be removed once the program execution is complete.

## Single threaded Language

- Javascript is a `single threaded language`, which means it has a **Single Call Stack**; only one thing can run at a time. Other languages have `multiple call stacks`. They are called the `Multithread languages`

- Running code on single threaded languages can be simpler since we don't need to deal with complicated scenarios like `Deadlocks`.

### Memory Leak

Memory leak happens when a `variable/ object` was _used in the past and is not removed_ when it is **no longer needed**.
