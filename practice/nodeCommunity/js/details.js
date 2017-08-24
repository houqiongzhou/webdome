function getDateDiff(dateTimeStamp) {
	var minute = 1000 *60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0) {return;}
	var monthC = diffValue/ month;
	var weekC = diffValue/(7*day);
	var dayC = diffValue/ day;
	var hourC = diffValue /hour;
	var minC = diffValue / minute;
	if(monthC >= 1) {
		result = '' + parseInt(monthC) + '月前';
	}
	else if(weekC >= 1) {
		result ='' + parseInt(weekC) + '周前';
	}
	else if(dayC >= 1) {
		result ='' + parseInt(dayC) + '天前';
	}
	else if(hourC >=1) {
		result ='' + parseInt(hourC) + '小时前';
	}
	else if(minC >= 1) {
		result = '' + parseInt(minC) + '分钟前';
	}
	else {
		result = '刚刚'
	}
	return result; 

}
$(function() {
	   var loc = location.href;
	   var n1 = loc.length;//地址的总长度
	   var n2 = loc.indexOf("=");//取得=号的位置
	   var id = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容

		$.ajax({
			url:'https://cnodejs.org/api/v1/topic/'+id,
			type:'GET',
			success: function(res) {
				
				var html = '';
				var repText = '';
				var data = res.data;
				var detailsLastDateTime = Date.parse(data.last_reply_at);
				var detailsFirstDateTime = Date.parse(data.create_at)
				console.log(data)
				$(document).attr("title",data.title)
				html +='<div class="con-hd-title">'+
							'<h1 class="title">'+data.title+'</h1>'+
							'<p>•发布于 '+getDateDiff(detailsFirstDateTime)+'个月前 •作者'+ data.author.loginname +' '+ data.visit_count +' 次浏览 •最后一次编辑是 '+getDateDiff(detailsLastDateTime)+' •来自'
							 if(data.tab == 'share') {
									html += '分享'
								}
								if(data.tab == 'good') {
									html += '精华'
								}
								if(data.tab == 'ask') {
									html += '问答'
								}
								if(data.tab == 'job') {
									html += '招聘'
								}
								if(data.tab == 'dev') {
									html += '客户端测试'
								}
							html+= '</p>'+
						'</div>'+
						'<div class="con-bd">'+ data.content+'</div>';
				$('.details').append(html);

				// 回复
				$.each(res.data.replies, function(i,data) {
					var repDateTime = Date.parse(data.create_at)
					repText += '<div class="item-list">'+
						'<a href="#" class="re-author"><img src="'+ data.author.avatar_url +'"></a>'+
						'<div class="replies-text">'+
							'<span>'+ data.author.loginname+'</span><a href="#">1楼•'+getDateDiff(repDateTime)+'</a>'+ data.content +'</div >'+
						'<div class="user-action">'+
							'<span title="喜欢"></span>'+
							'<i onclick="addCount(this)"></i>'+
						'</div>'+
					'</div>';
				});
				var repliesCount = $('<div class="replies-list"></div>')
				$('.replies-hf').html(data.reply_count+"回复")
				$('.replies-list').append(repText)

				// 作者信息
				$('.s-author-title').append('<a href="'+data.author.avatar_url+'"><img src="'+ data.author.avatar_url+'"></a>'+
							'<p>'+ data.author.loginname+'</p>')
			},
			error: function(error) {
				alert('数据加载出错了');
			}
		});
});
