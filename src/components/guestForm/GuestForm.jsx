import "./guestForm.scss"

const GuestForm = (props) => {

    const {
        setShowOpened,
    } = props

    return (
        <div className={`guestFormWrapper ${setShowOpened ? "apearence" : ""}`}>
            <img src="./images/board.webp" alt="" className="boardImg" />
            <div className="contentGuestForm">
                <h2>Анкета гостя</h2>
                <p>Пожалуйста, подтвердите свое присутствие до 10.04.2027 года, чтобы мы могли спланировать нашу свадьбу наилучшим образом.</p>
                <span>Ваше присутствие на торжестве:</span>
                <li>
                    <label htmlFor="present">
                        <input type="radio" name="answer" id="present" value="yes" />
                        Да, с удовольствием приду!
                    </label>

                    <label htmlFor="notPresent">
                        <input type="radio" name="answer" id="notPresent" value="no" />
                        Нет я хуесос
                    </label>
                </li>
                <input type="text" name="" id="FullNameGuest" placeholder="Введите имя и фамилию" />
                <button className="acceptPresent">Отправить анкету</button>
            </div>
        </div>
    )
}

export default GuestForm