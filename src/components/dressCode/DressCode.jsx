import "./dressCode.scss"

const DressCode = (props) => {

    const {
        setShowOpened,
    } = props

    return (
        <div className={`dressCodeWrapper ${setShowOpened ? "apearence" : ""}`}>
            <h2>Дресс-код</h2>
            <p>Мы очень старались сделать этот день красивым и будем очень рады, если выподдержите атмосферу праздника своими нарядами в кофейных и бежевых оттенках.</p>
            <img src="./images/examplesColor.webp" alt="Цветастые тряпки" />
            <p>Мужчинам можно выбрать белую рубашку, милых дам просим воздержаться от белого цвета в одежде.</p>
            <img src="./images/dressCodeExamples.webp" alt="Какие-то люди" />
        </div>
    )
}

export default DressCode