import "./dressCode.scss"

const DressCode = (props) => {

    const {
        setShowOpened,
    } = props

    return (
        <div className={`dressCodeWrapper ${setShowOpened ? "apearence" : ""}`}>
            <h2>Дресс-код</h2>
            <p>Мы очень старались сделать этот день красивым и будем очень рады, если выподдержите атмосферу праздника своими нарядами в кофейных и бежевых оттенках.</p>
            <img style={{marginBottom: `5%`}} src="./images/examplesColor.webp" alt="Цветастые тряпки" />
            <span>Мужчинам можно выбрать белую рубашку.</span>
            <span style={{marginBottom: `5%`}}>Милых дам просим воздержаться от белого цвета в одежде.</span>
            <img src="./images/dressCodeExamples.webp" alt="Какие-то люди" />
        </div>
    )
}

export default DressCode