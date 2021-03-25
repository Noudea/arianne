import _JSXStyle from "styled-jsx/style";
import React from 'react';

const OutlineRoundButton = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3217268813",
    dynamic: [props.color, props.color]
  }, `button.__jsx-style-dynamic-selector{padding:9px 19px;text-align:left;background-color:transparent;border-radius:100px;border:2px ${props.color} solid;font-weight:600;font-size:17px;color:${props.color};margin:6px 0px 30px 0px;cursor:pointer;outline:none;}`), /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick,
    className: _JSXStyle.dynamic([["3217268813", [props.color, props.color]]])
  }, props.textContent));
};

export default OutlineRoundButton;