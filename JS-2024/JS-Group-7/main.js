let dataList = null;
const axiosUrl = "https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json?token=AAQWFQDSNRRXC6FBW7PDSETBOESVW";
axios.get(axiosUrl)
    .then(response => {
        dataList = response.data;
        processBar(average1(), "#chartBar1", "薪資滿意度平均分數");
        processBar(average2(), "#chartBar2", "產業滿意度的平均分數");
        processPie(getGender(), "#chartPie1");
        processPie(getSalary(), "#chartPie2", "薪水區間分佈");
    }).catch(e => {

    });

const processBar = (data, bindTarget, title = "") => {
    const obj = {
        bindto: bindTarget,
        data: {
            columns: getC3Data(data),
            type: "bar"
        }, 
        bar: {
            title: title
        }
    }
    c3.generate(obj);
};

const processPie = (data, bindTarget, title = "") => {
    const obj = {
        bindto: bindTarget,
        data: {
            columns: getC3Data(data),
            type: "pie"
        },
        pie: {
            title: title
        }
    }
    c3.generate(obj);
};

const getC3Data = (data) => {
    let c3Data = [];
    Object.keys(data).forEach(key => {
        c3Data.push([key, data[key]]);
    });
    return c3Data;
}

const average1 = () => {
    // salary_score
    // company.salary_score
    // company.industry = 接案公司
    let salaryScoreTotal = 0;
    let salaryScoreCnt = 0;
    dataList.forEach(item => {
        if (item.company.industry == "接案公司") {
            salaryScoreTotal += Number(item.company.salary_score);
            salaryScoreCnt++;
        }
    });

    return {"接案公司": salaryScoreTotal / salaryScoreCnt};
};

const average2 = () => {
    let game = {total:0, cnt:0};
    let e_commerce = {total:0, cnt:0};
    // company.industry = 博奕, 博弈
    // company.industry = 電子商務, 電商

    const includesGame = ["博奕", "博弈"];
    const includesE_com = ["電子商務", "電商"];
    // score
    dataList.forEach(item => {
        const industry = item.company.industry;
        const score = Number(item.company.score);
        for (let x of includesGame) {
            if (industry.includes(x)) {
                game.total += score;
                game.cnt ++;
                break;
            }
        }

        for (let x of includesE_com) {
            if (industry.includes(x)) {
                e_commerce.total += score;
                e_commerce.cnt ++;
                break;
            }
        }
        
    });

    return {
        "博弈產業": game.total / game.cnt,
        "電商公司": e_commerce.total / e_commerce.cnt
    };
};

const getGender = () => {
    // gender 男性 女性
    let man = 0;
    let woman = 0;
    dataList.forEach(item => {
        const gender = item.gender;
        if (gender == "男性") {
            man++;
        } else if (gender == "女性") {
            woman++;
        }
    });

    return { "男性": man, "女性": woman };
};

const getSalary = () => {
    let salaryMap = {};
    dataList.forEach(item => {
        const salary = item.company.salary;
        if (salaryMap[salary]) {
            salaryMap[salary] += 1;
        } else {
            salaryMap[salary] = 1;
        }
    });

    return salaryMap;
};