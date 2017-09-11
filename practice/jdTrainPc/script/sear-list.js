(function($){
	// 城市互换
	$(".icon-switch").on("click", function() {
		toggleCityName('#form-city', '#to-city');
	});

	// 调用城市插件
	var test = new Vcity.CitySelector({ input: 'form-city'});
	var test2 = new Vcity.CitySelector({ input: 'to-city'});

	// 默认出发日期
	timeRota('#form-time','.text-day');
	$('#form-time').on('click', function() {
		my97Date(this);
	})


	/*
	*7天日历
	*/

	//左右切换
	var i = $('#js-calendar');
	$('#next-day').on('click', function(a) {
		 a.preventDefault();
		var b = i.find('li.on').next().attr('data-val');

		x(b)
	});
	$('#prev-day').on('click', function(a) {
		 a.preventDefault();
		var b = i.find('li.on').prev().attr('data-val');
		x(b)

		
	});
	function x(val) {
		var b = i.find('[data-val="' + val + '"]');
        var c = 442;
        var d = b.outerWidth() - 1;
        var e = b.position().left;
        if (e > c) {
            var f = e - c;
            var g = f / d;
            g = Math.floor(g)
        } else {
            g = 0;
         }
        var h = g * d;
        i.find("ul").stop(!0, !0).animate({
            marginLeft: - h
        }, 500);

        b.addClass("on").siblings().removeClass("on")
	}



	/*
	*筛选条件
	*/
	var filterBox = $('#filter-content');
	$('.item-filter input[type="checkbox"]').prop('checked', !1);
	$('.item-filter .no-limit-label').addClass('check');
	// addTo找到添加箭头添加箭头
	$('.item-filter').slice(2).hide();
	
	// 单击input
	filterBox.on('click','input[type="checkbox"]',function() {
		var parents = $(this).parents('.item-filter');
		0 != parents.find('input[type="checkbox"]:checked').length ? parents.find('.no-limit-label').removeClass('check') : parents.find('.no-limit-label').addClass('check');
		$('#select').removeClass('hide');
		createEl()
	})

	// 单击不限
	filterBox.on('click', '.no-limit-label', function(event) {
		event.preventDefault();
		$(this).toggleClass("check"),
		$(this).hasClass("check") && $(this).parents(".item-filter").find("label").find("input").prop("checked", !1);
		var id = $(this).find('a').attr('data-id');
		$(".shut-filter").parent().eq(0).remove()
		0 == $('#select').find('.select-into').children().length && $('#select').addClass('hide');
		
	});

	// 单击更多筛选条件
	filterBox.on('click', '.filter-more', function() {
		$(this).parent(".sear-filter-type").toggleClass("toggle-check");
		$('.item-filter').slice(2).stop().slideToggle();	
	});

	//创建己选条件 
	function createEl() {
		var a = function() {
			var html = '';
			if(0 != $('.item-filter').eq(0).find('input[type="checkbox"]:checked').length) {
				var text = '';
				$('.item-filter').eq(0).find('input[type="checkbox"]:checked').each(function() {
					text += $(this).parent().text() + '；'
				});
				html += '<span class="term" data-id="0"><a href="javascript:;" class="shut-filter" onclick="shutFilter(this)">×</a> 车型：'+ text +'</span>';
			}
			return html;
		}();
		var b = function() {
			var html = '';
			if(0 != $('.item-filter').eq(1).find('input[type="checkbox"]:checked').length) {
				var text = '';
				$('.item-filter').eq(1).find('input[type="checkbox"]:checked').each(function() {
					text += $(this).parent().text() + '；'
				});
				html += '<span class="term" data-id="1"><a href="javascript:;" class="shut-filter" onclick="shutFilter(this)">×</a> 坐席：'+ text +'</span>';
			}
			return html;
		}();
		var c = function() {
			var html = '';
			if(0 != $('.item-filter').eq(2).find('input[type="checkbox"]:checked').length) {
				var text = '';
				$('.item-filter').eq(2).find('input[type="checkbox"]:checked').each(function() {
					text += $(this).parent().text() + '；'
				});
				html += '<span class="term" data-id="2"><a href="javascript:;" class="shut-filter" onclick="shutFilter(this)">×</a> 出发车站：'+ text +'</span>';
			}
			return html;
		}();
		var d = function() {
			var html = '';
			if(0 != $('.item-filter').eq(3).find('input[type="checkbox"]:checked').length) {
				var text = '';
				$('.item-filter').eq(3).find('input[type="checkbox"]:checked').each(function() {
					text += $(this).parent().text() + '；'
				});
				html += '<span class="term" data-id="3"><a href="javascript:;" class="shut-filter" onclick="shutFilter(this)">×</a> 到达车站：'+ text +'</span>';
			}
			return html;
		}();
		var e = function() {
			var html = '';
			if(0 != $('.item-filter').eq(4).find('input[type="checkbox"]:checked').length) {
				var text = '';
				$('.item-filter').eq(4).find('input[type="checkbox"]:checked').each(function() {
					text += $(this).parent().text() + '；'
				});
				html += '<span class="term" data-id="4"><a href="javascript:;" class="shut-filter" onclick="shutFilter(this)">×</a> 出发时段'+ text +'</span>';
			}
			return html;
		}();
		var f = function() {
			var html = '';
			if(0 != $('.item-filter').eq(5).find('input[type="checkbox"]:checked').length) {
				var text = '';
				$('.item-filter').eq(5).find('input[type="checkbox"]:checked').each(function() {
					text += $(this).parent().text() + '；'
				});
				html += '<span class="term" data-id="5"><a href="javascript:;" class="shut-filter" onclick="shutFilter(this)">×</a> 到达时段'+ text +'</span>';
			}
			return html;
		}();
		var g = function() {
			var html = '';
			if(0 != $('.item-filter').eq(6).find('input[type="checkbox"]:checked').length) {
				var text = '';
				$('.item-filter').eq(6).find('input[type="checkbox"]:checked').each(function() {
					text += $(this).parent().text() + '；'
				});
				html += '<span class="term" data-id="6"><a href="javascript:;" class="shut-filter" onclick="shutFilter(this)">×</a> 是否始发：'+ text +'</span>';
			}
			return html;
		}();
		 var h = '<span class="train-type">您己选择：</span><div style="overflow:hidden;" class="select-into">'  + a + b + c + d + e + f + g +"</div>";
		 $('#select').html("" == a && "" == b && "" == c && "" == d && "" == e && "" == f && "" == g ? "" : h)
	};

	/*
	*经停站
	*/
	$(".car-stop").on("click", function() {
		var _this_ = $(this);
		_this_.toggleClass("on");
		_this_.parents(".item-tr-th").siblings(".childen-table").stop().slideToggle();
		_this_.parents("li").siblings(".item-tr").find(".car-stop").removeClass("on");
		_this_.parents("li").siblings().find(".childen-table").stop().slideUp();
		
	});
	loading('正在为您加载火车票数据，请稍后…', $('.car-list-content'));
})(jQuery);

// 删除己选条件
function shutFilter(obj) {
	var parent = $(obj).parent('.term');
	var id = parent.attr('data-id');
	parent.remove();
	id = parseInt(id);
	// $(".item-filter").eq(id).find(".no-limit-label").click()
	$(".item-filter").eq(id).find("label").find("input").prop("checked", !1) && $(".item-filter").eq(id).find(".no-limit-label").addClass('check');
	0 == $('#select').find('.select-into span').length && $('#select').addClass('hide');
}