// ==== 字串相加 ==== 
//input
talk("早安");
talk("晚安");

// output
// "hi，早安"
// "hi，晚安"

function talk(content) {
    let textContent = `hi, ${content}`;
    Utility.createChild("STRING_APPEND", "div", textContent);
}

// ==== 數字處理 ==== 

let data = 0;

//input
count(2);
count(3);
count(5);

// output
//2
//5
//10

function count(number) {
    data += number;
    Utility.createChild("NUMNER_PROCESS", "div", data);
}

// ==== 數字 ==== 

//input
count2(2); 
count2(3); 
count2(5); 

// output
// 4
// 9
//25

function count2(number) {
    const rtn = Math.pow(number,2);
    Utility.createChild("NUMNER", "div", rtn);
}

// ==== 兩位數四舍五入 ==== 

//input
twoFixed(1.8888) 
twoFixed(3.1234)

// output
// 1.89
// 3.12

function twoFixed(number) {
    let rtn = Math.round(number*100) / 100;
    Utility.createChild("TWO_FIXED", "div", rtn);
}

// ==== BMI ==== 

//input
calcBmi(178,69) 

//output
//21.78

function calcBmi(height_cm, weight_kg) {
    const w = weight_kg;
    const h = height_cm / 100;
    let rtn = w / (Math.pow(h,2));
    rtn = Math.round(rtn*100) / 100;
    Utility.createChild("BMI", "div", rtn);
}

// ==== 檢查是否需要帶雨具+if ==== 

//input
checkWeather("雨天"); 
checkWeather("晴天"); 

// output
// 要帶雨具
// 不用帶雨具

function checkWeather(str) {
    let rtn = "";
    if (str == "雨天") {
        rtn = "要帶雨具";
    } else if (str == "晴天") {
        rtn = "不用帶雨具";
    }
    Utility.createChild("IF", "div", rtn);
}

// ==== 增加陣列資料 ==== 
let data1 = [];

//input
add1("hello"); 
add1("你好嗎？"); 

// output 
// ["hello","你好嗎？"]

function add1(str) {
    data1.push(str);
    const rtn = `["${data1.join("\",\"")}"]`;
    Utility.createChild("ARRAY_PUSH", "div", rtn);
}

// ==== 增加陣列物件資料 ==== 

let data2 = [];

//input
add2("洧杰","男生"); 
add2("葉子","女生"); 

// output 
//[
// {name:"洧杰",gender:"男生"},
// {name:"葉子",gender:"女生"}
//]

function add2(name, gender) {
    data2.push({"name": name, "gender":gender});
    let objArray = [];
    data2.forEach(item => {
        objArray.push(JSON.stringify(item));
    });
    const rtn = `[${objArray.join(",")}]`;
    Utility.createChild("ARRAY_PUSH_OBJ", "div", rtn);
}

// ==== 取物件資料 ==== 

const bmiStatesData = {
    overThin: {
      state: "過輕",
      color: "藍色"
    },
    normal: {
      state: "正常",
      color: "紅色"
    }
  }
  // input
  checkBmiStates("overThin"); 
  checkBmiStates("normal"); 
  
  // output 
  // 你的體重過輕，指數為藍色
  // 你的體重正常，指數為紅色

  function checkBmiStates(str) {
    const rtn = `你的體重${bmiStatesData[str].state}, 指數為${bmiStatesData[str].color}`;
    Utility.createChild("GET_OBJ", "div", rtn);
  }

  // ==== 週末任務 ==== 

  // 題目：攝氏轉華氏溫度
  // input
 convertCtoF(25)

 // output
 // 77

 function convertCtoF(c) {
    const rtn = Math.round(((c*9/5) + 32));
    Utility.createChild("C_TO_F", "div", rtn);
 }