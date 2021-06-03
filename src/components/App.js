import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return <di>PageOne</di>
}
const PageTwo = () => {
    return <di>
        <button>Click Me</button>
    </di>
}
const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne} />
                <Route path="/pageTwo" exact component={PageTwo} />
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App;