const countZeroes = (arr) => {
  let firstZero = findFirst(arr);
  if (firstZero === -1) return 0;

  return arr.length - firstZero;
};

const findFirst = (arr, leftIdx = 0, rightIdx = arr.length - 1) => {
  if (rightIdx >= leftIdx) {
    let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
    if ((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0) {
      return middleIdx;
    } else if (arr[middleIdx] === 1) {
      return findFirst(arr, middleIdx + 1, rightIdx);
    }
    return findFirst(arr, leftIdx, middleIdx - 1);
  }
  return -1;
};

module.exports = countZeroes;
