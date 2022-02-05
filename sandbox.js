class MySet extends Set {
  uninon(set) {
    if (set instanceof Set) {
      return new Set([...this, ...set]);
    }
  }

  intersect(set) {}

  differ(set) {}

  isSubsetOf() {}
}

const set = new MySet().add(1).add(2).add(3);

const set2 = new MySet().add(1).add(4).add(7);

console.log(set.uninon(set2));
