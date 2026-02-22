

What is meant by “Callback” in Node.js?
Ans: In Node.js, a callback is a function passed as an argument to another function, which is executed after an asynchronous operation completes. Since Node.js follows a non-blocking, event-driven architecture, callbacks help handle tasks like file reading, database queries, or API calls without stopping the execution of other code.


How does work non blocking operation in node?
Non-blocking behavior means that the program does not wait for an operation to complete before moving to the next line of code. In Node.js, asynchronous operations run in the background, and the result is handled later using callbacks, promises, or async/await. This improves performance and scalability.