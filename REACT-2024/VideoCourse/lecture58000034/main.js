const core = new Core();

const data = [
    core.dataObj("2021-04-28", "卡斯柏", "Vue作品實戰直播班2021夏季-報到", "1"),
    core.dataObj("2021-04-27", "小明", "Vue作品實戰直播班2021夏季-報到", "2"),
    core.dataObj("2021-04-27", "漂亮阿姨", "Vue作品實戰直播班2021夏季-報到", "2"),
];

const processMain = () => {
    const table_column = ["paybackTime", "name", "task", "state"];
    const thArray = table_column.map(item=>core.dataComment(item));
    const thObjList = thArray.map(item=>{return {"textContent": item}});
    let bodyList = [];
    data.forEach(itemObj=>{
        bodyList.push(table_column.map(col=>{return {"textContent": itemObj[col]} }));
    });
    console.log(data);
    console.log(bodyList);
    core.createTable("table", thObjList, bodyList);
};

processMain();