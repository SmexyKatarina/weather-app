import React from "react";

import '../css/sidelist.css';

const SideListItem = (props: any) => {

    const { action, text } = props;

    return (
        <div className="sidelist-item" onClick={(e) => action(e)}>
            <div className="sidelist-text">{text}</div>
        </div>
    );
}

export default SideListItem;

