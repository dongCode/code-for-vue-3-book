// weakmap 基本用法

const weak = new WeakMap();

// 只能使用对象作为key
const obj = {};
weak.set(obj, 1);

// 当obj不被其他对象引用时，该对象可以被回收
// console.log(weak.get(obj));


// map 与 weakmap区别

const weak2 = new WeakMap();
const map = new Map();


(() => {
    const obj = {};
    const obj2 = {};
    weak2.set(obj, 1);
    map.set(obj2, 2);
    console.log(weak2.get(obj));
    console.log(map.get(obj2));
})()

// 仍然保存在内存中
console.log(map.size, '1111');