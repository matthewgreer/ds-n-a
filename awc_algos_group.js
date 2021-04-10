// two-sum
// given an array of integers and a target number, return a pair of
// indices of two numbers that add up to the target number

function twoSumNested(numArray, targetSum) {
  for (i = 0; i < numArray.length - 1; i++) {
    for (j = i + 1; j < numArray.length; j++) {
      if (numArray[i] + numArray[j] === targetSum) {
         return [i, j];
      }
    }
  }
  return `ANSWER: no pairs sum to target`;
}

function twoSumPrevSeen(array, target) {
  const prevSeen = new Map();
  prevSeen.set('prevSeen (difference =>', 'index):')
  let i = 0;
  // console.log(`+\n=====================\n+`);
  while( i < array.length) {
    // console.log(`array: ${array}, target: ${target}`);
    // console.log(`i: ${i}`);
    // console.log(`array[i]: ${array[i]}`);
    let difference = target - array[i];
    // console.log(`difference (${target} - ${array[i]}): = ${difference}`);    
    // console.log(printMap(prevSeen));
    // console.log(`prevSeen has ${difference}?: ${prevSeen.has(difference)}`)
    if (prevSeen.has(difference)) {
      let addendIndex = prevSeen.get(difference);
      // console.log(`addendIndex: ${addendIndex}`)
      return `ANSWER: ${[addendIndex, i]}`
    } else {
      // console.log(`increment i & add {${array[i]}: ${i}} to prevSeen`)
    }
    prevSeen.set(array[i], i);
    // console.log(printMap(prevSeen));
    i++
    // console.log('---------------------')
  }
  return `ANSWER: no pairs sum to target`;
}

function printMap(map) {
  // console.log("- - - - - - - - - - - - - - - - - - - - - -");
  let iterator = map[Symbol.iterator]();
  for (const element of iterator) {
    console.log(element);
  }
  // return "- - - - - - - - - - - - - - - - - - - - - -";
}


// function twoSumPointers(array, target) {
//   array.sort((a,b) => a - b);
// 	let left = 0;
// 	let right = array.length - 1;
// 	while (left < right) {
// 		if (array[left] + array[right] === target) {
// 			return [left, right];
// 		} else if (array[left] + array[right] < target) {
// 			left++
// 		} else {
// 			right--
// 		}
// 	}
// 	return [];
// }



console.log(twoSumNested([6, 5, 3, 4, 1, 2], 7));  // => [2, 3]
console.log(twoSumNested([12, 6, 3, 2, 9, 4, 7, 1], 13));
console.log(twoSumNested([2, 5, 2, 5, 1], 8));
console.log(twoSumNested([]));

// console.log(twoSumPointers([6, 5, 3, 4, 1, 2], 7));  // => [2, 3]
// console.log(twoSumPointers([12, 6, 3, 2, 9, 4, 7, 1], 13));
// console.log(twoSumPointers([2, 5, 2, 5, 1], 8));
// console.log(twoSumPointers([]));

console.log(twoSumPrevSeen([6, 5, 3, 4, 1, 2], 7));  // => [2, 3]
console.log(twoSumPrevSeen([12, 6, 3, 2, 9, 4, 7, 1], 13));
console.log(twoSumPrevSeen([2, 5, 2, 5, 1], 8));
console.log(twoSumPrevSeen([]));