import React from 'react';
import { BrowserRouter, Route,Link } from 'react-router-dom';

const PageOne = () => {
    return (
    <di>
        PageOne
        <Link to="/pagetwo">Navigate to Page Two</Link>
    </di>
    )
}
const PageTwo = () => {
    return (
    <di>
        <button>Click Me</button>
        <Link to="/">Navigate to Page One</Link>
    </di>
    )
}
const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" exact component={PageTwo} />
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App;