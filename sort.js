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

Array.prototype.mergeSort = function mergeSort() {
  const len = this.length;

  for () {}

  return this;
};
