import React from "react";
import PropTypes from "prop-types";

const Title = ({ text, subtext, style, className, id }) => {
  return (
    <div className="title-header-container">
      <div className="title-span-div mb-0">
        <span className={className} id={id} style={style}>
          {text}
        </span>
        <span>{subtext}</span>
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
