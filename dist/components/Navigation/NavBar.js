import _JSXStyle from "styled-jsx/style";
import { useEffect, useState, useContext } from 'react';

const NavBar = ({
  children
}, props) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4228264932"
  }, ".navContainer.jsx-4228264932{position:relative;top:0px;left:0px;}.topNavContent.jsx-4228264932{width:100%;margin :0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.topNav.jsx-4228264932{background-color:black;height:48px;}.topNav.jsx-4228264932,.bottomNav.jsx-4228264932{height:48px;width:100%;}.bottomNav.jsx-4228264932{position:-webkit-sticky;position:sticky;position:-webkit-sticky;top:0px;left:0px;background-color:rgba(29,29,31,0.72);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);margin:0px;z-index:10;}.bottomNavTitle.jsx-4228264932{color:#fff;opacity:0.92;font-size:var(--smallFontSize);font-weight:600;margin:0px;}.bottomNavContent.jsx-4228264932{max-width:var(--maxWidth);margin :0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;}a.jsx-4228264932{color:white;font-size:var(--smallFontSize);}img.jsx-4228264932{width:30px;cursor:pointer;}"), /*#__PURE__*/React.createElement("div", {
    className: "jsx-4228264932" + " " + "navContainer"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "jsx-4228264932"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsx-4228264932" + " " + "topNav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsx-4228264932" + " " + 'topNavContent'
  }, children))), /*#__PURE__*/React.createElement("div", {
    className: "jsx-4228264932" + " " + "bottomNav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsx-4228264932" + " " + 'bottomNavContent'
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsx-4228264932"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jsx-4228264932"
  }, props.test)), /*#__PURE__*/React.createElement("div", {
    className: "jsx-4228264932"
  })))));
};

export default NavBar;