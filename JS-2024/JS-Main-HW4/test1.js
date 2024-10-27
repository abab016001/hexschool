function showOnHtml(parentId, textContent) {
    let child = document.createElement("div");
    child.textContent = textContent;
    document.getElementById(parentId).append(child);
}
// 第一階段：請寫 printBmi 函式，並印出對應狀態
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高","體重");

function bmi(height_cm, weight_kg) {
    if (typeof(height_cm) != "number" || typeof(weight_kg) != "number") {
        return "您的數值輸入錯誤，請重新輸入";
    }
    const h = height_cm / 100;
    const w = weight_kg;
    let bmiVal = Math.round((w / Math.pow(h, 2)) * 100) / 100;
    if (bmiVal < 18.5) {
        return "您的體重過輕";
    } else if (18.5 <= bmiVal && bmiVal < 24) {
        return "您的體重正常";
    } else if (24 <= bmiVal && bmiVal < 27) {
        return "您的體重過重";
    } else if (27 <= bmiVal && bmiVal < 30) {
        return "您的體重輕度肥胖";
    } else if (30 <= bmiVal && bmiVal < 35) {
        return "您的體重中度肥胖";
    } else {
        return "您的體重重度肥胖";
    }
}

function printBmi(height_cm, weight_kg) {
    const rtn = bmi(height_cm, weight_kg);
    console.log(rtn);
    showOnHtml("PART1", rtn);
}

// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

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
    }
  }

printBmi2(178, 20);
printBmi2(178, 70);
printBmi2(178, 85);
printBmi2(178, 90);
printBmi2(178, 110);
printBmi2(178, 130);
printBmi2("身高","體重");

function bmi2(height_cm, weight_kg) {
    if (typeof(height_cm) != "number" || typeof(weight_kg) != "number") {
        return "您的數值輸入錯誤，請重新輸入";
    }
    const h = height_cm / 100;
    const w = weight_kg;
    let bmiVal = Math.round((w / Math.pow(h, 2)) * 100) / 100;
    if (bmiVal < 18.5) {
        return "overThin";
    } else if (18.5 <= bmiVal && bmiVal < 24) {
        return "normal";
    } else if (24 <= bmiVal && bmiVal < 27) {
        return "overWeight";
    } else if (27 <= bmiVal && bmiVal < 30) {
        return "mildFat";
    } else if (30 <= bmiVal && bmiVal < 35) {
        return "moderateFat";
    } else {
        return "severeFat";
    }
}

function printBmi2(height_cm, weight_kg) {
    let rtn = bmi2(height_cm, weight_kg);
    rtn = bmiStatesData[rtn] != null ? `您的體重${bmiStatesData[rtn].state}, 健康指數為${bmiStatesData[rtn].color}` : rtn;
    console.log(rtn);
    showOnHtml("PART2", rtn);
}

// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。
// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

let bmiHistoryData = {
    "cnt": 0,
    "result": ""
};

printBmi3(178, 20);
printBmi3(178, 70);
printBmi3(178, 85);
showHistoryData();

function bmi3(height_cm, weight_kg) {
    if (typeof(height_cm) != "number" || typeof(weight_kg) != "number") {
        return "您的數值輸入錯誤，請重新輸入";
    }
    const h = height_cm / 100;
    const w = weight_kg;
    let bmiVal = Math.round((w / Math.pow(h, 2)) * 100) / 100;
    if (bmiVal < 18.5) {
        return {"bmi": bmiVal, "bmiStates":  "overThin"};
    } else if (18.5 <= bmiVal && bmiVal < 24) {
        return {"bmi": bmiVal, "bmiStates":  "normal"};
    } else if (24 <= bmiVal && bmiVal < 27) {
        return {"bmi": bmiVal, "bmiStates":  "overWeight"};
    } else if (27 <= bmiVal && bmiVal < 30) {
        return {"bmi": bmiVal, "bmiStates":  "mildFat"};
    } else if (30 <= bmiVal && bmiVal < 35) {
        return {"bmi": bmiVal, "bmiStates":  "moderateFat"};
    } else {
        return {"bmi": bmiVal, "bmiStates":  "severeFat"};
    }
}

function printBmi3(height_cm, weight_kg) {
    let rtn = bmi3(height_cm, weight_kg);
    if (bmiStatesData[rtn.bmiStates] != null) {
        bmiHistoryData.cnt++;
        bmiHistoryData.result = `您總共計算 ${bmiHistoryData.cnt} 次 BMI 紀錄，最後一次 BMI 指數為 ${rtn.bmi}，體重${bmiStatesData[rtn.bmiStates].state}, ！健康指數為${bmiStatesData[rtn.bmiStates].color}！`;
    }
}


function showHistoryData() {
    let rtn = bmiHistoryData.result;
    console.log(rtn);
    showOnHtml("PART3", rtn);
}