/***   作業 1 填答區開始   **/
const janeOld = 14;
const janePhoneNumber = "0955713484";
const isWakeUp = false;
console.log(janeOld, janePhoneNumber, isWakeUp);
/***   作業 1 填答區結束   **/

/***   作業 2 填答區開始   **/
const steakPrice = 50;
const fishSteakPrice = 30;
const ricePrice = 10;
let walletTotal = 200;
/***   作業 2 填答區結束   **/

/***   作業 3 填答區開始   **/
let tmp_cost = 0;
let cost = (ricePrice*2) + (steakPrice);
let fishSteakCount = 0;
while (1 == 1) {
    tmp_cost = cost + (fishSteakPrice*fishSteakCount);
    if (tmp_cost >= walletTotal) {
        fishSteakCount--;
        break;
    } else {
        fishSteakCount++;
    }
}
cost += (fishSteakPrice*fishSteakCount);
console.log(`小明買完飯了，他一共剩下${walletTotal-cost}元`)
/***   作業 3 填答區結束   **/

/***   作業 4 填答區開始   **/
let currentLight = "red";
let people = 10;
let secondes = 35;
let cloud = 3;
let sun = 1;
/***   作業 4 填答區結束   **/

/***   作業 5 填答區開始   **/
let img = "jQuery.jpg";
let title = "【最終試煉】使用jQuery打造互動性網頁動畫效果";
let remark = "jQuery課程的最終作業";
let successCnt = "62";
let spendTime_hour = 9;
let spendTime_day = 16;
let score = 50;
/***   作業 5 填答區結束   **/



/***   作業 6 填答區開始   **/
let a = 1;//範例﹕宣告了一個a的變數，並賦予了一個1的數字型別
let b = 0;// 宣告了一個b的變數，並賦予了一個0的數字型別
a=3;// 賦予變數a一個3的數字型別
a=b+2;// 賦予變數a(變數b與一個3的數字型別之加總)
a-b;// 什麼事都沒做
b+=1;// 賦予變數b(變數b與一個1的數字型別之加總)
// Ans: a = 5
// Ans: b = 1
/***   作業 6 填答區結束   **/

/***   作業 7 填答區開始   **/
//此題目不用在 codepen 上作答，請同學用小畫家製作記憶體指向圖片，並藉由程式勇者村系統的任務留言介面上傳您的答案圖片即可
let arr1 = [1,2,3];
let arr2 = arr1;

arr2.push(4);
arr2 = [5,6,7];
console.log("作業 7");
console.log(arr1, arr2);

/***   作業 7 填答區結束   **/

/***   作業 8 填答區開始   **/
let maryAppleNum = 20;
maryAppleNum -= 5;
maryAppleNum -= 12;
maryAppleNum += 4;
console.log(`Mary還有${maryAppleNum}顆蘋果`);
/***   作業 8 填答區結束   **/


/***   作業 9 填答區開始   **/
let bill = 0;
const hamburgerPrice = 30;
const milkTeaPrice = 15;
bill += hamburgerPrice*3;
bill += milkTeaPrice*32;
console.log(`Nick的帳單總共${bill}元`);
/***   作業 9 填答區結束   **/

/***   作業 10 填答區開始   **/
let g = "hello";
let h = 123;
let i = g+h;
let j = true;
let k = h+h;
let l = j+k;

// g 是字串
// h 是數字
// i 是字串
// j 是布林值
// k 是數字
// l 是數字

/***   作業 10 填答區結束   **/