import { useState } from "react";
import MainEnvelope from "./components/mainEnvelope/MainEnvelope";
import OpenedEnvelope from "./components/openedEnvelope/OpenedEnvelope";
import Textile from "./components/textile/Textile";
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
            <OpenedEnvelope
                setShowOpened={!showMain ? true : undefined}>
            </OpenedEnvelope>
            <Textile
                setShowOpened={!showMain ? true : undefined}
            ></Textile>
        </div>
    );
};

export default App;