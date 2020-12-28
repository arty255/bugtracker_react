import React from 'react'
import Nav from './pages/Nav'
import Issues from "./pages/Issues";
import About from "./pages/About";
import Users from "./pages/Users";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Tickets from "./pages/Tickets";
import IssueDetail from "./Issue/IssueDetail";

function App() {
    return (
        <Router>
            <div>
                <Nav/>
                <Switch>
                    <Route path="/tickets" component={Tickets}/>
                    <Route path="/issues/:uuid" component={IssueDetail}/>
                    <Route path="/issues" exact component={Issues}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/about" component={About}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
        </Router>
    )
}

const Home = () => (
    <div>
        <h1> Home </h1>
    </div>
)

export default App;