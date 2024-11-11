const processMain = () => {
    // load
    loadTicketBody();
    loadSelect();
    // addListener
    document.getElementById("SEARCH_AREA").addEventListener("change", function() {
        processQuery({"area": this.value});
    });

    document.getElementById("addTicketBtn").addEventListener("click", processAddSave);
};

const processQuery = (paramObj) => {
    const query = new Query();
    const resultMapList = query.QueryData(paramObj);
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = "";
    resultMapList.forEach(item => {
        searchResult.innerHTML += layout.searchResultItem(item);
    });
    document.getElementById("search-cnt").textContent = `本次搜尋共 ${resultMapList.length} 筆資料`;
};

const processAddSave = () => {
    const addFormElements = document.forms[0].elements;
    let paramObj = {};
    for (let item of addFormElements) {
        if (item.name != null && item.name.length > 0) {
            paramObj[item.name] = item.value;
        }
    }
    const query = new Query();
    const resultMap = query.InsertData(paramObj);
    if (resultMap.state == "FAIR") {
        resultMap.errList.forEach(err=>{console.log(err, resultMap.msgMap[err])});
    }
};

const loadTicketBody = () => {
    const addTicketbody = document.getElementById("add-ticket-body");
    addTicketbody.innerHTML = "";
    addTicketColumn.forEach(item => {
        let li = "";
        if (item.nodeName == "input") {
            li = layout.addTicketInput(item);
        } else if (item.nodeName == "select") {
            li = layout.addTicketSelect(item);
        } else if (item.nodeName == "textarea") {
            li = layout.addTicketTextarea(item);
        }
        addTicketbody.innerHTML += li;
    });
};

const loadSelect = () => {
    const addTicketArea = document.getElementById("area");
    addTicketArea.innerHTML = `<option value="" selected disabled hidden>請選擇景點地區</option>`;
    const query = new Query();
    const areaList = query.QueryArea();
    areaList.forEach(item => {
        addTicketArea.innerHTML += layout.addOption({"value": item});
    });

    const searchArea = document.getElementById("SEARCH_AREA");
    searchArea.innerHTML = `<option value="地區搜尋" selected hidden disabled>地區搜尋</option>`;
    searchArea.innerHTML += `<option value="">全部地區</option>`;
    areaList.forEach(item => {
        searchArea.innerHTML += layout.addOption({"value": item});
    });
};

processMain();