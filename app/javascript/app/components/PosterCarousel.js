import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const posterCarousel = ({ items }) => {
	const responsive = {
		largeDesktop: {
			breakpoint: { max: 4000, min: 1199 },
			items: 5.75,
			slidesToSlide: 5.5,
		},
		desktop: {
			breakpoint: { max: 1200, min: 992 },
			items: 4.5,
			slidesToSlide: 4.5,
		},
		tablet: {
			breakpoint: { max: 991, min: 768 },
			items: 3.5,
			slidesToSlide: 3.5,
		},
		mobile: {
			breakpoint: { max: 767, min: 576 },
			items: 2.5,
			slidesToSlide: 2.5,
		},
	};
	return (
		<Carousel responsive={responsive} showDots={false}>
			{items}
		</Carousel>
	);
};

export default posterCarousel;
