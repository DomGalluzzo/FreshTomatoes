import React from "react";
import PropTypes from "prop-types";

const Title = ({ text, style, className }) => {
	return (
		<p className={className} style={style}>
			{text}
		</p>
	);
};

Title.defaultProps = {
	text: "Default Text",
};

Title.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Title;
