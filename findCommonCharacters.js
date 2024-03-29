// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

var commonChars = function(A) {
  if(A.length===1){
    return A[0].split('');
  }
  let lens = A.length;
  let res = [];
  for(let j of A[0]){
    let i;
    for(i = 1; i < lens; i++){
      if(!A[i].includes(j)){
        break;
      }else{
        A[i] = A[i].replace(j,'');
      }
    }
    if(i === lens){
      res.push(j);
    }
  }
  return res;
};

commonChars(["bella","label","roller"])