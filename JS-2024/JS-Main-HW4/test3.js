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

let historyData = [];
// 第一階段：請寫 printBmi 函式，並印出對應狀態

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

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
    if (BMI == null) return "您的數值輸入錯誤，請重新輸入";
    if (BMI < 18.5) {
        console.log("您的體重過輕");
        return "您的體重過輕";
    } else if (18.5 <= BMI && BMI < 24) {
        console.log("您的體重正常");
        return "您的體重正常";
    } else if (24 <= BMI && BMI < 27) {
        console.log("您的體重過重");
        return "您的體重過重";
    } else if (27 <= BMI && BMI < 30) {
        console.log("您的體重輕度肥胖");
        return "您的體重輕度肥胖";
    } else if (30 <= BMI && BMI < 35) {
        console.log("您的體重中度肥胖");
        return "您的體重中度肥胖";
    } else {
        console.log("您的體重重度肥胖");
        return "您的體重重度肥胖";
    }
}

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高","體重");

// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。
/** bmiStatesData
 * "overThin":{"state":"過輕","color":"藍色"},
 * "normal":{"state":"正常","color":"紅色"},
    "overWeight":{"state":"過重","color":"澄色"},
    "mildFat":{"state":"輕度肥胖","color":"黃色"},
    "moderateFat":{"state":"中度肥胖","color":"黑色"},
    "severeFat":{"state":"重度肥胖","color":"綠色"},
 */



// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

function printBmi(high_cm, weight_kg) {
    const BMI = calcBmi(high_cm, weight_kg);
    
    if (BMI == null) {
        print("您的數值輸入錯誤，請重新輸入");
        return;
    } 
    if (BMI < 18.5) {
        print("overThin", BMI);
    } else if (18.5 <= BMI && BMI < 24) {
        print("normal", BMI);
    } else if (24 <= BMI && BMI < 27) {
        print("overWeight", BMI);
    } else if (27 <= BMI && BMI < 30) {
        print("mildFat", BMI);
    } else if (30 <= BMI && BMI < 35) {
        print("moderateFat", BMI);
    } else {
        print("severeFat", BMI);
    }
}

function print(state, BMI) {
    let rtn = "";
    if (bmiStatesData[state] != null) {
        rtn = `您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`;
        addHistoryData(BMI, bmiStatesData[state].state, bmiStatesData[state].color);
    } else {
        rtn = state;
    }

    console.log(rtn);
}

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高","體重");

// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);

showHistoryData();

function addHistoryData(bmi, state, color) {
    let obj = {};
    obj.bmi = bmi;
    obj.state = state;
    obj.color = color;
    historyData.push(obj);
}

function showHistoryData() {
    const lastData = historyData.at(-1);
    const rtn = `您總共計算 ${historyData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${lastData.bmi}，體重${lastData.state}！健康指數為${lastData.color}！`
    console.log(rtn);
}