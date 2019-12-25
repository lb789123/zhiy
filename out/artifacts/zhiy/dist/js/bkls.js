   //
   // $.fn.grid = function(options) {
   //     var $tbody = $(this).find("tbody");
   //     var colums = options.colums;
   //     var url = options.url;
   //     var zskl=options.zskl;
   //     var zssf=options.zssf;
   //     var zspc=options.zspc;
   //     var gxxm=options.gxxm;
   //     var content = [];
   //     //ajax获取数据源后存入content数据中。
   //     $.ajax({
   //         type: "post",
   //         url: url,
   //         dataType: "json",
   //         data:{zssf:zssf,gxxm:gxxm,zskl:zskl,zspc:zspc},
   //         async: false,
   //         success: function(res) {
   //             content = res.data.list;
   //         }
   //     });
   //     for(var c = 0; c < content.length; c++) {
   //         //遍历所有列
   //         var cols = [];
   //         $.each(colums, function(key, value) {
   //             //遍历json数据
   //             $.each(content[c], function(key2, value2) {
   //                 if(key2 == value.Index) {
   //                     cols.push(value2);
   //                 }
   //             });
   //         });
   //         var html="<tr>";
   //         $.each(cols,function(k,v){
   //             html += "<td>"+v+"</td>"
   //         });
   //         html += "</tr>";
   //         $tbody.append(html)
   //     }
   // }
   function gxxm(gxxm) {
       var zskl='理科'
       var zssf='湖北省'
       var zspc='第一批'
       var options = {
           url: "/bklstdxxb/getBklstdxxbList.do",//json文件或者数据库查询后的地址
           zssf:zssf,
           zskl:zskl,
           gxxm:gxxm,
           zspc:zspc,
           colums: [{
               "Index": "gxxm",
               "Name": "gxxm"
           }, {
               "Index": "zssf",
               "Name": "zssf"
           }, {
               "Index": "nf",
               "Name": "nf"
           }, {
               "Index": "zskl",
               "Name": "zskl"
           }, {
               "Index": "zspc",
               "Name": "zspc"
           }, {
               "Index": "lqzdf",
               "Name": "lqzdf"
           },
               {
                   "Index": "lqpjf",
                   "Name": "lqpjf"
               },
               {
                   "Index": "lqzgf",
                   "Name": "lqzgf"
               }]
       }
       $("#table tbody").html("");
       $("#table").grid(options);
   }
   $.fn.grid = function(options) {
       var $tbody = $(this).find("tbody");
       var colums = options.colums;
       var url = options.url;
       var zskl=options.zskl;
       var zssf=options.zssf;
       var zspc=options.zspc;
       var gxxm=options.gxxm;
       var content = [];
       //ajax获取数据源后存入content数据中。
       $.ajax({
           type: "post",
           url: url,
           dataType: "json",
           data:{zssf:zssf,gxxm:gxxm,zskl:zskl,zspc:zspc},
           async: false,
           success: function(res) {
               content = res.data.list;
           }
       });
       for(var c = 0; c < content.length; c++) {
           //遍历所有列
           var cols = [];
           $.each(colums, function(key, value) {
               //遍历json数据
               $.each(content[c], function(key2, value2) {
                   if(key2 == value.Index) {
                       cols.push(value2);
                   }
               });
           });
           var html="<tr>";
           $.each(cols,function(k,v){
               html += "<td>"+v+"</td>"
           });
           html += "</tr>";
           $tbody.append(html)
       }
   }