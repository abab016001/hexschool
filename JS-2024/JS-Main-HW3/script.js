/***   作業 1 填答區開始   **/

let obj = {};
obj["myName"] = "Tom";
obj["age"] = 18;
obj["pets"] = ["John", "Mike"];
obj["isWakeUp"] = false;
/***   作業 1 填答區結束   **/

/***   作業 2 填答區開始   **/
let colors = ["red", "black", "yellow"];
colors.push("black");
console.log(colors.length);
/***   作業 2 填答區結束   **/

/***   作業 3 填答區開始   **/
let motherStatus = [
    {
        name: "mary",
        age: 31,
        sons: ["Tom", "Bob"]
    }
];
motherStatus[0]["age"]++;
motherStatus[0]["sons"].push("John");
console.log(motherStatus[0]);
/***   作業 3 填答區結束   **/

/***   作業 4 填答區開始   **/
const bikeStationData = {
    data: [
        {
            "StationUID": "KHH501201001",
            "StationID": "501201001",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運美麗島站(10號出口)",
                "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 10)"
            },
            "StationPosition": {
                "PositionLon": 120.30212,
                "PositionLat": 22.63213,
                "GeoHash": "wsj8c813d"
            },
            "StationAddress": {
                "Zh_tw": "中山一路168號前方",
                "En": "No.168, Zhongshan 1st. Rd."
            },
            "BikesCapacity": 23,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:07:20+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201002",
            "StationID": "501201002",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運美麗島站(2號出口)",
                "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 2)"
            },
            "StationPosition": {
                "PositionLon": 120.30175,
                "PositionLat": 22.63035,
                "GeoHash": "wsj89x9p3"
            },
            "StationAddress": {
                "Zh_tw": "中山一路83號旁停車場前方",
                "En": "No.83, Zhongshan 1st. Rd."
            },
            "BikesCapacity": 40,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:02:20+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201003",
            "StationID": "501201003",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運美麗島站(5號出口)",
                "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 5)"
            },
            "StationPosition": {
                "PositionLon": 120.3031,
                "PositionLat": 22.63118,
                "GeoHash": "wsj89xfh1"
            },
            "StationAddress": {
                "Zh_tw": "中正三路179號前方",
                "En": "No.179, Zhongzheng 3rd. Rd"
            },
            "BikesCapacity": 23,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:00:23+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201004",
            "StationID": "501201004",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_七賢洛陽街口",
                "En": "YouBike2.0_Qixian Luoyang St. Intersection"
            },
            "StationPosition": {
                "PositionLon": 120.30945,
                "PositionLat": 22.63416,
                "GeoHash": "wsj8c8qtt"
            },
            "StationAddress": {
                "Zh_tw": "七賢一路266號前方",
                "En": "No.266, Qixian 1st Rd."
            },
            "BikesCapacity": 15,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:57:19+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201005",
            "StationID": "501201005",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_中山七賢路口西南側",
                "En": "YouBike2.0_Zhongshan Qixian Rd. Intersection (Southwest)"
            },
            "StationPosition": {
                "PositionLon": 120.30209,
                "PositionLat": 22.63422,
                "GeoHash": "wsj8c83mc"
            },
            "StationAddress": {
                "Zh_tw": "中山一路223號前方",
                "En": "No.223, Zhongshan 1st Rd."
            },
            "BikesCapacity": 19,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:07:20+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201006",
            "StationID": "501201006",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_中山八德路口西南側",
                "En": "YouBike2.0_Zhongshan Bade Rd. Intersection (Southwest)"
            },
            "StationPosition": {
                "PositionLon": 120.30219,
                "PositionLat": 22.63565,
                "GeoHash": "wsj8c89qh"
            },
            "StationAddress": {
                "Zh_tw": "中山一路279號前方",
                "En": "No.279, Zhongshan 1st Rd."
            },
            "BikesCapacity": 28,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:07:20+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201007",
            "StationID": "501201007",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_新興高中",
                "En": "YouBike2.0_Sinsing Senior High School"
            },
            "StationPosition": {
                "PositionLon": 120.30346,
                "PositionLat": 22.62399,
                "GeoHash": "wsj89wd63"
            },
            "StationAddress": {
                "Zh_tw": "五福二路/文衡一路口東北側",
                "En": "Wufu 2nd Rd. & Wenheng 1st Rd. Intersection (Northeast)"
            },
            "BikesCapacity": 19,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:01:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201008",
            "StationID": "501201008",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_新興公園西南側",
                "En": "YouBike2.0_Xinxing Park (Southwest)"
            },
            "StationPosition": {
                "PositionLon": 120.31219,
                "PositionLat": 22.63601,
                "GeoHash": "wsj8cbb8m"
            },
            "StationAddress": {
                "Zh_tw": "興邦路與開封街口東北側",
                "En": "Xingbang Rd. & Kaifeng St. Intersection (Northeast)"
            },
            "BikesCapacity": 25,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:07:20+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201009",
            "StationID": "501201009",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_中正和平路口西北側",
                "En": "YouBike2.0_Zhongzheng Heping Rd. Intersection (Northwest)"
            },
            "StationPosition": {
                "PositionLon": 120.31771,
                "PositionLat": 22.63041,
                "GeoHash": "wsj89zsxt"
            },
            "StationAddress": {
                "Zh_tw": "中正二路162號前方",
                "En": "No.162, Zhongzheng 2nd Rd."
            },
            "BikesCapacity": 20,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:54:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201010",
            "StationID": "501201010",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_六合錦田路口",
                "En": "YouBike2.0_Liuhe Jintian Rd. Intersection"
            },
            "StationPosition": {
                "PositionLon": 120.31097,
                "PositionLat": 22.63235,
                "GeoHash": "wsj8c8pfb"
            },
            "StationAddress": {
                "Zh_tw": "六合一路44號對側",
                "En": "No.44, Liuhe 1st Rd. (Opposite)"
            },
            "BikesCapacity": 10,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T15:47:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201011",
            "StationID": "501201011",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運信義國小站(5號出口)",
                "En": "YouBike2.0_KRT Sinyi Elementary School Sta. (Exit 5)"
            },
            "StationPosition": {
                "PositionLon": 120.31292,
                "PositionLat": 22.63073,
                "GeoHash": "wsj89zc1w"
            },
            "StationAddress": {
                "Zh_tw": "中正三路2號前方",
                "En": "No.2, Zhongzheng 3rd Rd."
            },
            "BikesCapacity": 22,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:06:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201012",
            "StationID": "501201012",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_高雄市財稅行政大樓",
                "En": "YouBike2.0_Kaohsiung Financial Services Building"
            },
            "StationPosition": {
                "PositionLon": 120.30977,
                "PositionLat": 22.63069,
                "GeoHash": "wsj89xyck"
            },
            "StationAddress": {
                "Zh_tw": "中正三路25號前方",
                "En": "No.25, Zhongzheng 3rd Rd."
            },
            "BikesCapacity": 18,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:54:19+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201013",
            "StationID": "501201013",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_復興民權街口",
                "En": "YouBike2.0_Fuxing Minquan St. Intersection"
            },
            "StationPosition": {
                "PositionLon": 120.30883,
                "PositionLat": 22.62418,
                "GeoHash": "wsj89ww5q"
            },
            "StationAddress": {
                "Zh_tw": "復興民權街口東北側",
                "En": "Fuxing Minquan St. Intersection (Northeast)"
            },
            "BikesCapacity": 22,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:49:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201014",
            "StationID": "501201014",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_忠孝公園",
                "En": "YouBike2.0_Zhongxiao Park"
            },
            "StationPosition": {
                "PositionLon": 120.30575,
                "PositionLat": 22.62717,
                "GeoHash": "wsj89x5uz"
            },
            "StationAddress": {
                "Zh_tw": "忠孝一路/民生一路口東南側",
                "En": "Zhongxiao 1st Rd. & Minsheng 1st Rd. Intersection (Southeast)"
            },
            "BikesCapacity": 19,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:53:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201015",
            "StationID": "501201015",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運中央公園站(2號出口)",
                "En": "YouBike2.0_KRT Central Park Sta. (Exit 2)"
            },
            "StationPosition": {
                "PositionLon": 120.30124,
                "PositionLat": 22.62389,
                "GeoHash": "wsj89w89w"
            },
            "StationAddress": {
                "Zh_tw": "捷運中央公園站2號出口後方",
                "En": "KRT Central Park Sta. (Exit 2)"
            },
            "BikesCapacity": 25,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:03:19+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201016",
            "StationID": "501201016",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運中央公園站(3號出口)",
                "En": "YouBike2.0_KRT Central Park Sta. (Exit 3)"
            },
            "StationPosition": {
                "PositionLon": 120.30152,
                "PositionLat": 22.62684,
                "GeoHash": "wsj89x0fu"
            },
            "StationAddress": {
                "Zh_tw": "中山一路/民生二路口東南側",
                "En": "Zhongshan 1st Rd. & Minsheng 2nd Rd. Intersection (Southeast)"
            },
            "BikesCapacity": 26,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:06:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201017",
            "StationID": "501201017",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運美麗島站(9號出口)",
                "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 9)"
            },
            "StationPosition": {
                "PositionLon": 120.30203,
                "PositionLat": 22.63252,
                "GeoHash": "wsj8c817b"
            },
            "StationAddress": {
                "Zh_tw": "中山一路153號",
                "En": "No. 153, Zhongshan 1st Rd."
            },
            "BikesCapacity": 27,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:06:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201018",
            "StationID": "501201018",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運信義國小站(1號出口)",
                "En": "YouBike2.0_KRT Xinyi Elementary School Sta. (Exit 1)"
            },
            "StationPosition": {
                "PositionLon": 120.309886,
                "PositionLat": 22.630946,
                "GeoHash": "wsj89xyfz"
            },
            "StationAddress": {
                "Zh_tw": "中正三路/錦田路(西北側)",
                "En": "Zhongzheng 3rd Rd. /Jintian Rd(Northwest)"
            },
            "BikesCapacity": 24,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:00:21+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201019",
            "StationID": "501201019",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_六合公園(七賢路)",
                "En": "YouBike2.0_Liuhe Park(Qixian Rd.)"
            },
            "StationPosition": {
                "PositionLon": 120.3059,
                "PositionLat": 22.6342,
                "GeoHash": "wsj8c8kjf"
            },
            "StationAddress": {
                "Zh_tw": "七賢一路420號南側",
                "En": "No. 420, Qixian Rd. (South)"
            },
            "BikesCapacity": 28,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:49:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201020",
            "StationID": "501201020",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_中山民生圓環",
                "En": "YouBike2.0_Zhongshan Minsheng Roundabout"
            },
            "StationPosition": {
                "PositionLon": 120.30149,
                "PositionLat": 22.6279,
                "GeoHash": "wsj89x2c5"
            },
            "StationAddress": {
                "Zh_tw": "中山民生路口西北側",
                "En": "Zhongshan & Minsheng Rd. Intersection (Northwest)"
            },
            "BikesCapacity": 24,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:04:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201021",
            "StationID": "501201021",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運美麗島站(7號出口)",
                "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 7)"
            },
            "StationPosition": {
                "PositionLon": 120.30343,
                "PositionLat": 22.63143,
                "GeoHash": "wsj89xfm9"
            },
            "StationAddress": {
                "Zh_tw": "中正三路178號",
                "En": "No. 178, Zhongzheng 3rd Rd."
            },
            "BikesCapacity": 15,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:00:23+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201022",
            "StationID": "501201022",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_捷運美麗島站(6號出口)",
                "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 6)"
            },
            "StationPosition": {
                "PositionLon": 120.30431,
                "PositionLat": 22.63111,
                "GeoHash": "wsj89xfgv"
            },
            "StationAddress": {
                "Zh_tw": "中正林森路口西南側",
                "En": "Zhongzheng & Linsen Rd. Intersection (Southwest)"
            },
            "BikesCapacity": 16,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:07:19+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201023",
            "StationID": "501201023",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_民族八德路口",
                "En": "YouBike2.0_Minzu Bade Rd. Intersection"
            },
            "StationPosition": {
                "PositionLon": 120.31341,
                "PositionLat": 22.63539,
                "GeoHash": "wsj8cb9s9"
            },
            "StationAddress": {
                "Zh_tw": "民族八德路口西北側",
                "En": "Minzu & Bade Rd. Intersection (Northwest)"
            },
            "BikesCapacity": 28,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:22:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201024",
            "StationID": "501201024",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_高雄高商(復興路)",
                "En": "YouBike2.0_Kaohsiung Commercial High School (Fuxing Rd.)"
            },
            "StationPosition": {
                "PositionLon": 120.30845,
                "PositionLat": 22.62516,
                "GeoHash": "wsj89wvcn"
            },
            "StationAddress": {
                "Zh_tw": "復興二路171號東側",
                "En": "No. 171, Fuxing 2nd Rd. (East)"
            },
            "BikesCapacity": 24,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:59:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201025",
            "StationID": "501201025",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_民權民生路口",
                "En": "YouBike2.0_Minquan Minsheng Rd. Intersection"
            },
            "StationPosition": {
                "PositionLon": 120.31086,
                "PositionLat": 22.62723,
                "GeoHash": "wsj89xptn"
            },
            "StationAddress": {
                "Zh_tw": "民權民生路口東南側",
                "En": "Minquan & Minsheng Rd. Intersection (Southeast)"
            },
            "BikesCapacity": 24,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T17:05:21+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201026",
            "StationID": "501201026",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_大同國小(大同路)",
                "En": "YouBike2.0_Ta-Tung Elementary School"
            },
            "StationPosition": {
                "PositionLon": 120.29895,
                "PositionLat": 22.62823,
                "GeoHash": "wsj89rr4b"
            },
            "StationAddress": {
                "Zh_tw": "大同一路229巷口西南側",
                "En": "Ln. 229, Datong 1st Rd. (Southwest)"
            },
            "BikesCapacity": 15,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:32:19+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201027",
            "StationID": "501201027",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_民族河南路口",
                "En": "YouBike2.0_National Henan Road"
            },
            "StationPosition": {
                "PositionLon": 120.31388,
                "PositionLat": 22.63612,
                "GeoHash": "wsj8cbcbu"
            },
            "StationAddress": {
                "Zh_tw": "民族二路/河南路口(南側)",
                "En": "Minzu 2nd Road/Henan Intersection (south side)"
            },
            "BikesCapacity": 11,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:43:15+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201028",
            "StationID": "501201028",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_七賢民族二路口",
                "En": "YouBike2.0_Qixian Minzu 2nd Rd."
            },
            "StationPosition": {
                "PositionLon": 120.3131,
                "PositionLat": 22.63388,
                "GeoHash": "wsj8cb37f"
            },
            "StationAddress": {
                "Zh_tw": "七賢一路/民族二路口(西北側)",
                "En": "Qixian 1st Rd. / Minzu 2nd Rd.(Northwest)"
            },
            "BikesCapacity": 20,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:49:17+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201029",
            "StationID": "501201029",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_六合公園(六合一路)",
                "En": "YouBike2.0_Liuhe Park(Liuhe 1st Rd)"
            },
            "StationPosition": {
                "PositionLon": 120.30553,
                "PositionLat": 22.632833,
                "GeoHash": "wsj8c85vf"
            },
            "StationAddress": {
                "Zh_tw": "六合一路/忠孝一路(東南側)",
                "En": "Liuhe 1st Rd./Zhongxiao 1st Rd.(Southeast)"
            },
            "BikesCapacity": 13,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:51:18+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        },
        {
            "StationUID": "KHH501201030",
            "StationID": "501201030",
            "AuthorityID": "KHH",
            "StationName": {
                "Zh_tw": "YouBike2.0_中正忠孝一路口",
                "En": "YouBike2.0_Zhongzheng Zhongxiao 1st Rd."
            },
            "StationPosition": {
                "PositionLon": 120.30621,
                "PositionLat": 22.63098,
                "GeoHash": "wsj89xu71"
            },
            "StationAddress": {
                "Zh_tw": "中正三路/忠孝一路(東南側)",
                "En": "Zhongzheng 3rd Rd./Zhongxiao 1st Rd.(Southeast)"
            },
            "BikesCapacity": 15,
            "ServiceType": 2,
            "SrcUpdateTime": "2024-10-12T16:12:19+08:00",
            "UpdateTime": "2024-10-12T17:07:39+08:00"
        }
    ]
};
console.log("資料一：", bikeStationData["data"][0]["StationName"]["Zh_tw"]);
console.log("資料二：", bikeStationData["data"][2]["BikesCapacity"]);
/***   作業 4 填答區結束   **/

/***   作業 5 填答區開始   **/
const familyPhoto = {
    "momName": "Jane",
    "dadName": "Bill",
    "daughterName": "Rosa",
    "sonName": "Howard",
    "petName": { "dog": ["Bobo", "Koko"] }
};
/***   作業 5 填答區結束   **/

/***   作業 6 填答區開始   **/
const advertisingBoard = {
    "salesInfo": {
        "projectName": "六角大別墅",
        "location": "高雄市",
        "householdInfo": [
            {
                "price": "208,000,000",
                "squareMeters": "900",
                "hasSwimmingPool": false,
                "hasBasement": true,
                "nthStory": 5,
                "bathroomCnt": 3,
                "hasExclusiveButler": false,
                "beSaled": true
            },
            {
                "price": "302,000,000",
                "squareMeters": "1200",
                "hasSwimmingPool": true,
                "hasBasement": true,
                "nthStory": 7,
                "bathroomCnt": 4,
                "hasExclusiveButler": true,
                "beSaled": false
            }
        ],
        "householdCnt": 2
    }
}
/***   作業 6 填答區結束   **/

/***   作業 7 填答區開始   **/
/*** 第七題完整資料開始  ***/
let roomDetail = {
    "success": true,
    "items": [
        {
            "id": "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
            "imageUrl": "https:\/\/images.unsplash.com\/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
            "normalDayPrice": 1380,
            "holidayPrice": 1500,
            "name": "Single Room"
        },
        {
            "id": "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
            "imageUrl": "https:\/\/images.unsplash.com\/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
            "normalDayPrice": 1899,
            "holidayPrice": 2000,
            "name": "Deluxe Single Room"
        },
        {
            "id": "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
            "imageUrl": "https:\/\/images.unsplash.com\/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "normalDayPrice": 2460,
            "holidayPrice": 2500,
            "name": "Double Room"
        },
        {
            "id": "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
            "imageUrl": "https:\/\/images.unsplash.com\/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
            "normalDayPrice": 2888,
            "holidayPrice": 3000,
            "name": "Deluxe Double Room"
        },
        {
            "id": "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
            "imageUrl": "https:\/\/images.unsplash.com\/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "normalDayPrice": 3350,
            "holidayPrice": 3500,
            "name": "Twin Room"
        },
        {
            "id": "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
            "imageUrl": "https:\/\/images.unsplash.com\/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
            "normalDayPrice": 3899,
            "holidayPrice": 4000,
            "name": "Deluxe Twin Room"
        }
    ]
}
/*** 第七題完整資料結束 ***/
let cost = 0;
let roomDetailItems = roomDetail["items"];
for (let item of roomDetailItems) {
    cost += item["normalDayPrice"];
}
console.log(`共花費${cost}元`);
/***   作業 7 填答區結束   **/

/***   作業 8 填答區開始   **/
let salaryData = {
    company: 'circle center',
    bossName: 'casper',
    staff: [
        {
            name: 'Bob',
            salary: 32000
        },
        {
            name: 'Jack',
            salary: 28000
        }
    ]
};
//第一位員工加薪邏輯
if (salaryData["staff"][0]["salary"] < 40000) {
    //請填寫第一位員工加薪程式碼
    salaryData["staff"][0]["salary"] = 40000;
}

//第二位員工加薪邏輯
if (salaryData["staff"][1]["salary"] < 40000) {
    //請填寫第二位員工加薪程式碼
    salaryData["staff"][1]["salary"] = 40000;
};
/***   作業 8 填答區結束   **/

/***   作業 9 填答區開始   **/
// 2. 輕軌車站出入口基本資料
/*
    輕軌車站出入口基本資料為一個物件，下方列表為此物件含有屬性與對應值：
        屬性名稱："isImage"；值：false
        屬性名稱："data"；值：為一個陣列，內含14個物件，下方列表各物件相關內容：
            第1個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：1
                屬性名稱："站序"；值："1"
                屬性名稱："車站代碼"；值："C1"
                屬性名稱："車站中文站名"；值："籬仔內"
                屬性名稱："車站英文站名"；值："Lizihnei"
                屬性名稱："站位地點"；值："凱旋四路、一心路及瑞隆路交會路口南側"
                屬性名稱："備註"；值：""
            第2個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：2
                屬性名稱："站序"；值："2"
                屬性名稱："車站代碼"；值："C2"
                屬性名稱："車站中文站名"；值："凱旋瑞田"
                屬性名稱："車站英文站名"；值："Kaisyuan Rueitian"
                屬性名稱："站位地點"；值："凱旋四路、瑞田街路口"
                屬性名稱："備註"；值：""
            第3個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：3
                屬性名稱："站序"；值："3"
                屬性名稱："車站代碼"；值："C3"
                屬性名稱："車站中文站名"；值："前鎮之星"
                屬性名稱："車站英文站名"；值："Cianjhen Star"
                屬性名稱："站位地點"；值："中山三路與凱旋四路路口"
                屬性名稱："備註"；值：""
            第4個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：4
                屬性名稱："站序"；值："4"
                屬性名稱："車站代碼"；值："C4"
                屬性名稱："車站中文站名"；值："凱旋中華"
                屬性名稱："車站英文站名"；值："Kaisyuan Jhonghua"
                屬性名稱："站位地點"；值："中華五路、凱旋四路路口"
                屬性名稱："備註"；值：""
            第5個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：5
                屬性名稱："站序"；值："5"
                屬性名稱："車站代碼"；值："C5"
                屬性名稱："車站中文站名"；值："夢時代"
                屬性名稱："車站英文站名"；值："Dream Mall"
                屬性名稱："站位地點"；值："成功二路、時代大道路路口南側"
                屬性名稱："備註"；值：""
            第6個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：6
                屬性名稱："站序"；值："6"
                屬性名稱："車站代碼"；值："C6"
                屬性名稱："車站中文站名"；值："經貿園區"
                屬性名稱："車站英文站名"；值："Commerce and Trade Park"
                屬性名稱："站位地點"；值："成功二路、正勤路路口南側"
                屬性名稱："備註"；值：""
            第7個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：7
                屬性名稱："站序"；值："7"
                屬性名稱："車站代碼"；值："C7"
                屬性名稱："車站中文站名"；值："軟體園區"
                屬性名稱："車站英文站名"；值："Software Technology Park"
                屬性名稱："站位地點"；值："成功二路、復興三路路口北側"
                屬性名稱："備註"；值：""
            第8個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：8
                屬性名稱："站序"；值："8"
                屬性名稱："車站代碼"；值："C8"
                屬性名稱："車站中文站名"；值："高雄展覽館"
                屬性名稱："車站英文站名"；值："Kaohsiung Exhibition Center"
                屬性名稱："站位地點"；值："新光路、成功路路口"
                屬性名稱："備註"；值：""
            第9個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：9
                屬性名稱："站序"；值："9"
                屬性名稱："車站代碼"；值："C9"
                屬性名稱："車站中文站名"；值："旅運中心"
                屬性名稱："車站英文站名"；值："Cruise Terminal"
                屬性名稱："站位地點"；值："三多五路、苓南路路口"
                屬性名稱："備註"；值：""
            第10個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：10
                屬性名稱："站序"；值："10"
                屬性名稱："車站代碼"；值："C10"
                屬性名稱："車站中文站名"；值："光榮碼頭"
                屬性名稱："車站英文站名"；值："Glory Pier"
                屬性名稱："站位地點"；值："海邊路、青年二路路口"
                屬性名稱："備註"；值：""
            第11個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：11
                屬性名稱："站序"；值："11"
                屬性名稱："車站代碼"；值："C11"
                屬性名稱："車站中文站名"；值："真愛碼頭"
                屬性名稱："車站英文站名"；值："Love Pier"
                屬性名稱："站位地點"；值："公園二路路口"
                屬性名稱："備註"；值："有電梯"
            第12個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：12
                屬性名稱："站序"；值："12"
                屬性名稱："車站代碼"；值："C12"
                屬性名稱："車站中文站名"；值："駁二大義"
                屬性名稱："車站英文站名"；值："Dayi Pier-2"
                屬性名稱："站位地點"；值："駁二特區，大義街口"
                屬性名稱："備註"；值：""
            第13個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：13
                屬性名稱："站序"；值："13"
                屬性名稱："車站代碼"；值："C13"
                屬性名稱："車站中文站名"；值："駁二蓬萊"
                屬性名稱："車站英文站名"；值："Penglai Pier-2"
                屬性名稱："站位地點"；值："駁二特區，七賢三路口"
                屬性名稱："備註"；值：""
            第14個物件，含有下方屬性與對應值：
                屬性名稱："seq"；值：14
                屬性名稱："站序"；值："14"
                屬性名稱："車站代碼"；值："C14"
                屬性名稱："車站中文站名"；值："哈瑪星"
                屬性名稱："車站英文站名"；值："Hamasen"
                屬性名稱："站位地點"；值："近捷運橘線O1西子灣站"
                屬性名稱："備註"；值：""
        屬性名稱："id"；值："12053fa0-46d6-476e-b9e1-20dfb4c8f5a9"
        屬性名稱："success"；值：true
*/
/***   作業 9 填答區結束   **/

/***   作業 10 填答區開始   **/
const bmiData = [
    {"status":"過輕", "color":"藍色"},
    {"status":"正常", "color":"紅色"},
    {"status":"過重", "color":"橙色"},
    {"status":"輕度肥胖", "color":"黃色"},
    {"status":"中度肥胖", "color":"黑色"},
    {"status":"重度肥胖", "color":"綠色"}
];
/***   作業 10 填答區結束   **/



