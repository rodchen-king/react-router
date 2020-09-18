import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './pages/Index';
import List from './pages/List';
import NotFoundPage from './pages/NotFoundPage'

function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list/123?name=rodchen">列表</Link> </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/:id" exact component={List} />
        <Route path="/404" component={NotFoundPage} />
    </Router>
  );
}
export default AppRouter;
