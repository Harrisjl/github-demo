let myWaitPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Happy Coding");
  }, 3000);
});

myWaitPromise.then(happyCoding => {
  console.log("Happy Coding!");
});

/* You've stored what you pass in resolve into the parameter so just pass that I changed the name from 
   happyCoding to result however happyCoding is fine. 
myWaitPromise.then(result => {
  console.log(result);
});
*/