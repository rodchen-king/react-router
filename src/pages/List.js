import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          name: 'rodchen'
         }
    }
    render() { 
      const { match } = this.props;
      debugger
      return (
        <div>
          <h2>List Page {match.params.id}</h2>
          <button onClick={() => {this.props.history.push('/home')}}>跳转首页</button>
        </div>
      );
    }
}
 
export default List;
