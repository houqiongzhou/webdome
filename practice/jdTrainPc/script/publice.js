// 得到日历控件中的星期几
function weekDay() {
	var date = $dp.cal.getP('y') + "-" + $dp.cal.getP('M') + "-" + $dp.cal.getP('d');
	var week = showWeek($dp.cal.getP('w'))
	$('.text-day').text(week) //星期container
	this.value = date; //this代表当前input框
}

function getCountDays() {
	  var curDate = new Date();
	  var curMonth = curDate.getMonth();
	   curDate.setMonth(curMonth + 1);
	   curDate.setDate(0);
	   return curDate.getDate();
}

function showWeek(week) {
	var wk = "";
	switch (parseInt(week)) {
		case 0:
			wk = "周日";
			break;
		case 1:
			wk = "周一";
			break;
		case 2:
			wk = "周二";
			break;
		case 3:
			wk = "周三";
			break;
		case 4:
			wk = "周四";
			break;
		case 5:
			wk = "周五";
			break;
		case 6:
			wk = "周六";
			break;
	}
	return wk;
}

// 当前日期
function timeRota(elem, elemt) {
	var now = new Date();
	var h = now.getFullYear();
	var m = (now.getMonth() + 1 > 9) ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
	var s = (now.getDate() > 9) ? now.getDate() : "0" + now.getDate();
	var a = new Array("日", "一", "二", "三", "四", "五", "六")
	var week = now.getDay();
	$(elem).val( h + "-" + m + "-" + s);
	$(elemt).text('周'+a[week]);
}

// 初始化日历
function my97Date(obj, targ) {
	var idForm = $(obj).attr('id');
	WdatePicker({
		el:idForm,
		doubleCalendar:true,
		minDate:'%y-%M-%d',
		maxDate:'#F{$dp.$D(\'form-time\',{d:60});}', //el:id
		firstDayOfWeek:1,
		isShowClear:false,
		firstDayOfWeek:1,
		onpicked:weekDay
	});
}

// 加载条
function loading(text, element,cls) {
	var html ='' ;
	html += '<div class="loading '+cls+'">'+
			'<div class="loading-img">'+
			'<img src="images/loading.gif">'+
			'</div>'+
			'<p>'+ text +'</p>'+
			'</div>';
	if(cls){
	  html += '<div class="mask"></div>'
	} 
	$(element).append(html);
	setTimeout(function(){
		$(".loading").remove();
		$('.mask').remove();
	},4000);
}

// 切换城市
function toggleCityName(el,elTo) {
	var forCity = $(el).val();
	var toCity = $(elTo).val();
	$(elTo).val(forCity);
	$(el).val(toCity);
}