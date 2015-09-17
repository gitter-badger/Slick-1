 // make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

// main app
var SUPApp = SUPApp || {};

// Dark UI Interaction class
SUPApp.UIInteraction = function( customSetting ) {

	// overwrite default settings
	var settings = $.extend( {

	}, 
	customSetting || {});

	// vars
	var self = this;

	// init
	this.init = function() {

		initSlick();
	};
	
	var initSlick = function(){

		var slider = $( '.slick' ).slick({
			fade:true,
			cssEase: 'ease',
			arrows:false,
			autoplay:false,
			autoplaySpeed:1000
		});

		$( '.choice li' ).each( function(){

			var idgo = 0;

			$(this).on('click',function(e){

				e.preventDefault();
				e.stopPropagation();

				idgo = $(this).attr('data-go');

				$( '.slick' ).slick('slickGoTo', parseInt(idgo));
				$( '.slick' ).slick('slickSetOption','autoplay',true);
			});
		});

		// On before slide change
		$(slider).on('afterChange', function(event, slick, currentSlide){

			console.log(currentSlide);
			console.log($('.content[data-slick-index="'+ currentSlide +'"]').attr('data-end'));

			if ( $('.content[data-slick-index="'+ currentSlide +'"]').attr('data-end') ) {
				console.log('bic');
				$( slider ).slick('slickSetOption','autoplay',false);
				$( slider ).slick('slickGoTo',15);
			}
		});
	};
};
