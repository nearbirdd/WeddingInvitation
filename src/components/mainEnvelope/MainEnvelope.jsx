import { useState } from "react";
import "./mainEnvelope.scss";

const MainEnvelope = (props) => {

    const {
        handleAnimationEnd,
    } = props

    return (
        <div
            className="mainEnvelopeSections"
        >
            <img
                className="upEnvelope"
                src="./images/upEnvelope.webp"
                alt="Верхняя часть конверта"
                onAnimationEnd={handleAnimationEnd}
            />
            <img
                className="downEnvelope"
                src="./images/downEnvelope.webp"
                alt="Нижняя часть конверта"
                onAnimationEnd={handleAnimationEnd}
            />
        </div>
    );
};

export default MainEnvelope;