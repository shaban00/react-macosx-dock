import * as React from "react";

type Props = {
    message: string
}

export default ({message}: Props) => {
    return <div>{message}</div>;
};
