import React from "react";
import PropTypes from "prop-types";

const Title = ({ text, style, className, id }) => {
	return (
		<div className="title-header-container">
			<div className="title-span-div">
				<span className={className} id={id} style={style}>
					{text}
				</span>
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
