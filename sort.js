Array.prototype.shuffle = function shuffle() {
  const len = this.length;

  for (let i = len - 1; i > 0; i -= 1) {
    const randomIndex = ~~(Math.random() * (i + 1));
    [this[i], this[randomIndex]] = [this[randomIndex], this[i]];
  }

  return this;
};

Array.generate = function generate(len, pattern) {
  const result = [];

  for (let i = 0; i < len; i += 1) {
    result.push(pattern(i));
  }

  return result;
};

const input = Array.generate(10, (i) => i).shuffle();
console.log(...input);

Array.prototype.bubbleSort = function bubbleSort() {
  const len = this.length;

  for (let round = 0; round < len - 1; round += 1) {
    for (let i = 0; i < len - 1 - round; i += 1) {
      if (this[i] > this[i + 1]) [this[i], this[i + 1]] = [this[i + 1], this[i]];
    }
  }

  return this;
};

Array.prototype.selectionSort = function selectionSort() {
  const len = this.length;

  for (let i = 0; i < len - 1; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < len; j += 1) {
      if (this[minIndex] > this[j]) minIndex = j;
    }

    [this[i], this[minIndex]] = [this[minIndex], this[i]];
  }

  return this;
};

Array.prototype.insertionSort = function insertionSort() {
  const len = this.length;

  for (let i = 1; i < len; i += 1) {
    const takeInhand = this[i];

    let j = 0;

    while (j > 0 && this[i] < this[i - 1]) {
      this[j] = this[j - 1];
      j--;
    }

    this[j] = takeInhand;
  }

  return this;
};

(() => {
  const merge = function merge(leftSubArray, rightSubArray) {
    const result = [];

    while (leftSubArray.length && rightSubArray.length) {
      if (leftSubArray[0] < rightSubArray[0]) {
        result.push(leftSubArray.shift());
      } else {
        result.push(rightSubArray.shift());
      }
    }

    while (leftSubArray.length) result.push(leftSubArray.shift());

    while (rightSubArray.length) result.push(rightSubArray.shift());

    return result;
  };

  Array.prototype.mergeSort = function mergeSort() {
    let copy = [...this];
    const len = this.length;

    if (len > 1) {
      const midIndex = Math.floor(len / 2);
      const leftSubArray = copy.slice(0, midIndex).mergeSort();
      const rightSubArray = copy.slice(midIndex, len).mergeSort();
      copy = merge(leftSubArray, rightSubArray);
    }

    return copy;
  };
})();

(() => {
  const partition = function partition(arr, left, right) {
    const pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        swap(arr, i, index);
        index++;
      }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
  };

  Array.prototype.quickSort = function quickSort(arr, left, right) {
    let partitionIndex;

    if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  };
})();
