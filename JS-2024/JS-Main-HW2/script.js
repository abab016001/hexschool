/***   作業 1 填答區開始   **/
// 範例填答：解答是 
//true
//false
//false

let a = 4;
let b = 5;
// 解答是
// true
// true
// true
let c = 5;
let d = 6;
// 解答是
// false
// true
let e = 8;
let f = 5;
// 解答是
// false
// true
// false

/***   作業 1 填答區結束   **/





/***   作業 2 填答區開始   **/

// 範例回覆：解答是 
//true
//false
//false

let g = 8;
let h = "8";
// 解答是
// false
// true
// true

let i = "9";
let j = "9";
// 解答是
// true
// true
// false

var k = 2;
var l = "5";
// 解答是
// true
/*
    運算子為*，強制轉型為number型別進行運算
    所以(k*l) = (k*l.trim()) = k*Number(l) = 2*5 = 10 >= 5 = true
*/
/***   作業 2 填答區結束   **/




/***   作業 3 填答區開始   **/

// 範例回覆：解答是 
// m 為：
// m 為：
// 原因是

let m = 1;
if (2 > 1) {

    m = 3
}

let n = 5;
if (true) {

    n += 10
}

// 解答是
// m 為：3
// m 為：15
// 原因是
/*
    1.  m = 1
        當 2 > 1 == true 成立時，m = 3
        所以 m = 3
    2.  n = 5
        當 true == true 成立時, n += 10
        所以 n = n + 10, n = 5 + 10 = 15
*/
/***   作業 3 填答區結束   **/




/***   作業 4 填答區開始   **/
// 請將作業四截圖程式碼都寫在這，並刻意練習
let childHeight = 113;
let restaurantChildHeight = 120;
let bill = 600;
let childBill = 0;
if (childHeight > restaurantChildHeight) {
    childBill = 300;
} else {
    childBill = 0;
}
bill += childBill;

console.log(`他們總共支付了${bill}元`);
/***   作業 4 填答區結束   **/





/***   作業 5 填答區開始   **/
// 請將作業五截圖程式碼都寫過來，並附上您的答案
let badge = 3;
let awardBadge = 0;
const expectedAppleCnt = 5;
let actualAppleCnt = 4;
if (actualAppleCnt == expectedAppleCnt) {
    awardBadge = 3;
} else {
    awardBadge = 1;
}
badge += awardBadge;
console.log(`小華一共得了${badge}個徽章`);
/***   作業 5 填答區結束   **/



/***   作業 6 填答區開始   **/
// 範例回覆：解答是
// false
// false
// false

//是否有折扣資格
// true 或 false
// 原因是

let o = 200;
let p = 300;
// 解答是
// true
// false
// true

let hamPrice = 50;
let hamNum = 20;
let isSale = 3000 <= hamPrice * hamNum || hamNum > 10;
//是否有折扣資格
// true
// 原因是
/*
    情況1. 3000<=hamPrice*hamNum = 3000<=50*20 = 3000<=100 = false(不成立)
    情況2. hamNum>10 = 20>10 = true(成立)
    isSale  = 當「情況1」或「情況2」為成立 
            = 情況1(不成立)而情況2(成立)，所以isSale = true(成立)
*/



/***   作業 6 填答區結束   **/



/***   作業 7 填答區開始   **/
// 請將作業七截圖程式碼都寫過來，並附上您的答案
let weight = 60;
if (weight >= 40 && weight < 60) {
    console.log("過輕");
} else if (weight >= 60 && weight < 80) {
    console.log("正常");
} else if (weight >= 80) {
    console.log("過重");
}
/***   作業 7 填答區結束   **/






/***   作業 8 填答區開始   **/
// 請將作業八截圖程式碼都寫過來，並附上您的答案
let g1ftNum = 290;/*贈品數量*/
let g1ftPriceRule = 399;/*贈品消賣門檻*/
let BobPrtce = 500;/*Bob消費金顏*/
let BobIsVtp = false;/*Bob是否為Vip*/
//修改開始處
if (BobPrtce >= g1ftPriceRule || BobIsVtp) {
    console.log("客戶您好，您有符合贈品資格");
} else {
    console.log("客戶您好，您沒有符合贈品資格");
}
//修改結束處
console.log(`贈品還剩下${g1ftNum}個`);


/***   作業 8 填答區結束   **/


/***   作業 9 填答區開始   **/
// 請將作業九截圖程式碼都寫過來，並附上您的答案
let mingMoney = 870000;/*小明全年個人所得*/
let mingBill = 5000;/*小明稅收帳單,並已加入條件一基本費5,000元*/
//程式碼填寫開始處
let tax = 0;
if (mingMoney < 540000) {
    tax = mingMoney * 30 * 0.01;
} else if (mingMoney > 540000 && mingMoney < 1000000) {
    tax = mingMoney * 50 * 0.01;
} else if (mingMoney > 1000000) {
    tax = mingMoney * 80 * 0.01;
}
mingBill += tax;
//程式碼填寫結束處

console.log(`小明總共需支付$(mingBill}帳單`);
/***   作業 9 填答區結束   **/



/***   作業 10 填答區開始   **/
let playerA = '剪刀';
let playerB = '剪刀';

if (playerA === '剪刀' && playerB === '剪刀') {
    console.log('平手');
}

if (playerA === '剪刀') {
    if (playerB === '剪刀') {
        console.log('平手');
    } else if (playerB === '石頭') {
        console.log('playerA輸');
    } else {
        console.log('playerA贏');
    }
}

if (playerA === '石頭') {
    if (playerB === '剪刀') {
        console.log('playerA贏');
    } else if (playerB === '石頭') {
        console.log('平手');
    } else {
        console.log('playerA輸');
    }
}

if (playerA === '布') {
    if (playerB === '剪刀') {
        console.log('playerA輸');
    } else if (playerB === '石頭') {
        console.log('playerA贏');
    } else {
        console.log('平手');
    }
}

if (playerB === '剪刀') {
    if (playerA === '剪刀') {
        console.log('平手');
    } else if (playerA === '石頭') {
        console.log('playerB輸');
    } else {
        console.log('playerB贏');
    }
}

if (playerB === '石頭') {
    if (playerA === '剪刀') {
        console.log('playerB贏');
    } else if (playerA === '石頭') {
        console.log('平手');
    } else {
        console.log('playerB輸');
    }
}

if (playerB === '布') {
    if (playerA === '剪刀') {
        console.log('playerB輸');
    } else if (playerA === '石頭') {
        console.log('playerB贏');
    } else {
        console.log('平手');
    }
}
/***   作業 10 填答區結束   **/