// Generated with util/create-component.js
import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
    <div data-testid="Button" className="foo-bar" onClick={onClick}>{label}</div>
);

export default Button;

