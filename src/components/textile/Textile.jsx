import "./textile.scss"

const Textile = (prop) => {

    const {
        setShowOpened,
    } = prop

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