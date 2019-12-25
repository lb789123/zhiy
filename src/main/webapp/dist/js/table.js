
$.fn.grid = function(options) {
	var $tbody = $(this).find("tbody");
	var colums = options.colums;
	var url = options.url;
	var szd=options.szd;
	var content = [];
	//ajax获取数据源后存入content数据中。
        $.ajax({
		type: "post",
		url: url,
		dataType: "json",
            data:{zsd:szd},
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