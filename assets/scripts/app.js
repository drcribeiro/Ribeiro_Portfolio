const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "teaching",
				weight: 7
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 13
			}, {
				text: "HTML",
				weight: 6
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "machine learning",
				weight: 12.3
			}, {
				text: "java",
				weight: 9
			}, {
				text: "python",
				weight: 15
			}, {
				text: "algorithms",
				weight: 10
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"have a PhD in Computer Science", "from the University of Waterloo.", "am a Full-Stack Web Developer.", "love everything about code.", "am a Computer Sicence Professor.", "develop business solutions."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#fc7151", "font-weight": "bold"});  //#C8412B
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
