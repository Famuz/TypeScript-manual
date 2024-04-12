(() => {
	const fullName = (
		firstName: string,
		lastName?: string,
		uppercase: boolean = false
	): string => {
		if (uppercase) {
			return `${firstName} ${lastName || '-- no lastname'}`.toUpperCase();
		} else {
			return `${firstName} ${lastName || '-- no lastname'}`;
		}
	};

	const name = fullName('Tony', 'Stark', true);
	console.log({ name });
})();
