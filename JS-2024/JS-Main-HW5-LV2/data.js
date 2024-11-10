let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];
const addTicketColumn = [
    { "nodeName": "input", "type": "text", "label": "套票名稱", "id": "NAME", "placeholder": "請輸入套票名稱", "limit": "" },
    { "nodeName": "input", "type": "text", "label": "圖片網址", "id": "IMAGE_URL", "placeholder": "請輸入圖片網址", "limit": "" },
    { "nodeName": "select", "type": "null", "label": "景點地區", "id": "AREA", "placeholder": "請選擇景點地區", "limit": "" },
    { "nodeName": "input", "type": "number", "label": "套票金額", "id": "PRICE", "placeholder": "請輸入套票金額", "limit": `min="0"` },
    { "nodeName": "input", "type": "number", "label": "套票組數", "id": "GROUP", "placeholder": "請輸入套票組數", "limit": `min="0"` },
    { "nodeName": "input", "type": "number", "label": "套票星級", "id": "START", "placeholder": "請輸入套票星級", "limit": `min="1" max="10"` },
    { "nodeName": "textarea", "type": "null", "label": "套票描述", "id": "DESCRIPTION", "placeholder": "請填寫套票描述（限 100 字）", "limit": "" }
];

function Query() {
    
    this.QueryArea = function(paramObj) {
        let resultMapList = _query(paramObj);
        resultMapList = [...new Set(resultMapList)];
        return resultMapList.map(map => map.area);
    };

    this.QueryData = function(paramObj) {
        let resultMapList = _query(paramObj);
        return resultMapList;
    };

    function _query(paramObj) {
        let rtn = [];
        data.forEach(item => {
            let isMatch = true;
            if (paramObj != null) {
                Object.keys(paramObj).forEach(key => {
                    if (paramObj[key] != item[key]) {
                        isMatch = false;
                    }
                    if (paramObj[key].length == 0) {
                        isMatch = true;
                    }
                });
            }
            if (isMatch) {
                rtn.push(item);
            }
        });
        return rtn;
    };    
} 