let data = [
    {
      Charge:"免費",
      name:"廖洧杰充電站"
    }, {
      Charge: "投幣式",
      name: "小花充電站"
    }, {
      Charge: "投幣式",
      name: "小明充電站"
    }, {
      Charge: "投幣式",
      name: "小天充電站"
    }
  ];

let list = document.querySelector(".list");
data.forEach(item => {
    let li = `<li><div>${item.Charge}</div><div>${item.name}</div></li>`;
    list.innerHTML += li;
});