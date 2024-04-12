(() => {
	const batman: string = 'Batman';
	const linternaVerde: string = "Linterna's Verde";
	const volcanNegro: string = `Hero: Volcan Negro`;

	const abc = 123;

	console.log(`I am ${batman}`);

	console.log(batman.toUpperCase());

	console.log(batman[10]?.toUpperCase() || 'No esta presente');
})();
