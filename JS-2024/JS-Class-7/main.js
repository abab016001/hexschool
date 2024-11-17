let c3Obj = {
    bindto: "#chart",
    data: {
        columns:[['data1', 10, 30, 20, 40], ['data2', 1, 20, 3, 14]],
        axis: { data1: 'y', data2: 'y2' },
        types: { data2: "line", data3: "donut" }
    },
    axis: {
        y: { label: { text: "粉紅aka豬佩佩", position: 'outer-middle' }, tick: { format: d3.format("$,") } }, 
        y2: { label: { text: "鬼滅之刃", position: 'outer-middle'}, show: true }
    },

    donut: {
        title: "My Donut Chart",
        width: 50
    },
    color: {
        pattern: ['#1f77b4', '#ff7f0e', '#2ca02c']
    }
};
const chart = c3.generate(c3Obj);

let addData = {columns:[['data3', 45, 71, 34, 19], ['data4', 8, 88, 49, 7]]};
chart.load(addData);

// let unloadIds = {
//     ids: ['data2', 'data4']
// }
// chart.unload(unloadIds);

// chart.hide(['data1', 'data2']);
// chart.show(['data3', 'data4']);