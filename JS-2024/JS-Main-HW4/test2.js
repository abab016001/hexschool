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

function calcBmi(height_cm, weight_kg) {
    const h = height_cm / 100;
    const w = weight_kg;
    const BMI = Math.round(w / (h ** 2) * 100) / 100;
    if (BMI < 18.5) {
        return "過輕";
    } else if (18.5 <= BMI && BMI < 24) {
        return "正常";
    } else if (24 <= BMI && BMI < 27) {
        return "過輕";
    } else if (27 <= BMI && BMI < 30) {
        return "輕度肥胖";
    } else if (30 <= BMI && BMI < 35) {
        return "中度肥胖";
    } else {
        return "重度肥胖";
    }
}

function printBmi(height_cm, weight_kg) {
    const rtn = "您的體重" + calcBmi(height_cm, weight_kg);
    console.log(rtn);
}

// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

/** bmiStatesData
 * state/color
 */
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

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

printBmi2(178, 20);
printBmi2(178, 70);
printBmi2(178, 85);
printBmi2(178, 90);
printBmi2(178, 110);
printBmi2(178, 130);
printBmi2("身高","體重");

function calcBmi2(height_cm, weight_kg) {
    if (typeof height_cm != "number" || typeof weight_kg != "number") {
        return "您的數值輸入錯誤，請重新輸入";
    }
    const h = height_cm / 100;
    const w = weight_kg;
    const BMI = Math.round(w / (h ** 2) * 100) / 100;
    if (BMI < 18.5) {
        return "overThin";
    } else if (18.5 <= BMI && BMI < 24) {
        return "normal";
    } else if (24 <= BMI && BMI < 27) {
        return "overWeight";
    } else if (27 <= BMI && BMI < 30) {
        return "mildFat";
    } else if (30 <= BMI && BMI < 35) {
        return "moderateFat";
    } else {
        return "severeFat";
    }
}

function printBmi2(height_cm, weight_kg) {
    const bmi = calcBmi2(height_cm, weight_kg);
    let rtn = "";
    if (bmiStatesData[bmi] != null) {
        rtn = `您的體重${bmiStatesData[bmi].state}，健康指數為${bmiStatesData[bmi].color}`;
    } else {
        rtn = bmi;
    }
    console.log(rtn);
}

// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

let bmiHistoryData = {
    "cnt": 0, "bmi": 0, "state": ""
};

printBmi3(178, 20);
printBmi3(178, 70);
printBmi3(178, 85);
showHistoryData();

function calcBmi3(height_cm, weight_kg) {
    if (typeof height_cm != "number" || typeof weight_kg != "number") {
        return "您的數值輸入錯誤，請重新輸入";
    }
    const h = height_cm / 100;
    const w = weight_kg;
    const BMI = Math.round(w / (h ** 2) * 100) / 100;
    bmiHistoryData.cnt++;
    bmiHistoryData.bmi = BMI;
    if (BMI < 18.5) {
        bmiHistoryData.state = "overThin";
    } else if (18.5 <= BMI && BMI < 24) {
        bmiHistoryData.state = "normal";
    } else if (24 <= BMI && BMI < 27) {
        bmiHistoryData.state = "overWeight";
    } else if (27 <= BMI && BMI < 30) {
        bmiHistoryData.state = "mildFat";
    } else if (30 <= BMI && BMI < 35) {
        bmiHistoryData.state = "moderateFat";
    } else {
        bmiHistoryData.state = "severeFat";
    }
}

function printBmi3(height_cm, weight_kg) {
    const bmi = calcBmi3(height_cm, weight_kg);
    let rtn = "";
    if (bmiStatesData[bmi] != null) {
        rtn = `您的體重${bmiStatesData[bmi].state}，健康指數為${bmiStatesData[bmi].color}`;
    }
    console.log(rtn);
}

function showHistoryData() {
    const bmiState = bmiStatesData[bmiHistoryData.state];
    console.log(bmiState);
    const rtn = `您總共計算 ${bmiHistoryData.cnt} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData.bmi}，體重${bmiState.state}！健康指數為${bmiState.color}！`    
    console.log(rtn);
}