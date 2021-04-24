import React from "react";
import { DockBackground } from "../DockBackground";

const Dock = ({ children, itemWidths, magnifyDirection, height, backgroundClassName, debug }) => {
    let styles = Object.assign(
        {
            display: "grid",
            gridTemplateColumns: itemWidths.map(() => "auto").join(" "),
            position: "relative",
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

    return (
        <div style={styles}>
            {React.Children.map(children, (item, index) => React.cloneElement(item, { width: itemWidths[index] }))}

            <DockBackground height={height} magnifyDirection={magnifyDirection} className={backgroundClassName} debug={debug} />
        </div>
    );
};

export default Dock;
