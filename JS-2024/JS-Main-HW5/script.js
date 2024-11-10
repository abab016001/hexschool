let input_list = [
    {"title": "套票名稱", "name": "ticket_name", "nodeName": "input"},
    {"title": "圖片網址", "name": "image_url", "nodeName": "input"},
    {"title": "景點地區", "name": "attraction_area", "nodeName": "input"},
    {"title": "套票金額", "name": "ticket_price", "nodeName": "input"},
    {"title": "套票組數", "name": "ticket_cnt", "nodeName": "input"},
    {"title": "套票星級", "name": "ticket_star", "nodeName": "input"},
    {"title": "套票描述", "name": "ticket_about", "nodeName": "textarea"}
]


function init() {
    loadLayoutInput();
}

function loadLayoutInput() {
    let list = document.getElementById("input_list");
    input_list.forEach(item => {
        let li = document.createElement("li");
        li.className = "input-list-item";
        li.innerHTML += `<label for="${item.name}" class="title">${item.title}</label>`;
        if (item.nodeName == "textarea") {
            li.innerHTML += `<textarea id="${item.name}" name="${item.name}" class="textbox" style="padding-bottom: 89px" placeholder="請填寫${item.title}"></textarea>`;    
        } else {
            li.innerHTML += `<input type="text" id="${item.name}" name="${item.name}" class="textbox" placeholder="請填寫${item.title}">`;
        }
        list.append(li);
    });
}

init();