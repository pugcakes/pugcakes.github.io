(function newQuote() {
	var quotes = [
		// none
		"Tip: I am so fucking mad",
		"Please be patient with me",
		"You're breathing manually now!",
		"?",
		// "that horriible p2ychiic noii2e... the voiice2... they're all goiing two diie",
		"That horrible psychic noise... the voices... they're all going to die",
		"I hope you have fun trying to figure out my music taste by this random quote generator",
		"It's time to live up to my family name and face full  life   consequences",
		"Weapon weapon wep wep weapon wep weap on weapon",
		"Normal people close",
		"One little egg was blind make suicide with pan boom boom dubi dam",
		"I tell them I love you I don't wanna leave you",
		"I should have known that I could have never ever known",
		"To sink or to shine, the nails are all mine",
		"But when it comes it's so. So dissapointing",
		"Go to another party and hang myself. Gently on the shelf",
		"Girls who want boys who love boys to be girls who treat boys like they're girls who treat girls like they're boys",
		"Weezer"];
	var randomQuote = Math.floor(Math.random() * quotes.length);
	document.getElementById('quote').innerHTML = quotes[randomQuote];
})();