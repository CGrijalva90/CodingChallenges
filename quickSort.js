// Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways

const pivot = (arr, start=0, end=arr.length+1) => {
  const swap = (array, i, j) => {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
			console.log(`swapping: ${arr[swapIdx]} for ${arr[i]}`)
      swap(arr,swapIdx,i);
    }
		console.log(arr)
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

