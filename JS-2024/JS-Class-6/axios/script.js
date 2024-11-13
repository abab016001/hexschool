console.log(axios);

function Debug() {
    _str = "";
    const body = document.querySelector("body");

    this.logText = (...args) => {
        let str = "";
        args.forEach(item => str += " " + item);
        _writeLog(str);
    };

    this.log = (arg) => {
        _writeLog(arg);
    }

    _writeLog = function(msg) {
        const div = document.createElement("div");
        div.textContent = msg;
        body.append(div);
        console.log(msg);
    };
}

const debug = new Debug();
let url = "";
url = 'https://hexschool.github.io/ajaxHomework/data.json';
url = 'WR_P_77_Metadata.json';
let data;
axios.get(url)
    .then((response)=>{
        const title = document.querySelector('.title');
        title.textContent = response.data[0].title;
        debug.log(response);        
    });