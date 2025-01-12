let app_str = "";
let writeLog = (msg) => {
    const msgE = document.createElement("div");
    msgE.textContent = msg
    document.getElementById("app").append(msgE);
};

// findIndex
let _findIndex = () => {
    // array.findIndex(callback(element, index, array), thisArg);
    // element 當前處理物件
    // index 當前處理物件的索引
    // array 整個陣列
    // thisArg 執行callback時，作為this使用

    const numbers = [10, 20, 30, 40];
    let index = numbers.findIndex(num=>num > 25);
    writeLog(index);

    index = numbers.findIndex(num=>num > 50);
    writeLog(index);

    const player = {"level": 28};
    index = numbers.findIndex(function(item){
        return item > this.level;
    }, player);
    writeLog(index);
};


const btnArray = [
    {btnName: "findIndex", func: _findIndex}
];

let addFunc = (btnName, func) => {
    const control = document.getElementById("control");
    const btn = document.createElement("button");
    btn.textContent = btnName;
    btn.addEventListener("click", func);

    control.append(btn);
}

btnArray.forEach(item=>addFunc(item.btnName, item.func));

