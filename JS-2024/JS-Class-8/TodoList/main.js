let listArray = [];
const form = document.querySelector('form');
const listInput = document.getElementById('listInput');
const listWapper = document.getElementById('list-wapper');
const liEl = (map) => {
    return `<li id="list_${map.seq}" onclick="processDelete(${map.seq});">${map.textContent}</li>`
};
const constraints = {
    "listInput": {
        presence: true
    }
}

const processSearch = () => {
    if (!check()) {
        return;
    }
    let search = [];
    for(let i=0; i < listArray.length; i++) {
        document.getElementById(`list_${i}`).className = "";
        const item = listArray[i];
        if (item.textContent.includes(listInput.value)) {
            console.log("add", item);
            search.push(i);
        }
    }

    search.forEach(item => {
        document.getElementById(`list_${item}`).className = "select";
    });
};

const processAdd = () => {
    if (!check()) {
        return;
    }

    listArray.push({ textContent: listInput.value });
    render();
};

const processDelete = (seq) => {
    listArray.splice(seq, 1);
    render();
}

const render = () => {
    listWapper.innerHTML = "";
    for (let i = 0; i < listArray.length; i++) {
        const map = {seq: i, textContent: listArray[i].textContent};
        listWapper.innerHTML += liEl(map);
    }
};

const check = () => {
    document.querySelectorAll(".error").forEach(item => item.textContent = "");

    let is_success = true;

    const chk = validate(form, constraints);
    if (!chk) return is_success;
    Object.entries(chk).forEach(item => {
        const id = `error-${item[0]}`;
        document.getElementById(id).textContent = item[1];
        is_success = false;
    });
    return is_success;
}