// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any diplicates among the arguments passed in.

const areThereDuplicates = (...args) => {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
};

areThereDuplicates(8, 6, 45, 3, 45);