function deletescj(username,gxmc,zymc,kb,pc) {

    // var urlStr = encodeURI("Handler.ashx?method=sssq&oper=waterInfo&type=" + type + "&" + Math.random());
    $.ajax({
        type: "post",
        url: "http://localhost:8088/scj/deletezy.do",
        dataType: "json",
        data:{username:username,gxmc:gxmc,zymc:zymc,kb:kb,pc:pc},
        async: false,
        success: function sssqOnsuccess1(data){
            alert(data.msg);
       }
    });
}
function addzy(username,gxmc,zymc,kb,pc) {

    // var urlStr = encodeURI("Handler.ashx?method=sssq&oper=waterInfo&type=" + type + "&" + Math.random());
    $.ajax({
        type: "post",
        url: "http://localhost:8088/zyb/addzy.do",
        dataType: "json",
        data:{username:username,gxmc:gxmc,zymc:zymc,kb:kb,pc:pc},
        async: false,
        success: function sssqOnsuccess1(data){
            alert(data.msg);
       }
    });
}