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

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高","體重");


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

function printBmi(high_cm, weight_kg) {
    if (typeof high_cm != "number" || typeof weight_kg != "number") {
        console.log("您的數值輸入錯誤，請重新輸入");
        return;
    }
    let h = high_cm / 100;
    let w = weight_kg;
    let bmi = (w / h**2).toFixed(2);
    let bmiState = null;
    if (bmi < 18.5) {
        bmiState = bmiStatesData.overThin;
    } else if (bmi >= 18.5 && bmi < 24) {
        bmiState = bmiStatesData.normal;
    } else if (bmi >= 24 && bmi <27) {
        bmiState = bmiStatesData.overWeight;
    } else if (bmi >= 27 && bmi < 30) {
        bmiState = bmiStatesData.mildFat;
    } else if (bmi >= 30 && bmi < 35) {
        bmiState = bmiStatesData.moderateFat;
    } else {
        bmiState = bmiStatesData.severeFat;
    }

    output1(bmiState);
    output2(bmiState);
    historyData.push({"state":bmiState, "bmi": bmi});
}

function output1(bmiState) {
    console.log(`您的體重${bmiState.state}`);
}

function output2(bmiState) {
    console.log(`您的體重${bmiState.state}，健康指數為${bmiState.color}`);
}

function showHistoryData() {
    let tmp = historyData.shift();
    console.log(`您總共計算 ${historyData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${tmp.bmi}，體重${tmp.state.state}！健康指數為${tmp.state.color}！`)
}

showHistoryData();