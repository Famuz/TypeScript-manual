(() => {
	let avenger: any = 123;
	const exists: boolean = true;
	let power;

	avenger = 'Dr strange';
	// console.log(avenger.chartAt(2));
	console.log((avenger as string).charAt(0));

	avenger = 150.123125124;
	console.log(<number>avenger.toFixed(2));

	console.log(exists);
	console.log(power);
})();
