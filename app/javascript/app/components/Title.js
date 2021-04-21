import React from "react";
import PropTypes from "prop-types";

const Title = ({ text, style, className, id }) => {
	return (
		<div className="title-header-container">
			<div className="title-span-div mb-0">
				<span className={className} id={id} style={style}>
					{text}
				</span>
			</div>
		</div>
	);
};

Title.defaultProps = {
	text: "Default Text",
	// style: { fontFamily: "Noto Sans TC" },
};

Title.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Title;
