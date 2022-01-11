const obj1 = {id: 'obj1'};
const obj2 = {id: 'obj2'};
const objs = [obj1, obj2];
const objsCopy = objs.slice();
objsCopy[0].id = 'changed';

console.log(objs);
// -> [ { id: 'changed' }, { id: 'obj2' } ]