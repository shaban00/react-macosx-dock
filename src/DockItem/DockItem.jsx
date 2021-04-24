import React from "react";

const DockItem = ({ width, className, onClick, children, debug }) => {
    let styles = {
        width: `${width}px`,
        height: `${width}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        border: debug ? "1px solid red" : null,
        zIndex: 1,
    };
    return (
        <div className={className} style={styles} onClick={onClick}>
            {children}
        </div>
    );
};

export default DockItem;
