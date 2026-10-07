import "./flowers.scss"

const Flowers = (props) => {

    const {
        setShowOpened,
    } = props

    return (
        <div className={`flowersWrapper ${setShowOpened ? "apearence" : ""}`}>
            <div className="flowersUpWrapper">
                <img
                    className="flowersUp"
                    src="./images/flowersUp.webp"
                    alt="Верхние цветы"
                />
            </div>
            <div className="flowerWrapperMessage">
                <p>хуй</p>
                <p>залупа</p>
                <p>пенис</p>
                <p>хер</p>
            </div>
            <div className="flowersDownWrapper">
                <img
                    className="flowersDown"
                    src="./images/flowersDown.webp"
                    alt="Нижние цветы"
                />
            </div>
        </div>
    )
}

export default Flowers