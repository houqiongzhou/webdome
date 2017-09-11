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
	var now = new Date();
	var h = now.getFullYear();
	var m = (now.getMonth() + 1 > 9) ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
	var d = now.getDate();
	





	/*
	*筛选条件
	*/
	var filterBox = $('.sear-filter-type');
	var condition = filterBox.find('.select');
	filterBox.delegate('input[type="checkbox"]','click', function() {
		var that = $(this);
      var item = that.closest(".filter-item");
      var text = that.parent().text();
      // var text= that.attr("data-val");
      var check = that.prop("checked");
      var limitLabel = item.find(".no-limit-label");
      var flag = true;
      check ? limitLabel.removeClass("check") : (item.find("[type=checkbox]").each(function() {
          $(this).prop("checked") && (flag = false);
      }), 
        
		flag && limitLabel.addClass("check")), 
		check ? createSelected(text, that.val(), item.attr("data-flag")) : removeSelected(text);

	}).delegate(".shut", "click", function(event) {
        	event.preventDefault();
        	var that = $(this);
        	// var text = $.trim(that.prev().text());
        	var text = that.parent('.term').attr("data-val");
        	console.log(text);
        	var flag = $.trim(that.closest(".term").attr("data-flag"));
 			var cls = $("." + flag);
 			var len = $(cls).find("input[type='checkbox']:checked").length;
 			removeSelected(text, !1, flag);
 			
 			if(len == 0) {
 				cls.find(".no-limit-label").addClass("check");
 			}
 			//filterBox.find('.term').length || (condition.addClass('filter-hide'))
 			
 			
        
    }).delegate('.clear-text', 'click', function(event) {
    	 filterBox.find("[type=checkbox]").prop("checked", !1);
        $(this).parent('.select-info').find('span').remove();
        $('.select').addClass('filter-hide');
        filterBox.find(".no-limit-label").addClass("check");
      var text = $(this)
      removeSelectedText('')

    }).delegate(".filter-more", "click", function() {
		$(this).parent(".sear-filter-type").toggleClass("toggle-check");
		$(".filter-item:nth-child(n+3)").stop().slideToggle();
	})


//a'data-val的值' ｜d'data-flag的值'
	function createSelected (text, b, flag) {
		//  var element = $('.select-info').find('.term[data-flag="'+flag+'"]');

		// var term = $('<span class="term" ></span>');
		// var trem_child = $("<span></span>");
		// var trem_childs = $("<span></span>").text(text);
		// var shut = $('<a href="javascript:;" class="shut">×</a>');
		// term.attr("data-flag", flag),trem_child.attr("data-val", $.trim(text));
		// if(element.length > 0){
  //        var oldData = $(".select-info span[data-flag='"+ flag+"']");

		//    trem_child.append(trem_childs);
		//    oldData.append(trem_child)
		//  }
		//  else{

			
		// 	if(flag == 'car') {
		// 		term.text('车型：')
		// 	}
		// 	if(flag == 'sit') {
		// 		term.text('坐席：')
		// 	}
		// 	if(flag == 'begins') {
		// 		term.text('出发车站：')
		// 	}
		// 	if(flag == 'ends') {
		// 		term.text('到达车站：')
		// 	}
		// 	if(flag == 'beginstation') {
		// 		term.text('出发时段：')
		// 	}
		// 	if(flag == 'endstation') {
		// 		term.text('到达时段：')
		// 	}
		// 	if(flag == 'yesno') {
		// 		term.text('是否始发：')
		// 	}
			 
		// 	  	trem_child.append(trem_childs);
		// 		term.append(trem_child).append(shut);
		// 		$('.select-info').append(term);
		// 		condition.removeClass('filter-hide');
				
		//  }
		 
		 

			var term = $('<span class="term" ></span>');
			var trem_child = $("<span></span>").text(text);
			var shut = $('<a href="javascript:;" class="shut">×</a>');
	
			term.attr("data-flag", flag),term.attr("data-val", $.trim(text));
			term.append(trem_child).append(shut);
			$('.select-info').append(term);
			condition.removeClass('filter-hide');	
   }
	
	//清除所有己选条件
	function removeSelected(val, b, name) {
		if (val = $.trim(val), condition.find('[data-val="' + val + '"]').remove(), !b) {
         $('.filter-item').find('input[data-val="' + val + '"]').prop("checked", !1);
         var cls = $("." + name);
         0 == cls.find(".t-checkbox").length && 0 == cls.find('input[name="' + name + '"]:checked').length && cls.find(".no-limit-label").addClass("check")
     }
     
     	condition.find(".term").length || (condition.addClass('filter-hide'))
    }
    
    //选中的值放到己选条件里去
    function slectedText(val, b, flag) {
        var span = condition.find("[data-flag=" + flag + "]");
        span.length ? (span.attr("data-val", val), 
        span.find("span").text(val)) : createSelected(val, b, flag)
    }  
	
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
})(jQuery)