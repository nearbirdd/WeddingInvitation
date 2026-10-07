import { useState } from "react";
import MainEnvelope from "./components/mainEnvelope/MainEnvelope";
import OpenedEnvelope from "./components/openedEnvelope/OpenedEnvelope";
import Flowers from "./components/textile/Flowers";
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
            <Flowers
                setShowOpened={!showMain ? true : undefined}
            ></Flowers>
            <Location
                setShowOpened={!showMain ? true : undefined}
            ></Location>
        </div>
    );
};

export default App;