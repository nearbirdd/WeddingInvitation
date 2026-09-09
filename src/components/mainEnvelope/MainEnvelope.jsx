import { useState } from "react";
import "./mainEnvelope.scss";

const MainEnvelope = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleAnimationEnd = () => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
    };

    if (!isVisible) return null;

    return (
        <div className="mainEnvelopeSections">
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