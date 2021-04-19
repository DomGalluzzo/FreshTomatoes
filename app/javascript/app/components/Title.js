import React from "react";
import PropTypes from "prop-types";

const Title = ({ text, style, className }) => {
	return (
		<div className="title-header-row">
			<div className={className} style={style}>
				{text}
			</div>
		</div>
	);
};

Title.defaultProps = {
	text: "Default Text",
};

Title.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Title;
