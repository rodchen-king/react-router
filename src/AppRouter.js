import React from "react";
import { BrowserRouter, Route, NavLink, Switch  } from "react-router-dom";
import Index from './pages/Index'
import Video from './pages/Video'
import WorkPlace from './pages/WorkPlace'
import NotFound from './NotFound'
import './index.css'

function AppRouter() {
    return (
      <BrowserRouter>
          <div className="mainDiv">
            <div className="leftNav">
                <h3>一级导航</h3>
                <ul>
                    <li> <NavLink to="/home">博客首页</NavLink> </li>
                    <li><NavLink activeClassName="active" to="/video/">视频教程</NavLink> </li>
                    <li><NavLink to="/workplace/0001?name=rodchen">职场技能</NavLink> </li>
                </ul>
            </div>
            
            <div className="rightMain">
              {/* <Switch> */}
                <Route path="/home" exact component={Index} />
                <Route path="/video/" component={Video} />
                <Route path="/workplace/:id" component={WorkPlace} />
                <Route name='404' component={NotFound} />
              {/* </Switch>   */}
            </div>
          </div>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;
  

