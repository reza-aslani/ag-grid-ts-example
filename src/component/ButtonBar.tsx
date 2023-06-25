import React from "react";

import "./ButtonBar.css";

const ButtonBar = (props: { children: any }) => {
    return <div className="Button-Bar">{props.children}</div>;
};

export default ButtonBar;
