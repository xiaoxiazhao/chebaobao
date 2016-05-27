$(function(){
		$(".list > .yi> a").click(function(){
	     // $(this).children("span").addClass("active").parents().siblings().find("span").removeClass("active");
	     $(".list > .yi> a").removeClass('change');
	     $(this).addClass('change');
	  	
		 if($(this).next().is(":visible")==false){
		 	$(this).children().addClass('active');
		 }
		 else{
		 	$(this).children().removeClass('active');
		 }
		
		
		
		$(this).parents().siblings().find(".er").hide(300);

		$(this).siblings(".er").toggle(300);
		$(this).parents().siblings().find(".er > li > .thr").hide().parents().siblings().find(".thr_nr").hide();
		
		})
		$(".er > li").click(function(event){
			event.stopPropagation() 
	        $(this).addClass("erActive").siblings().removeClass("erActive");
	        $(this).parents().siblings().find(".thr").hide(300);	
		    $(this).siblings(".thr").toggle(300);	
		})

		/*遮盖层和弹框*/

		$('.clickable').click(function(){
			$('.playWindow').show();
			$('.maskLayerL').hide();
			$('.maskLayerR').show();
		});
		$('.close').click(function(){
			$('.playWindow').hide();
			$('.maskLayerL').hide();
			$('.maskLayerR').hide();
			
			
		})
		/*全部倒入弹出框*/
		$('#memberLead').click(function(){
			$('.playWindowLead').show();
			parent.document.$('.maskLayerL').show();
			$('.maskLayerR').show();
		})
		$(".close").click(function(){
			$('.playWindowLead').hide();
			$('.maskLayerL').hide();
			$('.maskLayerR').hide();
		})
		$('.anniu').click(function(){
			alert(222)
		})
	})
