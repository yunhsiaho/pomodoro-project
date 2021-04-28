import React from "react";
import ReactDOM from 'react-dom';
import './css/style.css'//can also link css in html;
import Main from "./main";


const App = () => {
    return(
    <div className="App">
        <Main/>
    </div>
    
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))
