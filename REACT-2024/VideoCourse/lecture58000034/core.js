const Core = function() {
    
    const dataObj = (paybackTime, name, task, state) => {
        return {"paybackTime": paybackTime, "name": name, "task": task, "state": dataPhrase("state", state)};
    }
        
    const dataComment = (column) => {
        const map = {"paybackTime": "回報時間", "name": "暱稱", "task": "任務名稱", "state": "狀態"};
        return map[column];
    };
    
    const dataPhrase = (phraseKey, phraseVal) => {
        const state = {"0": "尚未批改", "1": "批改中", "2": "已批改"};
        const keys = {"state": state};
        
        const getKey = keys[phraseKey];
        if (getKey != null) return getKey[phraseVal];
        return null;
    };

    const takeNull = (val, defalVal) => {
        if (val == null && defalVal != null) return defalVal;
        return val;
    }

    const createTable = (tableId, thList, bodyList) => {
        const table = document.getElementById(tableId);
        if (table == null) return null;
        table.innerHTML = "";

        const header = document.createElement("tr");

        thList.forEach(th=>{
            const tag = document.createElement("th");
            tag.textContent = takeNull(th.textContent, "");            
            header.append(tag);
        });
        table.append(header);

        bodyList.forEach(body=>{
            const tr = document.createElement("tr");
            body.forEach(td=>{
                const tag = document.createElement("td");
                tag.textContent = takeNull(td.textContent, "");
                tr.append(tag);
            })
            table.append(tr);
        });
    }

    return {dataObj, dataComment, dataPhrase, createTable};
};