//banner_click

$(function(){
	let a=0;
	let length;
	setInterval(function(){
		if(a<5){
			length=a*440;
			$('.banner-slide-img').animate({"left":-length});
			$('.banner-slide-control li').eq(a).addClass('banner-slide-control-active').siblings().removeClass('banner-slide-control-active')
			a++;
		}else{
			a=0;
			length=a*440;
			$('.banner-slide-img').animate({"left":-length});
			$('.banner-slide-control li').eq(a).addClass('banner-slide-control-active').siblings().removeClass('banner-slide-control-active')
		}

	},2000);

	$('.banner-slide-control li').click(function(){
		a=$(this).index();
		length=($(this).index())*440;
		$('.banner-slide-img').animate({"left":-length})
		$('.banner-slide-control li').eq(a).addClass('banner-slide-control-active').siblings().removeClass('banner-slide-control-active')
	})

})

//rank-tab
$(function(){
	function rankTab(athis,obj){
		let _this=athis;
		obj.eq(_this).addClass('rank-tab-boder').siblings().removeClass('rank-tab-boder')
	};

	$('.donghua .rank-tab span').hover(function(){
		rankTab($(this).index(),$('.donghua .rank-tab span'))
		console.log($(this).index())
	});
	$('.music .rank-tab span').hover(function(){
		rankTab($(this).index(),$('.music .rank-tab span'))
	});
	$('.dance .rank-tab span').hover(function(){
		rankTab($(this).index(),$('.dance .rank-tab span'))
	});
	$('.technology .rank-tab span').hover(function(){
		rankTab($(this).index(),$('.technology .rank-tab span'))
	});
	$('.life .rank-tab span').hover(function(){
		rankTab($(this).index(),$('.life .rank-tab span'))
	});


	function sec(athis,obj){
		let i=athis;
		if(i==0){
			obj.stop().animate({"margin-left":0+'px'},300)
		}else if(i==1){
			obj.stop().animate({"margin-left":-290+'px'},300)
		}

	};

	$('.donghua .rank-tab span').hover(function(){
		sec($(this).index(),$('.donghua .rank-list-wrap'));
	})
	$('.music .rank-tab span').hover(function(){
		sec($(this).index(),$('.music .rank-list-wrap'));
	})
	$('.dance .rank-tab span').hover(function(){
		sec($(this).index(),$('.dance .rank-list-wrap'));
	})
	$('.technology .rank-tab span').hover(function(){
		sec($(this).index(),$('.technology .rank-list-wrap'));
	})
	$('.life .rank-tab span').hover(function(){
		sec($(this).index(),$('.life .rank-list-wrap'));
	})



})


//nav_list
$(function(){
	$('.back-top').click(function(){
		console.log($('.donghua').position().top)
		$('body,html').animate({'scrollTop':0})
	});
	$(window).scroll(function(){
		
		console.log($('.new-comers-module').eq(0).position().top - $(window).scrollTop())
		for(let p=0;p<$('.new-comers-module').length;p++){
			
			let t = $('.new-comers-module').eq(p).position().top - $(window).scrollTop();
			if(t<100&&t>-400){
				$('.nav-list-item').eq(p).addClass('nav-list-item-hover').siblings().removeClass('nav-list-item-hover');
			}else{
				$('.nav-list-item').eq(p).removeClass('nav-list-item-hover');
			}
		}
	});
	$('.nav-list-item').click(function(){
		let i=$(this).index();
		let top=$('.new-comers-module').eq(i).position().top;
		$('body,html').stop().animate({'scrollTop':top})
	})
	
})



