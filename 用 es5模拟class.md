# 1. 回顾 ES6 类

JavaScript 在 es6 时新增了 class 语法结构。class 语法结构便于我们创建简单的“类”。

```javascript
class Article {
  constructor(title, tag) {
    this.title = title;
    this.tag = tag;
  }

  work(){
    console.log('work');
  }

  static generate(len) {
    const articles = [];

    for(let i = 0; i < len; i++){
      articles.push(new Article('', ''));
    }

    return articles;
  }
}
```

类中，可以定义构造函数，原型方法，和静态方法。

# 2. 寄生式组合

但是实际上，class 语法结构是对寄生式组合的一个封装。

```javascript
var inherits = function (subtype, supertype){
  subtype.prototype = Object.create(supertype.prototype, {
    'constuctor': {
      configurable: true,
      writable: true,
      value: subtype,
    }
  });
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function(){
  console.log(this.name, this.age);
};

function Student(name, age, grade) {
  Person.apply(this, arguments);
  this.grade = grade;
}

inherits(Student, Person);

Student.prototype.study = function () {
  console.log('study');
};
```

这个例子中，使用 Object.create() 寄生式继承，并盗用构造函数。

# 3. 封装

最后一步，便是使用闭包和立即调用函数进行封装。

```javascript

```