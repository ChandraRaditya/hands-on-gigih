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
            <div>
                <ul>
                    <li>
                        <Link to="/">Search</Link>
                    </li>
                    <li>
                        <Link to="/trending">trending</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    {/* <Route exact path="/">
                        <Search />
                    </Route>
                    <Route path="/trending">
                        <Trending />
                    </Route> */}
                    {route.map(({ path, component }, key) => {
                        return (
                            <Route path={path} component={component} key={key} />
                        )
                    })}
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;