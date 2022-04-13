import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Search from './pages/search/index';
import Trending from './pages/trending/index';
import './App.css';

function AppRouter() {

    const route = [
        {
            path: "/",
            component: Search
        },
        {
            path: "/trending",
            component: Trending
        }
    ]
    return (
        <Router>
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <Link to="/trending">trending</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/">
                    <Search />
                </Route>
                <Route path="/trending">
                    <Trending />
                </Route>
                {/* {route.map(({ path, component }, key) => {
                        return (
                            <Route path={path} component={component} key={key} />
                        )
                    })} */}
            </Switch>

        </Router>
    )
}

export default AppRouter;