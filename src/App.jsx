import { useState } from "react";
import MainEnvelope from "./components/mainEnvelope/MainEnvelope";
import OpenedEnvelope from "./components/openedEnvelope/OpenedEnvelope";
import DateWedding from "./components/dateWedding/DateWedding";
import Location from "./components/location/Location";
import EveningProgram from "./components/eveningProgram/EveningProgram";
import DressCode from "./components/dressCode/DressCode";
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
            <div className="bgg">
                <img src="./images/bgd.webp" alt="ЕБАНЫЙ ФОН" className="bg-image" />
            </div>
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
            <DressCode
                setShowOpened={!showMain ? true : undefined}
            ></DressCode>
        </div>
    );
};

export default App;