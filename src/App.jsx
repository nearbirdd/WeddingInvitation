import { useState } from "react";
import MainEnvelope from "./components/mainEnvelope/MainEnvelope";
import OpenedEnvelope from "./components/openedEnvelope/OpenedEnvelope";
import Textile from "./components/textile/Textile";
import Location from "./components/location/Location";
import "./index.scss";
import "./App.scss";


const App = () => {
    const [showMain, setShowMain] = useState(true);
    const [showOpened, setShowOpened] = useState(false);

    const handleAnimationEnd = () => {
        setShowMain(false);
        setShowOpened(true);
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
            <Location />
        </div>
    );
};

export default App;