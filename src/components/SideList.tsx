import React from "react";

import '../css/sidelist.css';

const SideList = (props: { children: React.ReactNode[], name: string}) => {

    const { children, name} = props;

    return (
        <div className="sidelist-container">
            <div className="sidelist-title">{name}</div>
            {children}
        </div>
    );
}

export default SideList;