import "./eveningProgram.scss"

const EveningProgram = (props) => {

    const {
        setShowOpened,
    } = props

    return (
        <div className={`infBoardWrapper ${setShowOpened ? "apearence" : ""}`}>
            <div className="infBoardContent">
                <img src="./images/board.webp" alt="Доска" className="boardImg" />
                <div className="contentText">
                    <h2>Программа вечера</h2>
                    <span>16:00</span>
                    <p>Сбор гостей. Фуршет</p>
                    <span>16:30</span>
                    <p>Выездная регистрация</p>
                    <span>17:30</span>
                    <span>Праздничный банкет</span>
                </div>
                <img src="./images/lightFlowers.webp" alt="Белый цветок" className="lightFlowers" />
            </div>
        </div>
    )
}

export default EveningProgram