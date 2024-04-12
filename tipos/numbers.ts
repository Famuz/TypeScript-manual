(() => {
	let avengers: number = 10;

	console.log(avengers);

	const villians: number = 20;

	if (avengers < villians) {
		console.log('Estamos en problemas');
	} else {
		console.log('Nos salvaron');
	}

	avengers = Number('12A');

	console.log(avengers);
})();
