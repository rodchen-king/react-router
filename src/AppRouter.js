import React from "react";
import { BrowserRouter, Route, Link, Switch  } from "react-router-dom";
import Index from './pages/Index'
import Video from './pages/Video'
import WorkPlace from './pages/WorkPlace'
import './index.css'

function AppRouter() {
    return (
      <BrowserRouter>
          <div className="mainDiv">
            <div className="leftNav">
                <h3>一级导航</h3>
                <ul>
                    <li> <Link to="/">博客首页</Link> </li>
                    <li><Link to="/video/">视频教程</Link> </li>
                    <li><Link to="/workplace">职场技能</Link> </li>
                </ul>
            </div>
            
            <div className="rightMain">
              {/* <Switch> */}
                <Route path="/" exact component={Index} />
                <Route path="/video/" component={Video} />
                <Route path="/workplace/"   component={WorkPlace} />
              {/* </Switch>   */}
            </div>
          </div>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;
  

