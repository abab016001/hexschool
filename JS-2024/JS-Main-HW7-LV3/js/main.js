const areasList = ['臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣', '基隆市', '新竹市', '嘉義市'];
const axiosUrl = "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json";
const dao = new Dao();
const layout = new Layout();
let dataList = null;

const processMain = () => {
    axios.get(axiosUrl)
        .then(response => {
            dataList = response.data;
            processQuery();
        }).catch(exception => {
            console.log(exception);
        });
    loadAddAreaSelect();
    document.getElementById("search_area").addEventListener("change", processQuery);
    document.getElementById("addBtn").addEventListener("click", processAddSave, true);
    showError(null);
};

const processQuery = () => {
    loadSearchAreaSelect(dataList);
    
    const param = {
        "area": document.getElementById("search_area").value
    }
    const resultList = dao.Query(dataList, param);

    const search_result = elementById("search_result");
    resultList.forEach(item => {
        search_result.innerHTML += layout.SearchItem(item);
    });

    const search_cnt = elementById("search_cnt");
    search_cnt.innerHTML = `本次搜尋共 ${resultList.length} 筆資料`;

    renderChart(resultList, "area");
};

const processAddSave = (e) => {
    e.preventDefault();

    const form = Array.from(document.forms["addForm"]);
    let formObj = {};
    form.forEach(item => {
        if (item.name != "") {
            formObj[item.name] = item.value;
        }
    });

    const chkResult = addCheck(dataList, formObj);
    if (chkResult.success == false) {
        showError(chkResult.data.id, chkResult.message);
        return;
    }

    dao.Insert(dataList, formObj);
    processQuery();
    document.forms["addForm"].reset();
};

const renderChart = (data, column) => {
    const colMap = {};
    const colList = [];
    data.forEach(item=>{
        if (colMap[item[column]]) {
            colMap[item[column]] += 1;
        } else {
            colMap[item[column]] = 1;
        }
    });
    Object.keys(colMap).forEach(key=>{
        colList.push([key, colMap[key]]);
    });

    const c3obj = {
        bindto: "#chart",
        data: {
            columns: colList,
            type: "donut"
        },
        donut: {
            title: "套票地區比重",
            label: {
                show: false
            },
            width: 10
        },
        color: {
            // pattern: ["#26C0C7", '#5151D3',  '#E68618']
        }
    };

    const chart = c3.generate(c3obj);
    // chart.internal.d3.select('.c3-chart-arcs-title')
    // .style('fill', "#4B4B4B")
    // .style('font-size', "14px")
    // .style('font-family', 'Arial')
    // .style('font-weight', 'bold');
}

const OnFocus = (x) => {
    showError(x.id, "", false);
};

const loadAddAreaSelect = () => {
    const area = elementById("area");
    let optionObj = {
        value: "",
        other: "selected disabled hidden",
        textContent: "請選擇景點地區"
    };
    area.innerHTML += layout.SelectOption(optionObj);
    optionObj = {};
    areasList.forEach(item => {
        optionObj.value = item;
        optionObj.textContent = item;
        area.innerHTML += layout.SelectOption(optionObj);
    });
};

const loadSearchAreaSelect = (data) => {
    const origin_val = document.getElementById("search_area").value;
    const search_area = elementById("search_area");
    search_area.innerHTML += `<option value="地區搜尋" selected disabled hidden>地區搜尋</option>`;
    search_area.innerHTML += `<option value="">全部地區</option>`;
    let optionObj = {};
    data.forEach(item => {
        optionObj = {
            value: item.area,
            textContent: item.area
        };
        search_area.innerHTML += layout.SelectOption(optionObj);
    });

    search_area.value = origin_val;
}

const showError = (id = null, message = "", show = true) => {
    let error = document.querySelectorAll(".error");
    if (id == null) {
        error.forEach(item => {
            item.textContent = "";
            item.display = false;
        });
        return;
    }
    error = document.getElementById(`error_${id}`);
    if (error == null) return;
    error.textContent = message;
    error.display = show;
}

const elementById = (id) => {
    const element = document.getElementById(id);
    element.innerHTML = "";
    return element;
};

const addCheck = (sourceData, paramObj) => {
    const columns = Object.keys(sourceData[0]);
    const skipList = ["id"];
    const numList = ["price", "group", "rate"];
    for (let chk of numList) {
        if (paramObj[chk] != null && Number(paramObj[chk]) == NaN && !skipList.includes(chk)) {
            return { "success": false, "data": { "id": chk }, "message": "※必須輸入數字" };
        }
    }
    for (let chk of columns) {
        if ((paramObj[chk] == null || paramObj[chk] == "") && !skipList.includes(chk)) {
            return { "success": false, "data": { "id": chk }, "message": "必填！" };
        }
    }
    return { "success": true, "data": {}, "message": "" };
}

processMain();