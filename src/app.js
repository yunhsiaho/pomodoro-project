import React from "react";
import ReactDOM from 'react-dom';
import './css/style.css'//can also link css in html;
import Pomodoro from "./pomodoro.js";

const App = () => {
    return(
    <div className="App">
        <Pomodoro />
    </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))

export default App;