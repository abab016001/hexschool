const areaList = ['臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣', '基隆市', '新竹市', '嘉義市'];
let dataList = null;

const processMain = () => {
    loadData();
    loadArea();
    document.getElementById("search_area").addEventListener("change", processQuery);
    document.getElementById("addBtn").addEventListener("click", processAddSave, true);
    showError(null);
};

const processQuery = () => {
    const layout = new Layout();
    const param = {
        "area": document.getElementById("search_area").value
    }
    const resultList = query(dataList, param);
    const search_result = elementById("search_result");
    resultList.forEach(item => {
        search_result.innerHTML += layout.SearchItem(item);
   });

   const search_cnt = elementById("search_cnt");
   search_cnt.innerHTML = `本次搜尋共 ${resultList.length} 筆資料`;
};

const processAddSave = (e) => {
    e.preventDefault();

    const form = Array.from(document.forms["addForm"]);
    let paramObj = {};
    form.forEach(item=>{
        if (item.name != "") {
            paramObj[item.name] = item.value;
        }
    });

    const chkResult = addCheck(dataList, paramObj);
    if (chkResult.success == false) {
        showError(chkResult.data.id, chkResult.message);
        return;
    }

    insert(dataList, paramObj);

    processQuery();
};

const OnFocus = (x) => {
    showError(x.id, "", false);
};

const loadArea = () => {
    const area = elementById("area");
    area.innerHTML += `<option value="" selected disabled hidden>請選擇景點地區</option>`;
    areaList.forEach(item => area.innerHTML += `<option value="${item}">${item}</option>`);
};

const loadData = () => {
    axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
        .then((response) => {
            dataList = response.data.data;
            const search_area = elementById("search_area");
            search_area.innerHTML += `<option value="地區搜尋" selected disabled hidden>地區搜尋</option>`;
            search_area.innerHTML += `<option value="">全部地區</option>`;
            dataList.forEach(item => {
                search_area.innerHTML += `<option value="${item.area}">${item.area}</option>`;
            });
        });
};

const showError = (id = null, message = "", show = true) => {
    let error = document.querySelectorAll(".error");    
    if (id == null) {
        error.forEach(item=>{
            item.textContent = "";
            item.display = false;
        });
        return;
    }
    error = document.getElementById(`error_${id}`);
    console.log(`error_${id}`);
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
            return {"success": false, "data": {"id":chk}, "message": "※必須輸入數字"};
        }
    }
    for (let chk of columns) {
        if ((paramObj[chk] == null || paramObj[chk] == "") && !skipList.includes(chk)) {
            return {"success": false, "data": {"id":chk}, "message": "※必輸欄位"};
        }
    }
    return {"success": true, "data":{}, "message": ""};
}

const query = (sourceData, param) => {
    let resultList = [];
    sourceData.forEach(data => {
        let isMatch = true;
        for (let key of Object.keys(param)) {
            if (param[key] != "" && data[key] != param[key]) {
                isMatch = false;
            }
        }
        if (isMatch) {
            resultList.push(data);
        }
    });
    return resultList;
};

const insert = (sourceData, paramObj) => {
    paramObj.id = Math.max(...sourceData.map(item=>item.id)) + 1;
    sourceData.push(paramObj);
};

processMain();