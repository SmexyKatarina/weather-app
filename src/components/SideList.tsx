import React from "react";

import '../css/sidelist.css';

const SideList = (props: { children: React.ReactNode[], name: string, additionalStyles?: {}}) => {

    const { children, name, additionalStyles } = props;

    return (
        <div className="sidelist-container" style={{ display: children.length > 0 ? "block" : "none", ...additionalStyles }}>
            <div className="sidelist-title">{name}</div>
            {children}
        </div>
    );
}

export default SideList;