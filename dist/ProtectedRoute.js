function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  redirectRoute,
  guardFunction,
  guardFunctionArgs,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(Route, _extends({}, rest, {
    render: props => {
      if (guardFunction && guardFunction(guardFunctionArgs)) {
        return /*#__PURE__*/React.createElement(Component, props);
      } else {
        return /*#__PURE__*/React.createElement(Redirect, {
          to: redirectRoute
        });
      }
    }
  }));
};

export default ProtectedRoute;