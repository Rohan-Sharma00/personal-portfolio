export type Topic =
  | "Strings"
  | "Arrays"
  | "Objects"
  | "Functions"
  | "Promises";

export interface Problem {
  id: number;
  title: string;
  topic: Topic;
  difficulty: "Easy" | "Medium" | "Hard";
  starterCode: string;
  solutionCode: string;
}

// Array problems
const ArrayProblems: Problem[] = [
  {
    id: 1,
    title: 'Deep Flatten Array',
    topic: 'Arrays',
    difficulty: 'Medium',
    starterCode: `// Flatten a nested array of any depth 
// Requirement: Do not use Array.prototype.flat()
// Input: [1, [2, [3, [4]], 5]] -> Output: [1, 2, 3, 4, 5]

function flatten(arr) {
  // Your code here
}

console.log(flatten([1, [2, [3, [4]], 5]]));`,
    solutionCode: `// Flatten a nested array of any depth 
// Requirement: Do not use Array.prototype.flat()
// Input: [1, [2, [3, [4]], 5]] -> Output: [1, 2, 3, 4, 5]


function flatten(arr) {

const answerArr=[];

for(let element of arr){
    if(Array.isArray(element)){
       answerArr.push( ...flatten(element ) );
    }else{
       answerArr.push(element);
    }
}

return answerArr;
}


console.log(flatten([1, [2, [3, [4]], 5]]));`
  },
  {
    id: 2,
    title: 'Group By Property',
    topic: 'Arrays',
    difficulty: 'Medium',
    starterCode: `// Group an array of objects by a specific key
// Input: [{id: 1, cat: 'A'}, {id: 2, cat: 'B'}, {id: 3, cat: 'A'}], 'cat'
// Output: { A: [{id: 1...}, {id: 3...}], B: [{id: 2...}] }

function groupBy(arr, key) {
  // Your code here
}

const data = [{id: 1, cat: 'A'}, {id: 2, cat: 'B'}, {id: 3, cat: 'A'}];
console.log(groupBy(data, 'cat'));`,
    solutionCode: `// Group an array of objects by a specific key
// Input: [{id: 1, cat: 'A'}, {id: 2, cat: 'B'}, {id: 3, cat: 'A'}], 'cat'
// Output: { A: [{id: 1...}, {id: 3...}], B: [{id: 2...}] }

function groupBy(arr, key) {
  const ansObj={};

  for(let obj of arr){
      const objKey=obj[key];
      if(Object.hasOwn(ansObj,objKey)){
          ansObj[objKey].push(obj);
       }else{
           ansObj[objKey]=[];
           ansObj[objKey].push(obj);
        }
   }

   return ansObj;
}

const data = [{id: 1, cat: 'A'}, {id: 2, cat: 'B'}, {id: 3, cat: 'A'}];
console.log(groupBy(data, 'cat'));`
  },
  {
    id: 3,
    title: 'Unique by Property',
    topic: 'Arrays',
    difficulty: 'Medium',
    starterCode: `// Remove duplicates from an array of objects based on a property key
// Input: [{id: 1}, {id: 2}, {id: 1}], 'id'
// Output: [{id: 1}, {id: 2}]

function uniqueBy(arr, key) {
  // Your code here
}

console.log(uniqueBy([{id: 1}, {id: 2}, {id: 1}], 'id'));`,
    solutionCode: `// Remove duplicates from an array of objects based on a property key
// Input: [{id: 1}, {id: 2}, {id: 1}], 'id'
// Output: [{id: 1}, {id: 2}]

function uniqueBy(arr, key) {
    const uniqueKeys={};
    const ansArr=[];

    for(let obj of arr){
      let currKeyVal=obj[key];
       if(!uniqueKeys[currKeyVal]){
         uniqueKeys[currKeyVal]=true;
         ansArr.push(obj);
       }
    }

    return ansArr;

}

console.log(uniqueBy([{id: 1}, {id: 2}, {id: 1}], 'id'));`
  },
  {
    id: 4,
    title: 'Symmetric Difference',
    topic: 'Arrays',
    difficulty: 'Medium',
    starterCode: `// Find elements that are in either of the arrays, but not in both
// Input: [1, 2, 3], [2, 3, 4] -> Output: [1, 4]

function symmetricDifference(arr1, arr2) {
  // Your code here
}

console.log(symmetricDifference([1, 2, 3], [2, 3, 4]));`,
    solutionCode: `// Find elements that are in either of the arrays, but not in both
// Input: [1, 2, 3], [2, 3, 4] -> Output: [1, 4]

function symmetricDifference(arr1, arr2) {
  const freqObj={};
  const ansArray=[];
  for(let ele of arr1){
    freqObj[ele]=(freqObj[ele] || 0)+1;
  }
   for(let ele of arr2){
    freqObj[ele]=(freqObj[ele] || 0)+1;
  }
  for(let keys in freqObj){
    if(freqObj[keys]==1){
      ansArray.push(keys);
    }
  }
  return ansArray;

}

function symmetricDifferenceOther(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [];

  for (const x of set1) {
    if (!set2.has(x)) result.push(x);
  }

  for (const x of set2) {
    if (!set1.has(x)) result.push(x);
  }

  return result;
}

console.log(symmetricDifference([1, 2, 3], [2, 3, 4]));`
  },
  {
    id: 5,
    title: 'Array Chunking',
    topic: 'Arrays',
    difficulty: 'Easy',
    starterCode: `// Split an array into smaller arrays of a specified size
// Input: [1, 2, 3, 4, 5], 2 -> Output: [[1, 2], [3, 4], [5]]

function chunk(arr, size) {
  // Your code here
}

console.log(chunk([1, 2, 3, 4, 5], 2));`,
    solutionCode: `// Split an array into smaller arrays of a specified size
// Input: [1, 2, 3, 4, 5], 2 -> Output: [[1, 2], [3, 4], [5]]

function chunk(arr, size) {
  const ansArr=[];
  let i=0;

  while(i<arr.length){
    let arrTemp=[];
    let limit=i+size;
      while(i<arr.length && i<limit){
        arrTemp.push(arr[i]);
        i++;
      }
    ansArr.push(arrTemp);
  }

  return ansArr;
}

console.log(chunk([1, 2, 3, 4, 5], 2));`
  },
  {
    id: 6,
    title: 'Move Item (Immutable)',
    topic: 'Arrays',
    difficulty: 'Medium',
    starterCode: `// Move an item from one index to another without mutating the original array
// Input: ['a', 'b', 'c', 'd'], from: 3, to: 1 
// Output: ['a', 'd', 'b', 'c']

function moveItem(arr, fromIndex, toIndex) {
  // Your code here
}

const letters = ['a', 'b', 'c', 'd'];
console.log(moveItem(letters, 3, 1));
console.log("Original is same:", letters); // Should be true`,
    solutionCode: `// Move an item from one index to another without mutating the original array
// Input: ['a', 'b', 'c', 'd'], from: 3, to: 1 
// Output: ['a', 'd', 'b', 'c']

// function moveItem(arr, fromIndex, toIndex) {
//   const ansArr=[];
//   for(let i=0;i<arr.length;i++){
//     if(i==toIndex){
//       ansArr.push(arr[fromIndex]);
     
//     }
//     if(i!=fromIndex){
//      ansArr.push(arr[i]);
//     }
//   }
//   return ansArr;
// }

function moveItem(arr, from, to) {
  const copy = [...arr];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

const letters = ['a', 'b', 'c', 'd'];
console.log(moveItem(letters, 3, 1));
console.log("Original is same:", letters); // Should be true`
  },
  {
    id: 7,
    title: 'Find Gaps in Sequence',
    topic: 'Arrays',
    difficulty: 'Medium',
    starterCode: `// Find missing numbers in a sorted sequence
// Input: [1, 2, 4, 6] -> Output: [3, 5]

function findGaps(arr) {
  // Your code here
}

console.log(findGaps([1, 2, 4, 6]));`,
    solutionCode: `// Find missing numbers in a sorted sequence
// Input: [1, 2, 4, 6] -> Output: [3, 5]

function findGaps(arr) {
  const ansArr=[];
  
  for(let i=0;i<arr.length-1;i++){
     let currEle=arr[i];
     let nextEle=arr[i+1];
     for(let num=currEle+1;num<nextEle;num++){
      ansArr.push(num);
     }
  }
  return ansArr;
}

console.log(findGaps([1, 2, 4, 6]));`
  },
  {
    id: 8,
    title: 'Intersection of Multiple Arrays',
    topic: 'Arrays',
    difficulty: 'Hard',
    starterCode: `// Find the common elements among multiple arrays
// Input: [[1, 2, 3], [2, 3, 4], [3, 4, 5]] -> Output: [3]

function intersection(...arrays) {
  // Your code here
}

console.log(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]));`,
    solutionCode: `// Find the common elements among multiple arrays
// Input: [[1, 2, 3], [2, 3, 4], [3, 4, 5]] -> Output: [3]

function intersection(...arrays) {
  const freqObj={};
  const ansArr=[];
  for(let arr of arrays){
    const unique = new Set(arr);
     for(let ele of unique){
       freqObj[ele]=(freqObj[ele] || 0)+1;
     }
  }
  for(let key in freqObj){
    if(freqObj[key]==arrays.length){
      ansArr.push(Number(key));
    }
  }
  return ansArr;
}

console.log(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]));`
  },
  {
    id: 9,
    title: 'Zip Arrays',
    topic: 'Arrays',
    difficulty: 'Easy',
    starterCode: `// Create an array of grouped elements from two provided arrays
// Input: ['id', 'name'], [1, 'Gemini'] -> Output: [['id', 1], ['name', 'Gemini']]

function zip(arr1, arr2) {
  // Your code here
}

console.log(
  zip(['id', 'name'], [1, 'Gemini'])
); // [['id', 1], ['name', 'Gemini']]


console.log(
  zip(['a', 'b', 'c'], [1, 2])
); // [['a', 1], ['b', 2]]


console.log(
  zip(['a'], [1, 2, 3])
); // [['a', 1]]


console.log(
  zip([], [])
); // []


console.log(
  zip(['a', 'b'], [])
); // []

`,
    solutionCode: `// Create an array of grouped elements from two provided arrays
// Input: ['id', 'name'], [1, 'Gemini'] -> Output: [['id', 1], ['name', 'Gemini']]

function zip(arr1, arr2) {
  if(arr1.length==0 || arr2.length==0){
    return [];
  }
  const limit=Math.min(arr1.length,arr2.length);
  const ansArr=[];

  for(let i=0;i<limit;i++){
    let tempArr=[];
    tempArr.push(arr1[i],arr2[i]);
    ansArr.push(tempArr);
  }
  return ansArr;
}

console.log(
  zip(['id', 'name'], [1, 'Gemini'])
); // [['id', 1], ['name', 'Gemini']]


console.log(
  zip(['a', 'b', 'c'], [1, 2])
); // [['a', 1], ['b', 2]]


console.log(
  zip(['a'], [1, 2, 3])
); // [['a', 1]]


console.log(
  zip([], [])
); // []


console.log(
  zip(['a', 'b'], [])
); // []

`
  },
  {
    id: 10,
    title: 'Range Generator',
    topic: 'Arrays',
    difficulty: 'Easy',
    starterCode: `// Generate an array containing a range of numbers (inclusive)
// Input: 5, 8 -> Output: [5, 6, 7, 8]

function generateRange(start, end) {
  // Your code here
}

console.log(generateRange(5, 8));`,
    solutionCode: `// Generate an array containing a range of numbers (inclusive)
// Input: 5, 8 -> Output: [5, 6, 7, 8]

function generateRange(start, end) {
  const arr=[];
  for(let i=start;i<=end;i++){
    arr.push(i);
  }
  return arr;
}

console.log(generateRange(5, 8));`
  }
];

// string problems

const stringProblems: Problem[] = [
  {
    id: 2,
    title: "Reverse a String",
    topic: "Strings",
    difficulty: "Easy",
    starterCode: `function reverseString(str) {
  // Your code here
}`,
    solutionCode: `function reverseString(str) {
  return str.split("").reverse().join("");
}`,
  },
];

// Object Problems

export const objectProblems: Problem[] = [
  {
    id: 3,
    title: "Group By Property",
    topic: "Objects",
    difficulty: "Medium",
    starterCode: `function groupBy(arr, key) {
  // Your code here
}`,
    solutionCode: `function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    (acc[item[key]] ||= []).push(item);
    return acc;
  }, {});
}`,
  },
];

// Function problems

export const functionProblems: Problem[] = [
  {
    id: 4,
    title: "Debounce Function",
    topic: "Functions",
    difficulty: "Medium",
    starterCode: `function debounce(fn, delay) {
  // Your code here
}`,
    solutionCode: `function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}`,
  },
];


// Promise Problems

export const promiseProblems: Problem[] = [
  {
    id: 5,
    title: "Promise.all Polyfill",
    topic: "Promises",
    difficulty: "Hard",
    starterCode: `function promiseAll(promises) {
  // Your code here
}`,
    solutionCode: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          results[i] = res;
          completed++;
          if (completed === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
}`,
  },
];


export const problems: Problem[] = [
  ...ArrayProblems,
  ...stringProblems,
  ...objectProblems,
  ...functionProblems,
  ...promiseProblems,
];

