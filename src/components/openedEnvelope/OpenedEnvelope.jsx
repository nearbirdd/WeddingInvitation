import Beads from "../beads/Beads"
import "./openedEnvelope.scss"

const OpenedEnvelope = (prop) => {

    const {
        setShowOpened,
    } = prop

    return (
        <div 
        className= {`openedEnvelopeWrapper ${setShowOpened ? "apearence" : ""}`}
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