import React from "react";
import {  Route, Link, Switch  } from "react-router-dom";
import Reactpage from './video/ReactPage'
import Vue from './video/Vue'
import { Tabs } from 'antd';
import Flutter from './video/Flutter'

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }

function Video(props){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React教程</Link></li>
                    <li><Link to="/video/vue">Vue教程</Link></li>
                    <li><Link to="/video/flutter">Flutter教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <button onClick={() => {props.history.push('/')}}>跳转首页</button>
                {/* <Switch> */}
                {/* <Tabs defaultActiveKey="1" onChange={(key) => {props.history.push(key)}}>
                    <TabPane tab="Tab 1" key="/video/reactpage">
                    <Route  component={Reactpage} />
                    </TabPane>
                    <TabPane tab="Tab 2" key="/video/vue/">
                    <Route  component={Vue} />
                    </TabPane>
                    <TabPane tab="Tab 3" key="/video/flutter/">
                    <Route  component={Flutter} />
                    </TabPane>
                </Tabs> */}
                    {/* <Route path="/video/reactpage/"   component={Reactpage} />
                    <Route path="/video/vue/"   component={Vue} />
                    <Route path="/video/flutter/"   component={Flutter} /> */}
                {/* </Switch> */}
            </div>
        </div>
    )
}
export default Video;
