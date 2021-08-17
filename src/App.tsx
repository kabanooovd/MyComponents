import React from 'react';
import './App.css';
import OnOff from "./Components/OnOff/OnOff";
import {Rating} from "./Components/Rating/Rating";
import {Select} from "./Components/Selector/Select";
import {NewAdditionsSelect} from "./Components/useMemo17/NewAdditionsSelect";

function App() {
    return (
        <div className="App">
            <div>
                <OnOff/>
            </div>
            <div>
                {/*<Rating setRatingValue={()=>{}} value={4} />*/}
                <Rating/>
            </div>
            <div>
                <Select />
                <NewAdditionsSelect />
            </div>
        </div>
    );
}

export default App;
