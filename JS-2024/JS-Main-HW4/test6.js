let historyData = [];

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

  
function printBmi(high_cm, weight_kg) {
    if (typeof high_cm != "number" || typeof weight_kg != "number") {
        return console.log("您的數值輸入錯誤，請重新輸入");
    }
    let h = high_cm / 100;
    let w = weight_kg;
    let bmi = (w / h**2).toFixed(2);
    let bmiData = null;
    if (bmi < 18.5) {
        bmiData = bmiStatesData.overThin;
    } else if (bmi >= 18.5 && bmi < 24) {
        bmiData = bmiStatesData.normal;
    } else if ( bmi >= 24 && bmi < 27) {
        bmiData = bmiStatesData.overWeight;
    } else if (bmi >= 27 && bmi < 30) {
        bmiData = bmiStatesData.mildFat;
    } else if (bmi >= 30 && bmi < 35) {
        bmiData = bmiStatesData.moderateFat;
    } else {
        bmiData = bmiStatesData.severeFat;
    }

    output1(bmiData);
    output2(bmiData);
    historyData.push({"data": bmiData, "bmi": bmi});
}

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高","體重");

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高","體重");

historyData = [];

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
showHistoryData();

function output1(bmiData) {
    console.log(`您的體重${bmiData.state}`);
}

function output2(bmiData) {
    console.log(`您的體重${bmiData.state}，健康指數為${bmiData.color}`);
}

function showHistoryData() {
    let lastBmi = historyData.at(-1);
    console.log(`您總共計算 ${historyData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${lastBmi.bmi}，體重${lastBmi.data.state}！健康指數為${lastBmi.data.color}！`);
}

