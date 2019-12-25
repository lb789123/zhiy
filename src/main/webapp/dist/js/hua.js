//设置矩形样式
var styleOptions = {
    strokeColor:"red",    //边线颜色。
    fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3,       //边线的宽度，以像素为单位。
    strokeOpacity: 0.8,       //边线透明度，取值范围0 - 1。
    fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
}
//实例化鼠标绘制工具，即左上角的图标
var drawingManager = new BMapLib.DrawingManager(map, {
    isOpen: false, //是否开启绘制模式
    enableDrawingTool: true, //是否显示工具栏
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_LEFT, //位置
        offset: new BMap.Size(40, 5), //偏离值
        drawingModes:[ BMAP_DRAWING_RECTANGLE],
        scale:0.8
    },
    //circleOptions: styleOptions, //圆的样式
    //polylineOptions: styleOptions, //线的样式
    //polygonOptions: styleOptions, //多边形的样式
    rectangleOptions: styleOptions //矩形的样式
});
//画出矩形后的回调函数
var overlaycomplete = function(e){
    $.each(arr_rect,function (k,v) {
        map.removeOverlay(v);
    });

    arr_rect.push(e.overlay);
    var pps = e.overlay.getPath();
    var lat_min = pps[3].lat;
    var lng_min = pps[3].lng;
    var lat_max = pps[1].lat;
    var lng_max = pps[1].lng;

    var list=[];
    var list_choose=[];
    var arr_num=[];
    $.ajax({
        url: url_base + '?' + params,
        success: function (data) {
            data=eval("("+data+")");
            var points=data.data.points;
            $.each(points,function (k,val) {
                var datalist=val.split(',');
                list['lon']=datalist[0];
                list['lat']=datalist[1];
                list['num']=datalist[2];
                arr_num.push(list['num']);
                //筛选符合条件的点
                if(lat_min<=datalist[1] && datalist[1]<=lat_max && lng_min<=datalist[0] && datalist[0]<=lng_max){
                    list_choose.push(list['num']);
                }

            });


        }
    });}
