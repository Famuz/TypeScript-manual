(() => {
	const addNumber = (a: number, b: number) => a + b;
	const greet = (name: string) => `Hola ${name}`;
	const saveTheWorld = () => `El mundo está salvado!`;

	// let myFunction: (y: number, z: number) => number;
	// let myFunction: (y: string) => string;
	let myFunction: () => string;

	// myFunction = 10;
	// console.log(myFunction);

	// myFunction = addNumber;
	// console.log(myFunction(1, 2));

	// myFunction = greet;
	// console.log(myFunction('Juan'));

	myFunction = saveTheWorld;
	console.log(myFunction());
})();
