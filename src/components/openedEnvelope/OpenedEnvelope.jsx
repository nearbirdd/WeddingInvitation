import Beads from "../beads/Beads"
import "./openedEnvelope.scss"

const OpenedEnvelope = (props) => {

    const {
        setShowOpened,
    } = props

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
                <div className="openedEnvelopeMessage">
                    <h2>Дорогие родные и близкие!</h2>
                    <h3>Один день. Одна история. И вы - среди самых важных гостей!</h3>
                    <h3>Приглашаем вас разделить наш самый важный праздник!</h3>
                </div>
                <div className="beadsWrapper">
                    <Beads></Beads>
                </div>
            </div>
        </div>
    )
}

export default OpenedEnvelope