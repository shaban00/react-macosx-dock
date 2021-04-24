import React from "react";

const DockOffset = ({ width, height, magnifyDirection, debug }) => {
    let styles = Object.assign(
        {
            width: `${width}px`,
            height: `${height}px`,
            background: "red",
            opacity: debug ? 0.5 : 0,
        },
        (() => {
            switch (magnifyDirection) {
                case "up":
                    return { alignSelf: "end" };
                case "down":
                    return { alignSelf: "start" };
                case "center":
                    return { alignSelf: "center" };
            }
        })(),
    );
    return <div style={styles} />;
};

export default DockOffset;
