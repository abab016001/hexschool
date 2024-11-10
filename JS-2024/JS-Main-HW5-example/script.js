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

  const processMain = () => {
    // loadRegion
    const ticketRegion = document.getElementById('ticketRegion');
    ticketRegion.innerHTML = `<option value="" disabled selected hidden>請選擇景點地區</option>`;
    const regionSearch = document.querySelector('.regionSearch');
    regionSearch.innerHTML = `<option value="地區搜尋" disabled selected hidden>地區搜尋</option>`;
    regionSearch.innerHTML += `<option value="">全部地區</option>`;
    data.forEach(item => {
        ticketRegion.innerHTML += `<option value="${item.area}">${item.area}</option>`;
        regionSearch.innerHTML += `<option value="${item.area}">${item.area}</option>`;
    });    

    // addListener
    regionSearch.addEventListener('change', function(){
        processQuery({area: this.value});
    });
  };
  
  const processQuery = (whereObj) => {
    let resultMapList = query(whereObj);
    document.getElementById("searchResult-text").textContent = `本次搜尋共 ${resultMapList.length} 筆資料`;
    const ticketCard_area = document.querySelector(".ticketCard-area");
    ticketCard_area.innerHTML = "";
    resultMapList.forEach(map => {
        let li = layout.ticketCard(map);
        ticketCard_area.innerHTML += li;
    });
  };

  const query = (paramMap) => {
    let rtn = [];
    data.forEach(item => {
        let isMatch = true;
        Object.keys(paramMap).forEach(column=>{
            if (item[column] != paramMap[column]) {
                isMatch = false;                
            }
            if (paramMap[column].length == 0) {
                isMatch = true;
            }
        });
        if (isMatch) {
            rtn.push(item);
        }
    });
    return rtn;
  };

  processMain();