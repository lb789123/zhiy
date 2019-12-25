function ssyqStateChange() {
    if ($("#ssyqLi").length == 0) {
        var html = "<li class='labeli' id='ssyqLi' onclick='showContentDiv(2)'>我的收藏</li>";
        $("#labelUL").append(html);
        labelType = 2;
        changeLabelColor();
    }
    if ($("#ssyq").prop("checked")) {
        // resetSsyqDiv();
        $(".sqDiv").hide();
        $(".ssyqDiv").show("slow");
        $(".tftDiv").hide();
        $("#sqSplitBtn").animate({ right: 400 });
        $(".sqSplitDiv").show("slow");
        var liWidth = winWidth - 400; ;
        $(".LabelList").animate({ left: liWidth });
        $(".LabelList").show("slow");
        //查询雨量为100的数据
        //标注图层，输出列表
        getscj();
        getscjxx();

    } else {
        $("#ssyqFun").hide("slow");
        if ($("#sssq").prop("checked") == false && $("#tflj").prop("checked") == false) {
            $(".sqSplitDiv").hide("slow");

        }
        // clearSsyqMarker();          //清除实时雨情标注
        // clearSsyqMarkerPop();       //清除列表
        $("#ssyqLi").remove();
        if ($(".ssyqDiv").css("display") == "block") {
            // changeLabelType();
            // changeLabelShow();
            $("#yqxxTab").remove();
            $("#yqTab").remove();
        }
    }
}

function getscj(){
            getshoucang();
            var username;
            $.ajax({
                type: "post",
                url: "http://localhost:8088/user/get_username.do",
                dataType: "json",
                async: false,
                success: function user(data) {
                    username = data.data.username
                }
            });
            var _this       = this;
            // 获取收藏夹列表
            $.ajax({
                type: "post",
                url     : "http://localhost:8088/scj/getscjList.do",
                data    : {
                    username : username
                },
                dataType: "json",
                async: false,
                success:addInfoToTable
            });
        }
function addInfoToTable(res) {
    var resInfoArray=res.data.list;
    //显示实时水情--河流信息
    // if (this.Isli) {
    var tmpHtml="";
        tmpHtml = "<table id='scTable'><tr><th>学校</th><th>专业</th><th>文/理科</th><th>批次</th></tr>";
        for (var i = 0; i < resInfoArray.length; i++) {
            var rowData = resInfoArray[i];
            var tr = "<tr class='ssyqTrInfo c'><td>" + rowData.gxmc + "</td><td>" + rowData.zymc + "</td><td>" + rowData.kb + "</td><td>" + rowData.pc + "</td></tr>"
            tmpHtml += tr;
        }
        tmpHtml += "</table>";
        $("#yqTab").append(tmpHtml);
        // 设置结果列表的当前鼠标焦点项样式
        $(".ssyqTrInfo").hover(function () {
            $(this).css("cursor", "pointer");
            $(this).addClass("b");
        }, function () {
            $(this).removeClass("b");
        });
        //单击结果列表项定位到标注点，并打开Popup标注
        $(".ssyqTrInfo").click(function () {
            $(this).addClass("a").siblings("tr").removeClass("a");
            var index = $(".ssyqTrInfo").index($(this));
            for (var i = 0; i < resInfoArray.length; i++) {
                var rowData = resInfoArray[i];
                if(i==index){
                    getschool(rowData.gxmc);
                }
            }
        });
    $("#yqxxTab").hide();
    $("#yqTab").show();
}
function getscjxx(){
    getshoucang();
    var username;
    $.ajax({
        type: "post",
        url: "http://localhost:8088/user/get_username.do",
        dataType: "json",
        async: false,
        success: function user(data) {
            username = data.data.username
        }
    });
    var _this       = this;
    // 获取收藏夹列表
    $.ajax({
        type: "post",
        url     : "http://localhost:8088/scj/getscjListxx.do",
        data    : {
            username : username
        },
        dataType: "json",
        async: false,
        success:addInfoToTablexx
    });
}
function addInfoToTablexx(res) {
    var resInfoArray=res.data.list;
    // if (this.Isli) {
    var tmpHtml="";
    tmpHtml = "<table id='yqxxxTable'><tr><th>学校</th><th>录取概率</th><th>推荐</th></tr>";
    for (var i = 0; i < resInfoArray.length; i++) {
        var rowData = resInfoArray[i];
        var tr = "<tr class='ssyqxxTrInfo c'><td>" + rowData.gxmc + "</td><td>rowData.gailv</td><td><a>详情</a></td></tr>"
        tmpHtml += tr;
    }
    tmpHtml += "</table>";
    $("#yqxxTab").append(tmpHtml);
    // 设置结果列表的当前鼠标焦点项样式
    $(".ssyqxxTrInfo").hover(function () {
        $(this).css("cursor", "pointer");
        $(this).addClass("b");
    }, function () {
        $(this).removeClass("b");
    });
    //单击结果列表项定位到标注点，并打开Popup标注
    $(".ssyqxxTrInfo").click(function () {
        $(this).addClass("a").siblings("tr").removeClass("a");
        var index = $(".ssyqxxTrInfo").index($c(this));
        for (var i = 0; i < resInfoArray.length; i++) {
            var rowData = resInfoArray[i];
            if(i==index){
                getschool(rowData.gxmc);
            }
        }
    })
    $("#yqxxTab").show();
    $("#yqTab").hide();
}
function showSsyqTab(key) {
    switch (key) {
        case 1:{
            $("#yqxxTab").show();
            $("#yqTab").hide();
        }
            break;
        case 2:{
            $("#yqxxTab").hide();
            $("#yqTab").show();
        }
            break;
        default:
    }
}
// 弹框3

function tfljStateChange() {
    if ($("#tfljLi").length == 0) {
        var html = "<li class='labeli' id='tfljLi' onclick='showContentDiv(3)'>志愿结果</li>";
        $("#labelUL").append(html);
        labelType = 3;
        changeLabelColor();
    }
    if ($('#tflj').prop('checked')) {
        $(".tfDiv").show("slow");
        $(".sqDiv").hide();
        $(".ssyqDiv").hide();
        $("#sqSplitBtn").animate({ right: 290 });
        $(".sqSplitDiv").show("slow");
        var liWidth = winWidth - 295; ;
        $(".LabelList").animate({ left: liWidth });
        $(".LabelList").show("slow");
        //显示志愿的推荐结果
        chaxunxuexiao();

    } else {
        $(".tfDiv").hide("slow");
        if ($("#sssq").prop("checked") == false && $("#ssyq").prop("checked") == false) {
            $(".sqSplitDiv").hide("slow");
        }
        $("#tfInfoTab").remove();
        $("#tfDetailedInfoTab").remove();
        // 全清
        $("#tfljLi").remove();
        if ($(".tfDiv").css("display") == "block") {
            changeLabelType();
            changeLabelShow();
        }
    }
}
