const arr = [1, 2, 3]
const arr2 = [3, 2, 1]

function isSorted (arr) {
  return arr.slice(1).every((item, i) => arr[i] <= item)
}

console.log(isSorted(arr), isSorted(arr2))
