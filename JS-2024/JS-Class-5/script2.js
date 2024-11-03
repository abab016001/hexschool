const btn = document.querySelector(".btn");

btn.addEventListener('click', function(e){
    console.log(e.target);
});


// list 裡面所有元件都綁定監聽 click
const list = document.querySelector(".list");
list.addEventListener('click', function(e){
    e.preventDefault(); // 防止標籤原本的功能
    console.log(e.target.nodeName);
    if (e.target.nodeName.toUpperCase() == "LI") {
        console.log("列表");
    }
    if (e.target.nodeName.toUpperCase() == "INPUT") {
        console.log("輸入");
    }
    console.log(e.target.innerHTML);
});