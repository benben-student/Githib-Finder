import React, { Fragment } from "react";
export default function ErrorExample() {
    let title = "通过错误的案例，让大家了解useState的用法"
    const handleClick = () => {
        title = "Hello World"
        console.log(title);
    }
    return (
        <Fragment>
            <h2>{title}</h2>
            <button className="btn" onClick={handleClick}>
                change title
            </button>
        </Fragment>
    )
}