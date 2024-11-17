function Dao() {
    this.Query = (sourceData, param) => {
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
    
    this.Insert = (sourceData, paramObj) => {
        paramObj.id = Math.max(...sourceData.map(item=>item.id)) + 1;
        sourceData.push(paramObj);
    };
}