import "./textile.scss"

const Textile = (props) => {

    const {
        setShowOpened,
    } = props

    return (
        <div className={`textileWrapper ${setShowOpened ? "apearence" : ""}`}>
            <img
                className="textileImage"
                src="./images/textile.webp"
                alt="Ткань ебучая"
            />
        </div>
    )
}

export default Textile