import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import computerList from './components/computerList.jsx';
import computerListEntrey from './components/computerListEntry.jsx';
class App extends React.Component {
  
  constructor(props) {
    super(props);
    
  images:window.images
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
    return ( <div>Tech store
      <computerList />
      
       </div>
      )
      
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
