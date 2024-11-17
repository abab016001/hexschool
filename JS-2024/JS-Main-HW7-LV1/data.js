function Data(){
    const _url = "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json";
    this.data = null;
    this.Init = function() {
        axios.get(_url)
        .then(response=>{
            this.data = response.data;
            console.log(this.data);
        }).catch(exception=>{
            console.log(exception);
        });
    };
}

const data = new Data();
data.Init();