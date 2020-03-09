import React from "react";

const SVG = ({
    style = {},
    fill = "#000",
    stroke = "#000",
    width = "100%",
    className = "",
    viewBox = "0 0 30 30"
}) => (
        <svg
            width={width}
            style={style}
            height={width}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            className={`${className || ""}-icon`}
        >
            <path class="top" d="M0 9h30v2H0z" />
            <line class="mid" x1="0" y1="15" x2="30" y2="15" stroke={stroke} stroke-width="2" vector-effect="non-scaling-stroke" />
            <path class="bot" d="M0 19h30v2H0z" />
        </svg>
    );

export default SVG;
