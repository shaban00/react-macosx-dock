import React from "react";

const DockBackground = ({ height, magnifyDirection, className, debug }) => {
    let styles = Object.assign(
        {
            position: "absolute",
            width: "100%",
            height: `${height}px`,
            boxSizing: "border-box",
            border: debug ? "1px solid red" : null,
            zIndex: 0,
        },
        (() => {
            switch (magnifyDirection) {
                case "up":
                    return { bottom: 0 };
                case "down":
                    return { top: 0 };
                case "center":
                    return { top: "50%", transform: "translateY(-50%)" };
            }
        })(),
    );
    return <div className={className} style={styles} />;
};

export default DockBackground;
