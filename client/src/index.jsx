import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import computerList from './component/computerList.jsx';
//import computerListEntry from './component/computerListEntry.jsx';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      
    }

  }

  // search (term) {
  //   //var server =127.0.0.1:1128;
  //   console.log(`${term} was searched`);
  //   // TODO

  //   $.ajax({
  //       url : "http://127.0.0.1:1128/repos",
  //       type: "POST",
  //       data:term,
  //       //'content-Type': "json" ,
  //        dataType   : "json",
  //       success    : function(){
  //           console.log("Pure jQuery Pure JS object");
  //       }
  //   });
  // }


  render () {
    return (<div>
      <h1>computers list </h1>
      <computerlist  />
      
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));