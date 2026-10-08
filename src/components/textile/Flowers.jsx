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
                <p className="husband">Артём</p>
                <p>и</p>
                <p className="wife">Марина</p>
                <p className="day">05</p>
                <p className="month">06</p>
                <p className="year">27</p>
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