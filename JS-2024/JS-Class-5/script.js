// parameters

const split__________________________ = function() {console.log("-----------------")};
// 參數
function eatFood(a, b) {
    console.log(a);
    console.log(b);
}

eatFood();
split__________________________();
eatFood('apple');

split__________________________();
// 加入預設值
function eatFood2(a = 'apple', b = 'banana') {
    eatFood(a,b);
}

eatFood2();

split__________________________();
// 加入預設值2
function eatFood3(a, b) {
    a = a || 'apple';
    b = b || 'banana';
    eatFood(a,b);
}

eatFood3();

split__________________________();
// arguments [Array-like]
function eatFood4(a, b) {
    eatFood(arguments);
}

eatFood4('apple', 'banana');

split__________________________();
// My Array-like
let obj = {
    "0": 'a0',
    "1": 'a1',
    "2": 'a3',
    'length': 3,
    'push': Array.prototype.push
};

obj.push('d');

console.log(obj);

split__________________________();
let obj2 = {
    'push': Array.prototype.push
};

obj2.push('apple');
console.log(obj2);

split__________________________();
// arguments [Array-like]
function agmsTEST() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments["0"]);
    console.log(arguments.callee);
    //console.log(arguments.forEach());
    arguments.forEach = Array.prototype.forEach;
    arguments.forEach((item, index) => {arguments[index] += "(空白)"});
    arguments.forEach(item => console.log(item));
    console.log(arguments.forEach);
    arguments.push = Array.prototype.push;
    console.log(arguments.push('d'));
    arguments.forEach((item, index) => {item[index] += "(空白)"});
    arguments.forEach(item => console.log(item));
}

agmsTEST('a', 'b', 'c');

split__________________________();
// forEachTEST
function forEachTEST() {
    let ary = ['0','1','2','3','4'];
    console.log(ary.forEach);
    ary.forEach((index) => {ary[index] += "(空白_forEachTEST)"});
    console.log(ary);
    let ary2 = [{'cd':'0', 'nm':'TEST0'},{'cd':'1', 'nm':'TEST1'}];
    ary2.forEach((item) => item.cd += "(空白)");
    console.log(ary2);

    let ary3 = ['0','1','2','3','4'];
    let nAry3 = ary3.map(item=> item+="空白333");
    console.log(nAry3);
}

forEachTEST();

split__________________________();
// someTEST
function someTEST() {
    let nums = [0,1233,50,33,21];
    console.log(nums.some(value => value > 1000));
}

someTEST();

split__________________________();
// 一般 function
let addOne = function(n) {
    return n + 1;
};
console.log(addOne(1));

// 箭頭 function
let addTwo = (n) => {
    return n + 2;
};
console.log(addTwo(1));

// 省略 return
let addThree = (n) => n + 3;
console.log(addThree(1));

split__________________________();
// this
const obj3 = {"num": 100};
window.num = 2020;
const add = function (a, b, c) {
    return this.num + a + b + c;
};

const resultCall = add.call(obj, 1, 2, 3);
console.log(resultCall);

split__________________________();
// test
let addFour = (a, b) => a + b + 4;
console.log(addFour(1,2));

split__________________________();
let theAdd = (a, b) => a + b;
let theSub = (a, b) => a - b;
let theMult = (a, b) => a * b;

let operation = [theAdd, theSub, theMult];
operation.forEach(func => console.log(func(1,2)));

split__________________________();

let data = [3, 30, 100];
data.forEach((item, index, array) => console.log(item, index, array));