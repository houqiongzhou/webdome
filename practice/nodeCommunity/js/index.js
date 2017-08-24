function getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	// console.log(now)
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	if(monthC >= 1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
}
function getData(tab){ 
	var page = {
		page:1
	}
	console.log(page+1)
	$.ajax({ 
		url: "https://cnodejs.org/api/v1/topics", 
		type:'GET',
		data:{
			page:1,
			tab:tab,
			limit:24
		},
		success: function(res){
      	$.each(res.data, function(i,data) {
      		console.log(data)
      		var lastReplyAt = Date.parse(data.last_reply_at);
				var html ='';
					 html = '<div class="cell v-flex v-flex-between">'+
					'<div class="cell-inside v-flex v-flex-start">'+
						'<a href="" class="user-avatar"><img src="'+ data.author.avatar_url +'" alt="user-avatar"></a>'+
						'<span class="reply-count">'+
							'<span class="count-of-repelis" title="回复数">'+ data.reply_count+'</span>'+
							'<i>/</i>'+
							'<span class="count-of-visits" title="点击数">'+ data.visit_count + '</span>'+
						'</span>'
				     if(data.top == true) {
				     	html+= '<span class="top on">置顶</span>'
				     } else {
			     			if(data.tab =='ask') {
			     		       html+='<span class="top">问答</span>';
			     	     } 
			     	     if(data.tab == 'share') {
			     	     	html += '<span class="top">分享</span>'
			     	     }
			     	      if(data.tab == 'job') {
			     	     	html += '<span class="top">职位</span>'
			     	     } 
			     	      if(data.tab == 'good') {
			     	     	html += '<span class="top">精华</span>'
			     	     } 
				     }
              html +='<a href="details.html?id='+data.id+'"  class="i-title" title="'+ data.title +'">'+ data.title +'</a>'+
					'</div>'+
					'<a href="" class="last-time v-flex">'+
						'<img src="'+ data.author.avatar_url +'" class="mid-avatar">'+
						'<span>'+getDateDiff(lastReplyAt)+'</span>'+
					'</a>'+
				'</div>';

				$('.tab-content').append(html);
      	});
    	}
 	});

 }
 getData('all')
$(function(){
	
 	// 单击tab
 	$('#tab li').on('click', function() {
 		$(this).addClass('active').siblings().removeClass('active');
 		
 	})
 	// $("#goods").on('click', function() {
 	// 	getData('ask');
 	// 	console.log(getData('all'))
 	// })

})