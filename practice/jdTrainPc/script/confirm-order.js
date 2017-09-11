var sum = 1;
var resum = 3;

$(function() {
	// 坐席信息
	$(".ticket-type li").on("click", function() {
		var _this_ = $(this);
		var seat = _this_.attr("data-seat");
		if( seat == "true") {
			_this_.addClass("check").siblings("li").removeClass("check");
		}
	});

	// 添加乘客信息

	$("#add-passenger").on("click", function(event) {
		sum ++;
		if(sum > 5) {
			return;
		}
		$(".buttons").before('<div class="temple-item">'+
			'<div class="h-top clearfix">'+
				'<i class="icon-od icon-ticket pull-left">'+ sum +'</i>'+
				'<strong class="pull-left">成人票</strong>'+
				'<a href="javascript:;" class="clear pull-left" onclick="removeTemplate(this)">删除</a>'+
			'</div>'+
			'<ul class="form-box">'+
				'<li class="input-group clearfix">'+
					'<label class="item-label"><i>*</i>姓名：</label>'+
					'<div class="pull-left">'+
						'<input type="text" class="item-input user-name" placeholder="请按照购票所持证件填写乘客信息">'+
						'<a href="javascript:;" class="form-text-tips">'+
							'<span class="sm">说明</span>'+
							'<div class="common-toptips toptips-max">'+
								'<i class="bdnuarrow-bottom"><em></em><b></b></i>'+
								'<div class="toptips-content">'+
									'<p>1.乘客姓名与证件号码必须与乘车时所使用证件上的名字和号码一致，如有中文名，请填写中文名。</p>'+
									'<p>2.确认姓名中生僻字无法输入时，可用生僻字拼音或同音字替代。例如：“王鬳”可输入为“王yan”。</p>'+
									'<p>3.姓名较长，汉字与英文字符合计超过30个（1个汉字算2个字符）的，需按姓名中第一个汉字或英文字符开始按顺序连续输入30个字符（空格字符不输入），其中英文字符输入时不区别大小写。</p>'+
									'<p>4.姓名中有“.”或“•”时，请仔细辨析身份证件原件上的“.”或“•”，准确输入。</p>'+
								'</div>'+
							'</div>'+
						'</a>'+
					'</div>'+
					'<label class="label-save">'+
						'<input type="checkbox" checked="checked">保存为常用乘客'+
					'</label>'+
				'</li>'+
				'<li class="input-group clearfix">'+
					'<label class="item-label"><i>*</i>证件信息：</label>'+
					'<div class="pull-left">'+
						'<select  id="select-sel" class="item-sel">'+
							'<option value="1">身份证</option>'+
                     '<option value="B">护照</option>'+
                     '<option value="G">台湾通行证</option>'+
                     '<option value="C">港澳通行证</option>'+
						'</select>'+
						'<input type="text" class="item-input input-middle" placeholder="证件号码">'+
					'</div>'+
				'</li>'+
			'</ul>'+
		'</div>');
		$(".clear").show();
		$(".already-add").text(sum);
		$(".remain-add").text(resum --);
	});

	//input错误提示
	$(".user-name").on("focus", function() {
		var parentss = $(this).parent();
		if(parentss.hasClass("form-error-tip")) {
			parentss.removeClass("form-error-tip");
			$(this).siblings(".error-tip").hide();
		}
	});

	$(".sub-btn").on("click", function() {
		var errText = $(".form-box li").find("input");
		errText.parent(".pull-left").addClass("form-error-tip");
		errText.siblings(".error-tip").show()
	});
	


	// 固定右侧边栏
	$(window).scroll(function() {
		var scrollHeight = $(window).scrollTop();
		var hdHeight = $("#header").height();
		if(  scrollHeight > hdHeight  ) {
			$(".total-box").addClass("aside-fixed");
		} else {
			$(".total-box").removeClass("aside-fixed");
		}
	});
});

// 删除乘客信息
	function removeTemplate(obj) {
		$(obj).parents(".temple-item").remove();
		$(obj).siblings(".icon-ticket").text(sum--);
		$(".already-add").text(sum--);
		$(".remain-add").text(sum++ + 1);
		var text = $($(obj)).siblings(".icon-ticket").text();
		console.log(text);
		
		// if()
	}