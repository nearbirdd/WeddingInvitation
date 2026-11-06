import { useState } from "react";
import "./guestForm.scss";

const GuestForm = (props) => {
    const { setShowOpened } = props;

    // Стейты для формы
    const [fullName, setFullName] = useState("");
    const [attendance, setAttendance] = useState("yes");
    const [guestCount, setGuestCount] = useState(1); // По умолчанию 1 человек
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // URL вашего развернутого скрипта (замените на свой)
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzHzgaq8lpavnD4pF8FIXBNVLm3S0xahsAJLYcQHxolFvyPEFqRuAwBbcNkY_APwl2-/exec";

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
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify({
                    fullName: fullName.trim(),
                    attendance: attendance,
                    // Если не придет, отправляем 0 гостей
                    guestCount: attendance === "yes" ? Number(guestCount) : 0, 
                }),
            });

            const result = await response.json();

            if (result.result === "success") {
                setStatus("Спасибо! Ваш ответ сохранен.");
                setFullName("");
                setAttendance("yes");
                setGuestCount(1);
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

                    {/* Блок с количеством гостей показывается только если выбран ответ "Да" */}
                    {attendance === "yes" && (
                        <div className="guestCountWrapper">
                            <label htmlFor="guestCount">Количество человек (включая вас):</label>
                            <input 
                                type="number" 
                                id="guestCount" 
                                min="1" 
                                max="10"
                                value={guestCount}
                                onChange={(e) => setGuestCount(e.target.value)}
                            />
                        </div>
                    )}
                    
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