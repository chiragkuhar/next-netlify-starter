<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="google-site-verification" content="5uFYFlmCaMotPqVXKLiYWB_ALAF3nF09Ezgv6v2DElY" />
	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-155551148-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-155551148-1');
</script>

	<style type="text/css">
		/*---------particle.js css--------*/
		html, body {
			height: 100%;
			background-color: black;
		}
		body{
			font:normal 75% Arial, Helvetica;
		}
		canvas{
			display: block;
			/* vertical-align: bottom; */
		}
		/* ---- particles.js container ---- */
		#particles-js{
			/* position: absolute; */
			/* top: 0; */
			/* width: 100%; */
			background-color: black;
			height: 20%;
			/* background-image: url(""); */
			/* background-repeat: no-repeat; */
			/* background-size: cover; */
			/* background-position: 50% 50%; */
		}
		#content {
			padding-top: 30px;
			height: 80%;
			background-color: black;
		}
		#description {
			padding-bottom: 66px;
			text-align: justify;
		}
		.fade_rule {
        height: 1px;
        width: 90%;
        margin: 0 auto;
        background-image: linear-gradient(top , black 20%, white 50%, black 90%);
        background-image: -o-linear-gradient(top , black 20%, white 50%, black 90%);
        background-image: -moz-linear-gradient(top , black 20%, white 50%, black 90%);
        background-image: -webkit-linear-gradient(top , black 20%, white 50%, black 90%);
        background-image: -ms-linear-gradient(top , black 20%, white 50%, black 90%);
        background-image: -webkit-gradient( linear, top, bottom, color-stop(0.2, black), color-stop(0.5, white), color-stop(0.9, black));
	}
	.desc {
		animation: fadeint 1.5s;
	}
	@keyframes fadeint {
		from { opacity: 0;
						transform: translateY(-20px);}
		to   { opacity: 1;
						transform: translateY(0px);}
	}

	</style>
	<title>About | Tanmay Agarwal</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#000000" />
	<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link rel="icon" href="logo.png" type="image/x-icon">
	<link rel="canonical" href="https://tanmayag97.github.io/">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>
<body>
	<div id="particles-js">

	</div>
	<div id="content" class="container-fluid" style="text-align: center; background-color:black;">
		<!-- photo + greeting -->
		<!-- <div class="container display-3" style="color:white"><img id="photo1" src="goa.jpg"></div><br><br> -->

		<div class="desc container" id="description" style="color: #AAA; max-width:600px;">
			<p>Hello, I'm Tanmay Agarwal. Needless to say, I thank you for taking out time to read this; I'll try my best to 					make it all worth your while.</p>
			<p>I'm a final year engineering student majoring in Mechanical Engineering from Delhi Technological University. I'm currently working for a startup as a Data scientist where I build machine learning models and analytic platforms.
			   Mathematics intrigues me. 
			   I like everything related to Science and Physics was my first love.
			   As nerdy as I sound, you'll mostly find me playing piano and first-person games.</p>
			<p>For a long time now, I wanted to find a person who I can look up to, follow their blogs, do what they do and become great like them. I found one but I guess it was too late for them to come back. Fortunately, now I try my level best to be one.</p>
			<p>So, welcome to my part of the internet, for my blog is an effort to seek and explain solutions to the various conundrums I encounter in my life. And, if you like what you read, be sure to let me know, it'd mean a lot!</p>
			<p><i>Cheers!</i></p>
		</div><br>

		<!-- <div class="container">
			<a class="links" href="blog.html">Blog</a>
			<a class="links" href="about.html">About</a>
			<a class="links" href="https://drive.google.com/file/d/1S6-G4wM7toAKVxcKyzdM-81g4UAlFmb9/view?usp=sharing" target="_blank">Résumé</a>
		</div><br><br><br> -->

		<!-- <div>
			<a href="https://github.com/tanmayag97" target="_blank" title="Collaborate with me"><i class="fa fa-github"></i></a>
			<a href="https://www.linkedin.com/in/the-tanmay-agarwal/" target="_blank" title="Connect with me"><i class="fa fa-linkedin"></i></a>
			<a href="mailto:tanmayag97@gmail.com" target="_blank" title="Send an email"><i class="fa fa-google"></i></a>
		</div><br> -->

			<div><a style="color:gray; font-size: 14px; text-decoration:none" href="index.html">Back home</a></div><br>

		<div class="fade_rule"></div><br>
		<div style="color:gray; font-size: 14px; paddin-bottom:50px"> Made with ❤ by <a style="color:grey" href="http://tanmayagarwal.ml/"> Tanmay Agarwal </a> </div>
		<br><br><br>



	</div>
</body>
</html>

<!-- particle.js -->
<script type="text/javascript">

	particlesJS("particles-js",{"particles":{"number":{"value":150,"density":{"enable":true,"value_area":1000}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":8}},"opacity":{"value":0.2,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":30,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":/*change this to change modes between bubble, repulse etc*/"repulse"},"onclick":{"enable":/*change to true to add new particles on click*/false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.2}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":150,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
	var count_particles, stats, update;
	stats = new Stats;
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	count_particles = document.querySelector('.js-count-particles');
	update = function() {
		stats.begin();
		stats.end();
		if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
			count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
		}
		requestAnimationFrame(update);
	};
	requestAnimationFrame(update);;
</script>
