const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  }

  let historyData = [];
// 第一階段：請寫 printBmi 函式，並印出對應狀態

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

function calcBmi(high_cm, weight_kg) {
    if (typeof high_cm != "number" || typeof weight_kg != "number") {
        return null;
    }
    const h = high_cm / 100;
    const w = weight_kg;
    const bmi = (w / h ** 2).toFixed(2);
    return bmi;
}

function printBmi(high_cm, weight_kg) {
    const BMI = calcBmi(high_cm, weight_kg);
    if (BMI == null) {
        print1("您的數值輸入錯誤，請重新輸入");
        return;
    }

    if (BMI < 18.5) {
        print1("您的體重過輕");
        print2("overThin");
        print3(BMI, "overThin");
    } else if (18.5 <= BMI && BMI < 24) {
        print1("您的體重正常");
        print2("normal");
        print3(BMI, "normal");
    } else if (24 <= BMI && BMI < 27) {
        print1("您的體重過重");
        print2("overWeight");
        print3(BMI, "overWeight");
    } else if (27 <= BMI && BMI < 30) {
        print1("您的體重輕度肥胖");
        print2("mildFat");
        print3(BMI, "mildFat");
    } else if (30 <= BMI && BMI < 35) {
        print1("您的體重中度肥胖");
        print2("moderateFat");
        print3(BMI, "moderateFat");
    } else {
        print1("您的體重重度肥胖");
        print2("severeFat");
        print3(BMI, "severeFat");
    }
}

function showHistoryData() {
    console.log(`您總共計算 ${historyData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${historyData.at(-1).bmi}，體重${historyData.at(-1).state}！健康指數為${historyData.at(-1).color}！`);
}

function addHistoryData(BMI, stateData) {
    let obj = {};
    obj.bmi = BMI;
    obj.state = stateData.state;
    obj.color = stateData.color;
    historyData.push(obj);
}


printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
showHistoryData();
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高", "體重");

function print1(content) {
    console.log(content);
}

function print2(state) {
    const data = bmiStatesData[state];
    if (data == null) {
        console.log(state);
        return;
    }
    const rtn = `您的體重${data.state}，健康指數為${data.color}`;
    console.log(rtn);
}

function print3(BMI, state) {
    const data = bmiStatesData[state];
    if (data == null) {
        console.log(state);
        return;
    }
    const rtn = `您的體重${data.state}，健康指數為${data.color}`;
    addHistoryData(BMI, data);
    console.log(rtn);
}