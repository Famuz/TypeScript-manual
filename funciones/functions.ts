(() => {
	const hero: string = 'Flash';

	function returnName(): string {
		return hero;
	}

	const activateBatiSignal = () => {
		return 'Batiseñal activada';
	};

	console.log(typeof activateBatiSignal);

	const heroName = returnName();
})();
