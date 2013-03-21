window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});



(function( window, $, undefined ) {
	
	/*
	* smartresize: debounced resize event for jQuery
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery.smartresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/

	var $event = $.event, resizeTimeout;

	$event.special.smartresize 	= {
		setup: function() {
			$(this).bind( "resize", $event.special.smartresize.handler );
		},
		teardown: function() {
			$(this).unbind( "resize", $event.special.smartresize.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args 	= arguments;

			// set correct event type
			event.type = "smartresize";

			if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
			resizeTimeout = setTimeout(function() {
				jQuery.event.handle.apply( context, args );
			}, execAsap === "execAsap"? 0 : 100 );
		}
	};

	$.fn.smartresize 			= function( fn ) {
		return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
	};
	
	$.Slideshow 				= function( options, element ) {
	
		this.$el			= $( element );
		
		/***** images ****/
		
		// list of image items
		this.$list			= this.$el.find('ul.ei-slider-large');
		// image items
		this.$imgItems		= this.$list.children('li');
		// total number of items
		this.itemsCount		= this.$imgItems.length;
		// images
		this.$images		= this.$imgItems.find('img:first');
		
		/***** thumbs ****/
		
		// thumbs wrapper
		this.$sliderthumbs	= this.$el.find('ul.ei-slider-thumbs').hide();
		// slider elements
		this.$sliderElems	= this.$sliderthumbs.children('li');
		// sliding div
		this.$sliderElem	= this.$sliderthumbs.children('li.ei-slider-element');
		// thumbs
		this.$thumbs		= this.$sliderElems.not('.ei-slider-element');
		
		// initialize slideshow
		this._init( options );
		
	};
	
	$.Slideshow.defaults 		= {
		// animation types:
		// "sides" : new slides will slide in from left / right
		// "center": new slides will appear in the center
		animation			: 'sides', // sides || center
		// if true the slider will automatically slide, and it will only stop if the user clicks on a thumb
		autoplay			: false,
		// interval for the slideshow
		slideshow_interval	: 3000,
		// speed for the sliding animation
		speed			: 800,
		// easing for the sliding animation
		easing			: '',
		// percentage of speed for the titles animation. Speed will be speed * titlesFactor
		titlesFactor		: 0.60,
		// titles animation speed
		titlespeed			: 800,
		// titles animation easing
		titleeasing			: '',
		// maximum width for the thumbs in pixels
		thumbMaxWidth		: 250
    };
	
	$.Slideshow.prototype 		= {
		_init 				: function( options ) {
			
			this.options 		= $.extend( true, {}, $.Slideshow.defaults, options );
			
			// set the opacity of the title elements and the image items
			this.$imgItems.css( 'opacity', 0 );
			this.$imgItems.find('div.ei-title > *').css( 'opacity', 0 );
			
			// index of current visible slider
			this.current		= 0;
			
			var _self			= this;
			
			// preload images
			// add loading status
			this.$loading		= $('<div class="ei-slider-loading">Loading</div>').prependTo( _self.$el );
			
			$.when( this._preloadImages() ).done( function() {
				
				// hide loading status
				_self.$loading.hide();
				
				// calculate size and position for each image
				_self._setImagesSize();
				
				// configure thumbs container
				_self._initThumbs();
				
				// show first
				_self.$imgItems.eq( _self.current ).css({
					'opacity' 	: 1,
					'z-index'	: 10
				}).show().find('div.ei-title > *').css( 'opacity', 1 );
				
				// if autoplay is true
				if( _self.options.autoplay ) {
				
					_self._startSlideshow();
				
				}
				
				// initialize the events
				_self._initEvents();
			
			});
			
		},
		_preloadImages		: function() {
			
			// preloads all the large images
			
			var _self	= this,
				loaded	= 0;
			
			return $.Deferred(
			
				function(dfd) {
			
					_self.$images.each( function( i ) {
						
						$('<img/>').load( function() {
						
							if( ++loaded === _self.itemsCount ) {
							
								dfd.resolve();
								
							}
						
						}).attr( 'src', $(this).attr('src') );
					
					});
					
				}
				
			).promise();
			
		},
		_setImagesSize		: function() {
			
			// save ei-slider's width
			this.elWidth	= this.$el.width();
			
			var _self	= this;
			
			this.$images.each( function( i ) {
				
				var $img	= $(this);
					imgDim	= _self._getImageDim( $img.attr('src') );
					
				$img.css({
					width		: imgDim.width,
					height		: imgDim.height,
					marginLeft	: imgDim.left,
					marginTop	: imgDim.top
				});
				
			});
		
		},
		_getImageDim		: function( src ) {
			
			var $img    = new Image();
							
			$img.src    = src;
					
			var c_w		= this.elWidth,
				c_h		= this.$el.height(),
				r_w		= c_h / c_w,
				
				i_w		= $img.width,
				i_h		= $img.height,
				r_i		= i_h / i_w,
				new_w, new_h, new_left, new_top;
					
			if( r_w > r_i ) {
				
				new_h	= c_h;
				new_w	= c_h / r_i;
			
			}
			else {
			
				new_h	= c_w * r_i;
				new_w	= c_w;
			
			}
					
			return {
				width	: new_w,
				height	: new_h,
				left	: ( c_w - new_w ) / 2,
				top		: ( c_h - new_h ) / 2
			};
		
		},
		_initThumbs			: function() {
		
			// set the max-width of the slider elements to the one set in the plugin's options
			// also, the width of each slider element will be 100% / total number of elements
			this.$sliderElems.css({
				'max-width' : this.options.thumbMaxWidth + 'px',
				'width'		: 100 / this.itemsCount + '%'
			});
			
			// set the max-width of the slider and show it
			this.$sliderthumbs.css( 'max-width', this.options.thumbMaxWidth * this.itemsCount + 'px' ).show();
			
		},
		_startSlideshow		: function() {
		
			var _self	= this;
			
			this.slideshow	= setTimeout( function() {
				
				var pos;
				
				( _self.current === _self.itemsCount - 1 ) ? pos = 0 : pos = _self.current + 1;
				
				_self._slideTo( pos );
				
				if( _self.options.autoplay ) {
				
					_self._startSlideshow();
				
				}
			
			}, this.options.slideshow_interval);
		
		},
		// shows the clicked thumb's slide
		_slideTo			: function( pos ) {
			
			// return if clicking the same element or if currently animating
			if( pos === this.current || this.isAnimating )
				return false;
			
			this.isAnimating	= true;
			
			var $currentSlide	= this.$imgItems.eq( this.current ),
				$nextSlide		= this.$imgItems.eq( pos ),
				_self			= this,
				
				preCSS			= {zIndex	: 10},
				animCSS			= {opacity	: 1};
			
			// new slide will slide in from left or right side
			if( this.options.animation === 'sides' ) {
				
				preCSS.left		= ( pos > this.current ) ? -1 * this.elWidth : this.elWidth;
				animCSS.left	= 0;
			
			}	
			
			// titles animation
			$nextSlide.find('div.ei-title > h2')
					  .css( 'margin-right', 80 + 'px' )
					  .stop()
					  .delay( this.options.speed * this.options.titlesFactor )
					  .animate({ marginRight : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )
					  .end()
					  .find('div.ei-title > h3')
					  .css( 'margin-right', -80 + 'px' )
					  .stop()
					  .delay( this.options.speed * this.options.titlesFactor )
					  .animate({ marginRight : 0 + 'px', opacity : 1 }, this.options.titlespeed, this.options.titleeasing )
			
			$.when(
				
				// fade out current titles
				$currentSlide.css( 'z-index' , 1 ).find('div.ei-title > *').stop().fadeOut( this.options.speed / 2, function() {
					// reset style
					$(this).show().css( 'opacity', 0 );	
				}),
				
				// animate next slide in
				$nextSlide.css( preCSS ).stop().animate( animCSS, this.options.speed, this.options.easing ),
				
				// "sliding div" moves to new position
				this.$sliderElem.stop().animate({
					left	: this.$thumbs.eq( pos ).position().left
				}, this.options.speed )
				
			).done( function() {
				
				// reset values
				$currentSlide.css( 'opacity' , 0 ).find('div.ei-title > *').css( 'opacity', 0 );
					_self.current	= pos;
					_self.isAnimating		= false;
				
				});
				
		},
		_initEvents			: function() {
			
			var _self	= this;
			
			// window resize
			$(window).on( 'smartresize.eislideshow', function( event ) {
				
				// resize the images
				_self._setImagesSize();
			
				// reset position of thumbs sliding div
				_self.$sliderElem.css( 'left', _self.$thumbs.eq( _self.current ).position().left );
			
			});
			
			// click the thumbs
			this.$thumbs.on( 'click.eislideshow', function( event ) {
				
				if( _self.options.autoplay ) {
				
					clearTimeout( _self.slideshow );
					_self.options.autoplay	= false;
				
				}
				
				var $thumb	= $(this),
					idx		= $thumb.index() - 1; // exclude sliding div
					
				_self._slideTo( idx );
				
				return false;
			
			});
			
		}
	};
	
	var logError 				= function( message ) {
		
		if ( this.console ) {
			
			console.error( message );
			
		}
		
	};
	
	$.fn.eislideshow			= function( options ) {
	
		if ( typeof options === 'string' ) {
		
			var args = Array.prototype.slice.call( arguments, 1 );

			this.each(function() {
			
				var instance = $.data( this, 'eislideshow' );
				
				if ( !instance ) {
					logError( "cannot call methods on eislideshow prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for eislideshow instance" );
					return;
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
			
				var instance = $.data( this, 'eislideshow' );
				if ( !instance ) {
					$.data( this, 'eislideshow', new $.Slideshow( options, this ) );
				}
			
			});
		
		}
		
		return this;
		
	};
	
})( window, jQuery );


/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 *
 * Copyright 2010, Steven Wanderski
 * http://bxcreative.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
(function(a){a.fn.bxSlider=function(b){function H(){I(b.startingSlide);if(b.mode=="horizontal"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+l+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+l+'px;"></div>').css({width:"999999px",position:"relative",left:"-"+(b.infiniteLoop?y:0)+"px"});e.children(b.childSelector).css({width:j,"float":"left",listStyle:"none"});h=e.parent().parent();g.addClass("bx-child")}else if(b.mode=="vertical"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+v+"px; height:"+m+'px; position:relative; overflow:hidden;"></div>').css({height:"999999px",position:"relative",top:"-"+z+"px"});e.children(b.childSelector).css({listStyle:"none",height:w});h=e.parent().parent();g.addClass("bx-child")}else if(b.mode=="fade"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+w+"px; width:"+v+'px; position:relative; overflow:hidden;"></div>');e.children(b.childSelector).css({listStyle:"none",position:"absolute",top:0,left:0,zIndex:98});h=e.parent().parent();g.not(":eq("+x+")").fadeTo(0,0);g.eq(x).css("zIndex",99)}if(b.captions&&b.captionsSelector==null){h.append('<div class="bx-captions"></div>')}}function I(){if((b.mode=="horizontal"||b.mode=="vertical")&&b.infiniteLoop){var c=Z(g,0,b.moveSlideQty,"backward");a.each(c,function(b){e.prepend(a(this))});var d=g.length+b.moveSlideQty-1;var f=g.length-b.displaySlideQty;var h=d-f;var i=Z(g,0,h,"forward");if(b.infiniteLoop){a.each(i,function(b){e.append(a(this))})}}}function J(){if(b.nextImage!=""){nextContent=b.nextImage;nextType="image"}else{nextContent=b.nextText;nextType="text"}if(b.prevImage!=""){prevContent=b.prevImage;prevType="image"}else{prevContent=b.prevText;prevType="text"}R(nextType,nextContent,prevType,prevContent)}function K(){if(b.auto){clearInterval(o);if(!b.infiniteLoop){if(b.autoDirection=="next"){o=setInterval(function(){x+=b.moveSlideQty;if(x>G){x=x%g.length}d.goToSlide(x,false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){x-=b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}}d.goToSlide(x,false)},b.pause)}}else{if(b.autoDirection=="next"){o=setInterval(function(){d.goToNextSlide(false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){d.goToPreviousSlide(false)},b.pause)}}}else if(b.ticker){b.tickerSpeed*=10;a(".bx-child",h).each(function(b){A+=a(this).width();B+=a(this).height()});if(b.tickerDirection=="prev"&&b.mode=="horizontal"){e.css("left","-"+(A+y)+"px")}else if(b.tickerDirection=="prev"&&b.mode=="vertical"){e.css("top","-"+(B+z)+"px")}if(b.mode=="horizontal"){C=parseInt(e.css("left"));L(C,A,b.tickerSpeed)}else if(b.mode=="vertical"){D=parseInt(e.css("top"));L(D,B,b.tickerSpeed)}if(b.tickerHover){O()}}}function L(a,c,d){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){e.animate({left:"-="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({left:"+="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){e.animate({top:"-="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({top:"+="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}}}function M(){if(b.startImage!=""){startContent=b.startImage;startType="image"}else{startContent=b.startText;startType="text"}if(b.stopImage!=""){stopContent=b.stopImage;stopType="image"}else{stopContent=b.stopText;stopType="text"}U(startType,startContent,stopType,stopContent)}function N(){h.children(".bx-window").hover(function(){if(t){d.suspendShow(false)}},function(){if(t){d.restartShow(false)}})}function O(){e.hover(function(){if(t){d.stopTicker(false)}},function(){if(t){d.startTicker(false)}})}function P(){g.not(":eq("+x+")").fadeTo(b.speed,0).css("zIndex",98);g.eq(x).css("zIndex",99).fadeTo(b.speed,1,function(){E=false;if(jQuery.browser.msie){g.eq(x).get(0).style.removeAttribute("filter")}b.onAfterSlide(x,g.length,g.eq(x))})}function Q(c){if(b.pagerType=="full"&&b.pager){a("a",n).removeClass(b.pagerActiveClass);a("a",n).eq(c).addClass(b.pagerActiveClass)}else if(b.pagerType=="short"&&b.pager){a(".bx-pager-current",n).html(x+1)}}function R(c,e,f,g){var i=a('<a href="" class="bx-next"></a>');var j=a('<a href="" class="bx-prev"></a>');if(c=="text"){i.html(e)}else{i.html('<img src="'+e+'" />')}if(f=="text"){j.html(g)}else{j.html('<img src="'+g+'" />')}if(b.prevSelector){a(b.prevSelector).append(j)}else{h.append(j)}if(b.nextSelector){a(b.nextSelector).append(i)}else{h.append(i)}i.click(function(){d.goToNextSlide();return false});j.click(function(){d.goToPreviousSlide();return false})}function S(c){var e=g.length;if(b.moveSlideQty>1){if(g.length%b.moveSlideQty!=0){e=Math.ceil(g.length/b.moveSlideQty)}else{e=g.length/b.moveSlideQty}}var f="";if(b.buildPager){for(var i=0;i<e;i++){f+=b.buildPager(i,g.eq(i*b.moveSlideQty))}}else if(c=="full"){for(var i=1;i<=e;i++){f+='<a href="" class="pager-link pager-'+i+'">'+i+"</a>"}}else if(c=="short"){f='<span class="bx-pager-current">'+(b.startingSlide+1)+"</span> "+b.pagerShortSeparator+' <span class="bx-pager-total">'+g.length+"</span>"}if(b.pagerSelector){a(b.pagerSelector).append(f);n=a(b.pagerSelector)}else{var j=a('<div class="bx-pager"></div>');j.append(f);if(b.pagerLocation=="top"){h.prepend(j)}else if(b.pagerLocation=="bottom"){h.append(j)}n=h.children(".bx-pager")}n.children().click(function(){if(b.pagerType=="full"){var a=n.children().index(this);if(b.moveSlideQty>1){a*=b.moveSlideQty}d.goToSlide(a)}return false})}function T(){var c=a("img",g.eq(x)).attr("title");if(c!=""){if(b.captionsSelector){a(b.captionsSelector).html(c)}else{h.children(".bx-captions").html(c)}}else{if(b.captionsSelector){a(b.captionsSelector).html(" ")}else{h.children(".bx-captions").html(" ")}}}function U(c,e,f,g){p=a('<a href="" class="bx-start"></a>');if(c=="text"){r=e}else{r='<img src="'+e+'" />'}if(f=="text"){s=g}else{s='<img src="'+g+'" />'}if(b.autoControlsSelector){a(b.autoControlsSelector).append(p)}else{h.append('<div class="bx-auto"></div>');h.children(".bx-auto").html(p)}p.click(function(){if(b.ticker){if(a(this).hasClass("stop")){d.stopTicker()}else if(a(this).hasClass("start")){d.startTicker()}}else{if(a(this).hasClass("stop")){d.stopShow(true)}else if(a(this).hasClass("start")){d.startShow(true)}}return false})}function V(){if(!b.infiniteLoop&&b.hideControlOnEnd){if(x==F){h.children(".bx-prev").hide()}else{h.children(".bx-prev").show()}var a=Math.floor(G/b.displaySlideQty)*b.displaySlideQty;if(x>=a){h.children(".bx-next").hide()}else{h.children(".bx-next").show()}}}function W(a,b){var c=e.find(" > .bx-child").eq(a).position();return b=="left"?c.left:c.top}function X(){var a=i.outerWidth()*b.displaySlideQty;return a}function Y(){var a=i.outerHeight()*b.displaySlideQty;return a}function Z(b,c,d,e){var f=[];var g=d;var h=false;if(e=="backward"){b=a.makeArray(b);b.reverse()}while(g>0){a.each(b,function(b,d){if(g>0){if(!h){if(b==c){h=true;f.push(a(this).clone());g--}}else{f.push(a(this).clone());g--}}else{return false}})}return f}var c={mode:"horizontal",childSelector:"",infiniteLoop:true,hideControlOnEnd:false,controls:true,speed:500,easing:"swing",pager:false,pagerSelector:null,pagerType:"full",pagerLocation:"bottom",pagerShortSeparator:"/",pagerActiveClass:"pager-active",nextText:"next",nextImage:"",nextSelector:null,prevText:"prev",prevImage:"",prevSelector:null,captions:false,captionsSelector:null,auto:false,autoDirection:"next",autoControls:false,autoControlsSelector:null,autoStart:true,autoHover:false,autoDelay:0,pause:3e3,startText:"start",startImage:"",stopText:"stop",stopImage:"",ticker:false,tickerSpeed:5e3,tickerDirection:"next",tickerHover:false,wrapperClass:"bx-wrapper",startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:false,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null};var b=a.extend(c,b);var d=this;var e="";var f="";var g="";var h="";var i="";var j="";var k="";var l="";var m="";var n="";var o="";var p="";var q="";var r="";var s="";var t=true;var u=false;var v=0;var w=0;var x=0;var y=0;var z=0;var A=0;var B=0;var C=0;var D=0;var E=false;var F=0;var G=g.length-1;this.goToSlide=function(a,c){if(!E){E=true;x=a;b.onBeforeSlide(x,g.length,g.eq(x));if(typeof c=="undefined"){var c=true}if(c){if(b.auto){d.stopShow(true)}}slide=a;if(slide==F){b.onFirstSlide(x,g.length,g.eq(x))}if(slide==G){b.onLastSlide(x,g.length,g.eq(x))}if(b.mode=="horizontal"){e.animate({left:"-"+W(slide,"left")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){e.animate({top:"-"+W(slide,"top")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}V();if(b.moveSlideQty>1){a=Math.floor(a/b.moveSlideQty)}Q(a);T()}};this.goToNextSlide=function(a){if(typeof a=="undefined"){var a=true}if(a){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var c=false;x=x+b.moveSlideQty;if(x<=G){V();b.onNextSlide(x,g.length,g.eq(x));d.goToSlide(x)}else{x-=b.moveSlideQty}}}else{if(!E){E=true;var c=false;x=x+b.moveSlideQty;if(x>G){x=x%g.length;c=true}b.onNextSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var f=b.moveSlideQty*k;e.animate({left:"-="+f+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var h=b.moveSlideQty*w;e.animate({top:"-="+h+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToPreviousSlide=function(a){if(typeof a=="undefined"){var a=true}if(a){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var c=false;x=x-b.moveSlideQty;if(x<0){x=0;if(b.hideControlOnEnd){h.children(".bx-prev").hide()}}V();b.onPrevSlide(x,g.length,g.eq(x));d.goToSlide(x)}}else{if(!E){E=true;var c=false;x=x-b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}c=true}b.onPrevSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var f=b.moveSlideQty*k;e.animate({left:"+="+f+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var i=b.moveSlideQty*w;e.animate({top:"+="+i+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToFirstSlide=function(a){if(typeof a=="undefined"){var a=true}d.goToSlide(F,a)};this.goToLastSlide=function(){if(typeof a=="undefined"){var a=true}d.goToSlide(G,a)};this.getCurrentSlide=function(){return x};this.getSlideCount=function(){return g.length};this.suspendShow=function(a){clearInterval(o);if(typeof a=="undefined"){var a=true}if(a&&b.autoControls){p.html(r).removeClass("stop").addClass("start")}};this.restartShow=function(a){if(typeof a=="undefined"){var a=true}if(t){K()}if(a&&b.autoControls){p.html(s).removeClass("start").addClass("stop")}};this.stopShow=function(a){t=false;this.suspendShow(a)};this.startShow=function(a){t=true;this.restartShow(a)};this.stopTicker=function(a){e.stop();if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(r).removeClass("stop").addClass("start");t=false}};this.startTicker=function(a){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){var c=parseInt(e.css("left"));var d=A+c+g.eq(0).width()}else if(b.tickerDirection=="prev"){var c=-parseInt(e.css("left"));var d=c-g.eq(0).width()}var f=d*b.tickerSpeed/A;L(C,d,f)}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){var h=parseInt(e.css("top"));var d=B+h+g.eq(0).height()}else if(b.tickerDirection=="prev"){var h=-parseInt(e.css("top"));var d=h-g.eq(0).height()}var f=d*b.tickerSpeed/B;L(D,d,f);if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(s).removeClass("start").addClass("stop");t=true}}};this.initShow=function(){e=a(this);f=e.clone();g=e.children(b.childSelector);h="";i=e.children(b.childSelector+":first");j=i.width();v=0;k=i.outerWidth();w=0;l=X();m=Y();E=false;n="";x=0;y=0;z=0;o="";p="";q="";r="";s="";t=true;u=false;A=0;B=0;C=0;D=0;F=0;G=g.length-1;g.each(function(b){if(a(this).outerHeight()>w){w=a(this).outerHeight()}if(a(this).outerWidth()>v){v=a(this).outerWidth()}});if(b.randomStart){var c=Math.floor(Math.random()*g.length);x=c;y=k*(b.moveSlideQty+c);z=w*(b.moveSlideQty+c)}else{x=b.startingSlide;y=k*(b.moveSlideQty+b.startingSlide);z=w*(b.moveSlideQty+b.startingSlide)}H();if(b.pager&&!b.ticker){if(b.pagerType=="full"){S("full")}else if(b.pagerType=="short"){S("short")}}if(b.controls&&!b.ticker&&g.length>1){J()}if(b.auto||b.ticker){if(b.autoControls){M()}if(b.autoStart){t=false;setTimeout(function(){d.startShow(true)},b.autoDelay)}else{d.stopShow(true)}if(b.autoHover&&!b.ticker){N()}}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}V();if(b.captions){T()}b.onAfterSlide(x,g.length,g.eq(x))};this.destroyShow=function(){clearInterval(o);h.children(".bx-next, .bx-prev, .bx-pager, .bx-auto").remove();e.unwrap().unwrap().removeAttr("style");e.children(b.childSelector).removeAttr("style").not(".bx-child").remove();g.removeClass("bx-child")};this.reloadShow=function(){d.destroyShow();d.initShow()};this.each(function(){if(a(this).children().length>0){d.initShow()}});return this};jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var a=parseFloat(jQuery.css(this.elem,this.prop));return a}})(jQuery)


jQuery(document).ready(function(){

  //prepend span tag to H1
  jQuery("#nav-container .joomla-nav li a").prepend("<span></span>");
  

    jQuery('#mycarouselop').bxSlider({
        mode: 'vertical',
        auto: true,
        autoHover: true
    });

    jQuery('#mycarousel').bxSlider({
        auto: true,
        autoHover: true,
        displaySlideQty: 5,
        moveSlideQty: 1
    });
    
    
    jQuery("img.grey").hover(
            function() {
                jQuery(this).stop().animate({"opacity": "0"}, "slow");
            },
            function() {
                jQuery(this).stop().animate({"opacity": "1"}, "slow");
        }); 


	
});



