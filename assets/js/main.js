(function ($) {
	"use strict";
	$(document).ready(function () {
		// lenis
		const lenis = new Lenis({
			duration: 1.5,
			normalizeWheel: true,
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		// offcanvas menu 
		$(".mobile-nav > ul > li > a").click(function (e) {
			e.preventDefault();
			let subMenu = $(this).next(".sub-menu");
			$(".mobile-nav .sub-menu").not(subMenu).slideUp();
			$(".mobile-nav > ul > li > a").not(this).removeClass('rotate active');
			$(this).toggleClass('rotate active');
			subMenu.stop(true, true).slideToggle();
		});

		// nice select 
		$('select').niceSelect();

		// counter up
		// $('.counter').counterUp();


		//   magnific Popup
		$(".trigger-popup").magnificPopup({
			type: "iframe",
			iframe: {
				markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' + "</div>",
				patterns: {
					youtube: {
						index: "youtube.com/",
						id: "v=",
						src: "https://www.youtube.com/embed/%id%?autoplay=1",
					},
				},
			},
		});

		// input file trigger
		$(".custom-file-btn").click(function(){
			$("#resume").click();
		});
		$("#resume").change(function(){
			let fileName = $(this).val().split("\\").pop();
		    $(".pdf-icon").removeClass("d-none");
		    $(".pdf-icon").addClass("d-block");
			$("#fileName").text(fileName);
		});

		// swiper
		let projectSlider = new Swiper(".featured-project", {
			slidesPerView: 1,
			centeredSlides: true,
			autoplay: {
				delay: 5000,
			},
			spaceBetween: 50,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
		let singleProject = new Swiper(".single-project-slider", {
			cssMode: true,
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
			pagination: {
			  el: ".swiper-pagination",
			},
			mousewheel: true,
			keyboard: true,
		  });

		gsap.registerPlugin(ScrollTrigger);

		var tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.about-us',
				start: 'top 100%',
				end: 'bottom 40%',
				scrub: true,
			}
		});

		// Set initial opacity to 0
		tl.from('.about-img', {
			opacity: 0,
			y: 250,
		});
	});
})(jQuery);