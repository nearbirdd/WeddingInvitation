import Beads from "../beads/Beads"
import MainEnvelope from "../mainEnvelope/MainEnvelope"
import "./openedEnvelope.scss"

const OpenedEnvelope = (prop) => {

    const {
        isVisible
    } = prop

    return (
        <div 
        className="openedEnvelopeWrapper apearence"
        >
            <div
                className="coloredBackground">
                <img
                    className="openedEnvelope"
                    src="./images/openedEnvelope.webp"
                    alt="Открытый конверт"
                />
                <div className="beadsWrapper">
                    <Beads></Beads>
                </div>
            </div>
        </div>
    )
}

export default OpenedEnvelope