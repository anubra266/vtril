import React from "react";

export default function Error(props: any) {
    return (
        <div>
            <h1>Error</h1>
            <span>{props.status} Error</span>
        </div>
    );
}
