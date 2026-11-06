// import "./guestForm.scss"

// const GuestForm = (props) => {

//     const {
//         setShowOpened,
//     } = props

//     return (
//         <div className={`guestFormWrapper ${setShowOpened ? "apearence" : ""}`}>
//             <img src="./images/board.webp" alt="" className="boardImg" />
//             <div className="contentGuestForm">
//                 <h2>Анкета гостя</h2>
//                 <p>Пожалуйста, подтвердите свое присутствие до 10.04.2027 года, чтобы мы могли спланировать нашу свадьбу наилучшим образом.</p>
//                 <span>Ваше присутствие на торжестве:</span>
//                 <li>
//                     <label htmlFor="present">
//                         <input type="radio" name="answer" id="present" value="yes" />
//                         Да, с удовольствием приду!
//                     </label>

//                     <label htmlFor="notPresent">
//                         <input type="radio" name="answer" id="notPresent" value="no" />
//                         Нет я хуесос
//                     </label>
//                 </li>
//                 <input type="text" name="" id="FullNameGuest" placeholder="Введите имя и фамилию" />
//                 <button className="acceptPresent">Отправить анкету</button>
//             </div>
//         </div>
//     )
// }

// export default GuestForm

import { useState } from "react";
import "./guestForm.scss";

const GuestForm = (props) => {
    const { setShowOpened } = props;

    // Стейты для формы
    const [fullName, setFullName] = useState("");
    const [attendance, setAttendance] = useState("yes"); // По умолчанию "Да"
    const [status, setStatus] = useState(""); // Для сообщений об успехе/ошибке
    const [isSubmitting, setIsSubmitting] = useState(false);

    // URL вашего развернутого скрипта (замените на свой)
    const SCRIPT_URL = "https://script.google.com/macros/s/ВАШ_ID/exec";

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!fullName.trim()) {
            setStatus("Пожалуйста, введите имя и фамилию.");
            return;
        }

        setIsSubmitting(true);
        setStatus("Отправка...");

        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain", // Обязательно для обхода CORS
                },
                body: JSON.stringify({
                    fullName: fullName.trim(),
                    attendance: attendance, // "yes" или "no"
                }),
            });

            const result = await response.json();

            if (result.result === "success") {
                setStatus("Спасибо! Ваш ответ сохранен.");
                setFullName("");
                setAttendance("yes"); // Сброс формы
            } else {
                setStatus("Ошибка: " + (result.message || "Неизвестная ошибка"));
            }
        } catch (error) {
            console.error(error);
            setStatus("Ошибка сети. Попробуйте позже.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`guestFormWrapper ${setShowOpened ? "apearence" : ""}`}>
            <img src="./images/board.webp" alt="" className="boardImg" />
            <div className="contentGuestForm">
                <h2>Анкета гостя</h2>
                <p>Пожалуйста, подтвердите свое присутствие до 10.04.2027 года, чтобы мы могли спланировать нашу свадьбу наилучшим образом.</p>
                
                <form onSubmit={handleSubmit}>
                    <span>Ваше присутствие на торжестве:</span>
                    <ul className="radio-group">
                        <li>
                            <label htmlFor="present">
                                <input 
                                    type="radio" 
                                    name="answer" 
                                    id="present" 
                                    value="yes" 
                                    checked={attendance === "yes"}
                                    onChange={(e) => setAttendance(e.target.value)}
                                />
                                Да, с удовольствием приду!
                            </label>
                        </li>
                        <li>
                            <label htmlFor="notPresent">
                                <input 
                                    type="radio" 
                                    name="answer" 
                                    id="notPresent" 
                                    value="no" 
                                    checked={attendance === "no"}
                                    onChange={(e) => setAttendance(e.target.value)}
                                />
                                Нет, к сожалению, не смогу прийти
                            </label>
                        </li>
                    </ul>

                    <input 
                        type="text" 
                        id="FullNameGuest" 
                        placeholder="Введите имя и фамилию" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    
                    <button 
                        type="submit" 
                        className="acceptPresent"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Отправка..." : "Отправить анкету"}
                    </button>
                </form>

                {status && <p className="form-status">{status}</p>}
            </div>
        </div>
    );
};

export default GuestForm;