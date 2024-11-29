import React from "react";

import "../css/error.css";

const Error = (props: { message: string, status: number, setError: React.Dispatch<React.SetStateAction<{ message: string, status: number }>>}) => {

    const { message, status, setError } = props;

    return (
        <div className="error-tile" onAnimationEnd={() => {
            setError({ message: "", status: 0 });
        }}>
            <div className="error-status">Error: {status}</div>
            <div className="error-message">Reason: {message}</div>
        </div>
    );
}

export default Error;