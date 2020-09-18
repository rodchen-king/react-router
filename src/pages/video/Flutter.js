import React from "react";
import {withRouter} from 'react-router-dom' //引入withRouter

function Flutter(props){
  console.log(props.match)

    return (
      <div>
        <h2>我是Flutter页面</h2>
        <TestWithRouter />
      </div>
    )
}

// function TestWithRouter(props) {
//   console.log(props.match)
//     return (<h2>我是testWithRouter页面</h2>)
// }


const TestWithRouter = withRouter((props) => {
  console.log(props.match)
  return (<h2>我是testWithRouter1页面</h2>)
})

export default Flutter;
