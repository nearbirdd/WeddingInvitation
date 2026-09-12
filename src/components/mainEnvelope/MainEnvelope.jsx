import { useState } from "react";
import "./mainEnvelope.scss";

const MainEnvelope = (prop) => {

    const {
        handleAnimationEnd,
    } = prop

    return (
        <div
            className="mainEnvelopeSections"
        >
            <img
                className="upEnvelope"
                src="/images/upEnvelope.webp"
                alt="Верхняя часть конверта"
                onAnimationEnd={handleAnimationEnd}
            />
            <img
                className="downEnvelope"
                src="/images/downEnvelope.webp"
                alt="Нижняя часть конверта"
                onAnimationEnd={handleAnimationEnd}
            />
        </div>
    );
};

export default MainEnvelope;