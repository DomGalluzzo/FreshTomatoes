// ! Converts runtime minutes into xhour and xminutes format
export function runtimeConversion(n) {
	let num = n;
	let hours = num / 60;
	let rhours = Math.floor(hours);
	let minutes = (hours - rhours) * 60;
	let rminutes = Math.round(minutes);
	return `${rhours}h ${rminutes}m`;
}

export function averageRating(reviews) {
	let xReviews = reviews;
	let total = 0;

	xReviews.forEach((review) => {
		total += review.rating;
	});

	total = (total / 50) * 100;
	return `${total}%`;
}
