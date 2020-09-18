
import React, { Component } from 'react';

let UNLISTEN;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        // UNLISTEN变量用来接收解绑函数
        UNLISTEN = this.props.history.listen(route => { 
            console.log(route); 
        });
    }
    componentWillUnmount(){
        UNLISTEN && UNLISTEN(); // 执行解绑
    }

    render() { 
        return (  <h2>JSPang.com</h2> );
    }
}
 
export default Index;