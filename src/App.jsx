import { useState } from "react";
import MainEnvelope from "./components/mainEnvelope/MainEnvelope";
import OpenedEnvelope from "./components/openedEnvelope/OpenedEnvelope";
import DateWedding from "./components/dateWedding/DateWedding";
import Location from "./components/location/Location";
import EveningProgram from "./components/eveningProgram/EveningProgram";
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
            <DateWedding
                setShowOpened={!showMain ? true : undefined}
            ></DateWedding>
            <Location
                setShowOpened={!showMain ? true : undefined}
            ></Location>
            <EveningProgram
                setShowOpened={!showMain ? true : undefined}
            ></EveningProgram>
        </div>
    );
};

export default App;