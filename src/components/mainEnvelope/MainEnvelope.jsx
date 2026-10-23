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
            <h2>Артём & противнаяДефка</h2>
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
            <span>Отправили вам приглашение</span>
        </div>
    );
};

export default MainEnvelope;