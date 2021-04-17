import React from "react";
import PropTypes from "prop-types";

const Title = ({ text, style, className }) => {
	return (
		<span className={className} style={style}>
			{text}
		</span>
	);
};

Title.defaultProps = {
	text: "Default Text",
};

Title.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Title;
