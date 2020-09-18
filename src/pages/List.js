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
      return (  <h2>List Page {match.params.id}</h2> );
    }
}
 
export default List;
