const sortedFrequency = (arr, num) => {
  let firstIdx = findFirst(arr, num);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
};

const findFirst = (arr, num, leftIdx = 0, rightIdx = arr.length - 1) => {
  if (rightIdx >= leftIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (
      (middleIdx === 0 || num > arr[middleIdx - 1]) &&
      arr[middleIdx] === num
    ) {
      return middleIdx;
    } else if (num > arr[middleIdx]) {
      return findFirst(arr, num, middleIdx + 1, rightIdx);
    } else {
      return findFirst(arr, num, leftIdx, middleIdx - 1);
    }
  }
  return -1;
};

const findLast = (arr, num, leftIdx = 0, rightIdx = arr.length - 1) => {
  if (rightIdx >= leftIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (
      (middleIdx === arr.length - 1 || num < arr[middleIdx + 1]) &&
      arr[middleIdx] === num
    ) {
      return middleIdx;
    } else if (num < arr[middleIdx]) {
      return findLast(arr, num, leftIdx, middleIdx - 1);
    } else {
      return findLast(arr, num, middleIdx + 1, rightIdx);
    }
  }
  return -1;
};

module.exports = sortedFrequency;
