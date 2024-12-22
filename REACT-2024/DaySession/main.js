/* Day 1 - 變數命名、Bootstrap OOCSS 運用
條件：

宣告下方變數、函式，變數請給予值
變數名稱請用小駝峰的方式定義，並以非動詞作為開頭
函式請用動詞作為開頭

變數:
1. 我的 Discord 名稱
2. 餐廳數量 
3. 課程 id
4. 畢業日期
5. 練習時間

函式:
1. 取得產品資料
2. 渲染圖表
3. 篩選購物車資料
4. 排序註冊日期
5. 刪除訂單
*/

let d1_myDiscordNm = "";
let d1_restaurantCnt = 0;
let d1_classId = "";
let d1_graduateDate = "";
let d1_practiseTime = "";

let d1_getProduceData = () => { };
let d1_renderChart = () => { };
let d1_filterCartData = () => { };
let d1_sortRegisterDate = () => { };
let d1_deleteOrder = () => { };

/** Day 2 - 物件取值、Bootstrap 表單 1
 * 點記法（Dot notation）
 * let obj = {
    a: 'value A'
    };
    obj.$b = 'value B';  // 在物件 obj 新增一個帶有特殊符號的屬性 $b，值為 'value B'。
    obj.a = 'value edit'; // 將物件 obj 屬性 a 的值修改為 'value edit'。
    console.log(obj.a); // 取得物件 obj 屬性 a 的值
    console.log(obj.$b); // 取得物件 obj 屬性 $b 的值
 * 括弧記法（Bracket notation）  
 * let obj = {
    a: 'value A'
    };
    obj['-- data'] = '雨量資料'; 
    obj['PM2.5'] = 25;
    obj['1b'] = '1b';
    console.log(obj['-- data']) // 結果為 '雨量資料'
    console.log(obj['PM2.5']) // 結果為 25
    console.log(obj['1b']) // 結果為 '1b'
    // 也可以代入變數
    let a = 'a';
    console.log(obj[a]); // 結果為 'value A'
 */

let c = ' 這是中文字';
let arr = {
    a: 'a',
    1: 'b',
    ' 這是中文字': 'c',
    'b': 'd',
    '--some data': 'e'
}

console.log(arr["1"]);  // 請取得結果為 'b' 的值
console.log(arr[c]);  // 請取得結果為 'c' 的值，必須使用變數
console.log(arr.b);  // 請取得結果為 'd' 的值，必須使用點記號
console.log(arr["--some data"]);  // 請取得結果為 'e' 的值

/** Day 3 - 物件觀念、Bootstrap 表單 2
 * Object.keys(), Object.values() 介紹
 * 。Object.keys(json):array 可以取得指定物件的所有 key 值，並回傳一個陣列。
 * 。Object.values(json):array 可以取得指定物件的所有 value 值，並回傳一個陣列。
 * ex.
 * const object1 = {
  a: "字串",
  b: 42,
  c: false
};
console.log(Object.keys(object1)); // 結果: ["a", "b", "c"]
console.log(Object.values(object1)); // 結果: ["字串", 42, false]
 */

/** 題目
 *  建立一個陣列，其中包含所有的屬性名稱（需使用 Object.keys）。
    建立一個陣列，其中包含所有的屬性值（需使用 Object.values）。
    承接第 1 題，透過 forEach、使用 console.log 輸出陣列的所有屬性名稱。
    承接第 2 題，透過 for 迴圈、使用 console.log 輸出陣列的所有屬性值。
 */

let obj = {
    a: 'a',
    1: 'b',
    '這是中文字': 'c',
    'b': 'd',
    '--some data': 'e'
}
let objKeyArray = Object.keys(obj);
let objValueArray = Object.values(obj);
objKeyArray.forEach(key => { console.log(key) });
objValueArray.forEach(val => { console.log(val) });

/** Day 4 - 陣列操作 1、Bootstrap font-size
 */

function greeting(arr) {
    console.log('Hello ' + arr.name);
}
// callback 函式
function processUserInput(callback, arr) {
    callback(arr);
}

let arr2 = { name: "Jordan" };
// 在 callback 函式中調用 greeting 函式，並把 arr 也一併代入
processUserInput(greeting, arr);

let crowdAge = [
    {      name: 'Rick',      age: 17    },
    {      name: 'Jane',      age: 25    },
    {      name: 'Jordan',      age: 19    },
    {      name: 'Jack',      age: 7    },
    {      name: 'Reol',      age: 27    }
  ];
  
  // callback 函式
  function ageFilterCB(cb, arr) {
    return cb(arr);
  }
  
  function ageFilter(arr) {
    /* 只能在此插入程式碼 */
    return arr.filter(item=> item.age > 18);
  }
  
  let filterResult = [];
  filterResult = ageFilterCB(ageFilter, crowdAge);
  console.log(filterResult); /* 為陣列，內容包含屬性 age > 18 的 crowdAge 元素 */