// option = {
//     title : {
//         text: '某省高考分数线',
//         subtext: '招生网'
//     },
//     tooltip : {
//         trigger: 'axis'
//     },
//     legend: {
//         data:['一本线','二本线']
//     },
//     toolbox: {
//         show : true,
//         feature : {
//             mark : {show: true},
//             dataView : {show: true, readOnly: false},
//             magicType : {show: true, type: ['line', 'bar']},
//             restore : {show: true},
//             saveAsImage : {show: true}
//         }
//     },
//     calculable : true,
//     xAxis : [
//         {
//             type : 'category',
//             boundaryGap : false,
//             data : ['2012','2013','2014','2015','2016','2017','2018']
//         }
//     ],
//     yAxis : [
//         {
//             type : 'value',
//             axisLabel : {
//                 formatter: '{value} 分'
//             }
//         }
//     ],
//     series : [
//         {
//             name:'一本线',
//             type:'line',
//             data:[461, 511, 515, 523, 512, 533, 550],
//             markLine : {
//                 data : [
//                     {type : 'average', name: '平均值'}
//                 ]
//             }
//         },
//         {
//             name:'二本线',
//             type:'line',
//             data:[480, 470, 460, 450, 434, 513, 510],
//             markLine : {
//                 data : [
//                     {type : 'average', name : '平均值'}
//                 ]
//             }
//         }
//     ]
// };
// function getData(){
//
//     htmlobj=$.ajax({url: "example-helium-all.json", async: false});
//     dataobj = htmlobj.responseText
//     data = JSON.parse(dataobj)
//
//     htmlobj=$.ajax({url: "example-helium-line.json", async: false});
//     dataobj = htmlobj.responseText
//     dataLine = JSON.parse(dataobj)
//
//     var data0 = splitData(data)
//
//     // alert(option.series[0].name)
//     option.xAxis.data = data0.categoryData;
//     option.series[0].data = data0.values;
//     option.series[1].data = dataLine;
//     // myChart.setOption(option, true);
//
//     // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
// }
//
//
// setInterval(function(){
//     getData();
// },2000);
function loadshujutu (){
    var nf=[];    //类别数组（实际用来盛放X轴坐标值）
    var yiben=[];    //销量数组（实际用来盛放Y坐标值）
    var erben=[];    //销量数组（实际用来盛放Y坐标值）
    $.ajax({
        type : "post",
        async : false,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url : "http://localhost:8088/dqpcx/getdqpcxzsdke.do",    //请求发送到TestServlet处
        data : {zsd:province,kelei:leibie,pcmc:pcmc1},
        dataType : "json",        //返回数据形式ke为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result) {

                for(var i=0;i<result.data.list.length;i++){
                    nf.push(result.data.list[i].nf);    //挨个取出类别并填入类别数组
                    yiben.push(result.data.list[i].zdkzfsx);    //挨个取出销量并填入销量数组
                }
                // for(var i=0;i<result.length;i++){
                //     yiben.push(result.data.list[i].zdkzfsx);    //挨个取出销量并填入销量数组
                //     alert(result.data.list[i].zdkzfsx);
                //     // else
                //     // erben.push(result.data.list[i].zdkzfsx);    //挨个取出销量并填入销量数组
                // }
                myChart.hideLoading();    //隐藏加载动画
                myChart.setOption({        //加载数据图表
                    title: {
                        x: 'center',
                        y: 'top',
                        text: province+'省'+leibie+pcmc1+'高考分数线'
                    },
                    xAxis: {
                        // data: names
                        data: nf
                    },
                    yAxis: {
                        min: 450
                    },
                    series: [
                        // {
                        // 根据名字对应到相应的系列
                        //     name: '销量',
                        //     data: nums
                        // }
                        {
                            name:'一本线',
                            type:'line',
                            // data:[461, 511, 515, 523, 512, 533, 550],
                            data: yiben,
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                });

            }

        }
    });}
function loadtoudantu (){
    var nf=[];    //类别数组（实际用来盛放X轴坐标值）
    var fenshu=[];    //销量数组（实际用来盛放Y坐标值）
    $.ajax({
        type : "post",
        async : false,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url : "http://localhost:8088/bklstdxxb/getBklstdxxbList.do",    //请求发送到TestServlet处
        data : {zssf:prov,gxxm:gxxm1,zskl:leibie,zspc:zspc1},
        dataType : "json",        //返回数据形式ke为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result) {

                for(var i=0;i<result.data.list.length;i++){
                    nf.push(result.data.list[i].nf);    //挨个取出类别并填入类别数组

                    if(result.data.list[i].lqzdf=="")
                    fenshu.push(result.data.list[i].lqpjf);    //挨个取出销量并填入销量数组
                    else fenshu.push(result.data.list[i].lqzdf);
                }
                // for(var i=0;i<result.length;i++){
                //     yiben.push(result.data.list[i].zdkzfsx);    //挨个取出销量并填入销量数组
                //     alert(result.data.list[i].zdkzfsx);
                //     // else
                //     // erben.push(result.data.list[i].zdkzfsx);    //挨个取出销量并填入销量数组
                // }
                toudan.hideLoading();    //隐藏加载动画
                toudan.setOption({        //加载数据图表
                    title: {
                        x: 'center',
                        y: 'top',
                        text: gxxm1+leibie+pcmc1+'投档线'
                    },
                    xAxis: {
                        // data: names
                        data: nf
                    },
                    yAxis: {
                        min: 450
                    },
                    series: [
                        // {
                        // 根据名字对应到相应的系列
                        //     name: '销量',
                        //     data: nums
                        // }
                        {
                            name:'投档线',
                            type:'line',
                            // data:[461, 511, 515, 523, 512, 533, 550],
                            data: fenshu,
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                });

            }

        }
    });}
function loadzy (){
    $.ajax({
        type: "post",
        url: "http://localhost:8088/zyfsx/getzyList.do",
        dataType: "json",
        data:{ksdq:province,gxmc:gxxm1,kb:leibie,pc:zspc1},
        async: false,
        success: function sssqOnsuccess2(data){
            var resInfoArray =data;
            if (resInfoArray == null) {
                alert("查询信息失败，请检查数据！");
                return;
            }
            addResInfoToTable2(resInfoArray);        //将数据填到实时水情表格中，并将表格和标注联系起来
        }
    });

}
function loadzyxiantu (z){
    var zy=z;
    var nf=[];    //类别数组（实际用来盛放X轴坐标值）
    var fenshu=[];    //销量数组（实际用来盛放Y坐标值）
    $.ajax({
        type : "post",
        async : false,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url: "http://localhost:8088/zyfsx/getzyfsList.do",
        data:{ksdq:province,gxmc:gxxm1,kb:leibie,pc:zspc1,zymc:zy},
        dataType : "json",        //返回数据形式ke为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result) {

                for(var i=0;i<result.data.list.length;i++){
                    nf.push(result.data.list[i].nf);    //挨个取出类别并填入类别数组
                    fenshu.push(result.data.list[i].pjf);    //挨个取出销量并填入销量数组

                }
                // for(var i=0;i<result.length;i++){
                //     yiben.push(result.data.list[i].zdkzfsx);    //挨个取出销量并填入销量数组
                //     alert(result.data.list[i].zdkzfsx);
                //     // else
                //     // erben.push(result.data.list[i].zdkzfsx);    //挨个取出销量并填入销量数组
                // }
                zyfsx.hideLoading();    //隐藏加载动画
                zyfsx.setOption({        //加载数据图表
                    title: {
                        x: 'center',
                        y: 'top',
                        text: gxxm1+leibie+zy+'专业分数线'
                    },
                    xAxis: {
                        // data: names
                        data: nf
                    },
                    yAxis: {
                        min: 450
                    },
                    series: [
                        // {
                        // 根据名字对应到相应的系列
                        //     name: '销量',
                        //     data: nums
                        // }
                        {
                            name:'专业分数线',
                            type:'line',
                            // data:[461, 511, 515, 523, 512, 533, 550],
                            data: fenshu,
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        }
                    ]
                });

            }

        }
    });}