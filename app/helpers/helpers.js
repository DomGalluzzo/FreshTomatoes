// ! Converts runtime minutes into xhour and xminutes format
export const runtimeConversion = (n) => {
  let num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}m`;
};

// ! Compute a movie's average rating score
export const averageRating = (reviews) => {
  let xReviews = reviews;
  let total = 0;

  xReviews === undefined
    ? ""
    : xReviews.forEach((review) => {
        total += review.rating;
      });

  total = Math.floor((total / 50) * 100);
  if (total > 100) {
    total = 100;
  }
  return total;
};
