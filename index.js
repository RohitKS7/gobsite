// var loader = document.querySelector('#loader')

// function loadNow(opacity) {
//     if (opacity <= 0) {
//         displayContent();
//     } else {
//         loader.style.opacity = opacity;
//         window.setTimeout(function() {
//             loadNow(opacity - 1);
//         }, 5000);
//     }
// }

// function displayContent() {
//     loader.style.display = 'none';
//     document.getElementById('content').style.display = 'block';
// }

// document.addEventListener("DOMContentLoaded", function() {
//     loader = document.getElementById('loader');
//     loadNow(1);
// });

window.addEventListener("load", function () {
	// // video mute unmute function

	// const unmutebtn = document.querySelector('.unmute');
	// console.log(unmutebtn);
	// let vid = document.querySelector('.video-bg');
	// console.log(vid);

	// let icon = document.querySelector('.volicon');
	// console.log(icon);


	// const newIcon = document.createElement('div');
	// newIcon.innerHTML = `<img src="https://img.icons8.com/ios-filled/25/000000/high-volume--v1.png"/>`

	// newIcon.classList.add('icon2');

	// unmutebtn.addEventListener('click', ()=>{
	// 	if (vid.muted === true) {
	// 		vid.muted = false;
	// 		icon.parentNode.replaceChild(newIcon, icon);
	// 	} else {
	// 		vid.muted = true;
	// 		newIcon.parentNode.replaceChild( icon ,newIcon );
	// 	}
	// 	console.log('clicked');
	// })

	// const player = document.querySelector(".video-bg");
	// const skipbtn = document.querySelector('.skip-video');
	// const playbtn = document.querySelector('.play-video');

	// player.addEventListener("ended", function() {
	//     player.style.visibility = "hidden";
	// });

	// skipbtn.addEventListener("click", function() {
	// 	player.load();
	//     player.style.visibility = "hidden";
	// });

	// playbtn.addEventListener("click", function() {
	// 	player.play();
	//     player.style.visibility = "visible";
	// 	console.log('clicked');
	// });


	// logo and other hero section images animation
	// const timeline = gsap.timeline({defaults: {scale: 12, duration: 2, ease: "slow",  autoAlpha: 0,}})
	// timeline
	// .from (".logo", {delay: 61, }); 
	// timeline
	// .from (".hero-message", {});
	// timeline
	// .from (".mint", {});
	// timeline
	// .from (".wallet", {});


	// Rain Coming time -----------
	// setTimeout(() => {
	// const rain = document.querySelector('.rain-container');

	// rain.style.visibility = 'visible'

	// }, 60000);

	gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, TextPlugin);

	const pageContainer = document.querySelector(".site");

	/* SMOOTH SCROLL */
	const scroller = new LocomotiveScroll({
		el: pageContainer,
		smooth: true,
		tablet: { smooth: true },
		mobe: { smooth: true },
		// direction: "vertical",
	});

	scroller.on("scroll", ScrollTrigger.update);

	ScrollTrigger.scrollerProxy(pageContainer, {
		scrollTop(value) {
			return arguments.length
				? scroller.scrollTo(value, 0, 0)
				: scroller.scroll.instance.scroll.y;
		},
		scrollLeft(value) {
			return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.x;
		},
		getBoundingClientRect() {
			return {
				left: 0,
				top: 0,
				width: window.innerWidth,
				height: window.innerHeight
			};
		},
		pinType: pageContainer.style.transform ? "transform" : "fixed"
	});


	// Fake horizontal scroll effect 



	let panelsSection = document.querySelector("#panels");

	let panelsContainer = document.querySelector("#panels-container");



	/* Panels */
	const panels = gsap.utils.toArray("#panels-container .panel");
	let tween = gsap.to(panels, {
		xPercent: -100 * (panels.length - 1),
		ease: "none",
		scrollTrigger: {
			scroller: pageContainer,
			trigger: "#panels-container",
			pin: true,
			start: "top top",
			scrub: 1,
			end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
		}
	});


	// Text animation of horizontal scroll
	gsap.set('.pan', {opacity: 0, 
		'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', y: 150,}) 

	gsap.
	to(".pan", {
	y: 0, 
	opacity: 1, 
	stagger: 0.1,
	'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
	scrollTrigger: { 
	trigger: ".pan",
	scroller: pageContainer, 
	scrub: true,
	start: "top bottom ",
	end: "top center ",
	toggleActions:"play pause resume reset", 
	markers: {
	startColor: "blue",
	endColor: "green"
	}
	}
	})

	gsap.set('.image1', { scale: 0.5,
	opacity: 0,})

	gsap.
	to(".image1", {
	scale: 1,
	opacity: 1,
	scrollTrigger: { 
	trigger: ".image1",
	scroller: pageContainer,
	scrub: true,

	start: "top-=150px center+=100px ",
	end: "top-=100px top",
	toggleActions:"play play resume reset",

	markers: {
	startColor: "blue",
	endColor: "red"
	}
	}
	})


	gsap.from('.introo', {
		text: {
			value: "",
		},
		duration: 3,
		scrollTrigger: {
			trigger: ".introo",
			scroller: pageContainer,
			start: "top-=200px center ",
			end: "top-=100px top",
			toggleActions: "play play resume reset",
			markers: {
				startColor: "blue",
				endColor: "red"
			}
		}
	})

	gsap.to('.paragraph', {
		text: {
			value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum",
		},
		duration: 12,
		scrollTrigger: {
			trigger: ".paragraph",
			scroller: pageContainer,
			start: "top-=200px center ",
			end: "top-=100px top",
			toggleActions: "play play resume reset",
			markers: {
				startColor: "blue",
				endColor: "red"
			}
		}
	})



	gsap.set('.rohit', {
		opacity: 0,
		'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', y: 150,
	});


	const rohits = gsap.utils.toArray('.rohit');
	rohits.forEach(rohit => {
		gsap.to(rohit, {
			'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
			y: 0,
			opacity: 1,
			stagger: 0.2,
			scrollTrigger: {
			    scroller: pageContainer,
				trigger: rohit,
				scrub: true,
				containerAnimation: tween,
				start: "center 80%",
				end: "left 40%",
				// markers: {
				//     startColor: "yellow",
				//     endColor: "white"
				// }

			}
		})
	});



	// Blur to unblur effect on images
	let func = function iife(d) {
		const viewer = d.querySelectorAll(".viewer"),
			scene = d.querySelectorAll(".scene");
		//let js add the blur via a class on the body otherwise those without js get blurred images
		d.querySelector("body").classList.add('blur');

		scene.forEach((item, index) => {
			item.addEventListener("mousemove", (e) => {
				var halfViewer = viewer[index].offsetWidth / 2;
				var rect = e.target.getBoundingClientRect();
				var x = e.clientX - rect.left - halfViewer;
				var y = e.clientY - rect.top - halfViewer;
				viewer[index].style.transform = "translate(" + x + "px," + y + "px)";
				viewer[index].style.backgroundPosition = -x + "px" + " " + -y + "px";
			});
		});
	}(document);



	ScrollTrigger.addEventListener("refresh", () => scroller.update());

	ScrollTrigger.refresh();

});