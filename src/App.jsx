import { useState } from "react";
import MainEnvelope from "./components/mainEnvelope/MainEnvelope";
import OpenedEnvelope from "./components/openedEnvelope/OpenedEnvelope";
import "./index.scss";
import "./App.scss";

const App = () => {
    const [showMain, setShowMain] = useState(true);
    const [showOpened, setShowOpened] = useState(false);

    const handleAnimationEnd = () => {
        setShowMain(false);
        setShowOpened(true);   // показываем открытый конверт
    };

    return (
        <div className="app">
            {showMain && (
                <MainEnvelope handleAnimationEnd={handleAnimationEnd} />
            )}

            {showOpened && (
                <OpenedEnvelope isVisible={true} />
            )}
        </div>
    );
};

export default App;