class List {
  constructor() {
    this.cur = 0;
    this.size = 0;
  }

  moveTo(n) {
    if (n < this.size && n >= 0) {
      this.cur = n;
    }

    return this;
  }

  next() {
    this.moveTo(this.cur + 1);
    return this;
  }

  pre() {
    this.moveTo(this.cur - 1);
    return this;
  }

  front() {
    this.moveTo(0);
    return this;
  }

  end() {
    this.moveTo(this.size - 1);
    return this;
  }

  getCurEle() {
    return this[this.cur];
  }

  insert(eleToInsert, after) {
    const index = Object.values(this).findIndex((ele) => Object.is(ele, after));

    for (let i = this.size - 1; i >= index + 1; i--) {
      this[i + 1] = this[i];
    }

    this[index + 1] = eleToInsert;

    this.size++;

    return this;
  }

  append(ele) {
    this[this.size] = ele;
    this.size++;
    return this;
  }

  remove(eleToRemove) {
    const index = Object.values(this).findIndex((ele) =>
      Object.is(ele, eleToRemove),
    );

    for (let i = index; i < this.size - 1; i++) {
      this[i] = this[i + 1];
    }

    delete this[this.size - 1];
    this.size--;

    if (this.cur > this.size - 1) {
      this.cur = this.size - 1;
    }

    return this;
  }

  clear() {
    for (let i = 0; i < this.size; i++) {
      delete this[i];
    }

    this.size = 0;
    this.cur = 0;

    return this;
  }
}

const list = new List();

list.append('apple').append('orange').append('pear');
console.log(list);
// -> List { '0': 'apple', '1': 'orange', '2': 'pear', cur: 0, size: 3 }

list.insert('strawberry', 'apple').insert('watermelon', 'pear');
console.log(list);
/* List {
  '0': 'apple',
  '1': 'strawberry',
  '2': 'orange',
  '3': 'pear',
  '4': 'watermelon',
  cur: 0,
  size: 5
} */

console.log(list.end().pre().front().next().moveTo(0).getCurEle());
// -> 'apple'

list.end();

list.remove('watermelon');
console.log(list);